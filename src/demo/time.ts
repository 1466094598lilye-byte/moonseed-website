// Copied from Moonseed (private repo), snapshot 2026-10-20, e21bb47. 网站的副本，不跟 app 同步。
// 来源：packages/core/src/workStats.ts（AXIS_START、Seg、dayMidnightMs）、packages/core/src/clock.ts（addDays）、
// apps/desktop/src/ui/time.ts 的英文分支（clockLabel、durLabel、weekday*、mdLabel）、apps/desktop/src/pages/Sow.tsx（fmtElapsed）。不引 core。
import { LOG } from '../copy.ts'

/** 显示用的轴起点：早上 6 点（分钟）。 */
export const AXIS_START = 6 * 60

/** 一段作业，单位是距当天本地零点的分钟数；跨午夜就大于 1440。end 为 null 是还在跑。 */
export interface Seg { start: number; end: number | null }

const pad = (n: number) => String(n).padStart(2, '0')

export function addDays(dayKey: string, n: number): string {
  const [y, m, d] = dayKey.split('-').map(Number)
  const r = new Date(Date.UTC(y, m - 1, d) + n * 86_400_000)
  return `${r.getUTCFullYear()}-${pad(r.getUTCMonth() + 1)}-${pad(r.getUTCDate())}`
}

export function dayMidnightMs(dayKey: string): number {
  const [y, m, d] = dayKey.split('-').map(Number)
  return new Date(y, m - 1, d).getTime()
}

/** 轴上的钟点：「9:40」，过了午夜「1:40 next day」。 */
export function clockLabel(min: number): string {
  const m = Math.round(min)
  const inDay = ((m % 1440) + 1440) % 1440
  const hm = `${Math.floor(inDay / 60)}:${pad(inDay % 60)}`
  return m < 1440 ? hm : `${hm} ${LOG.nextDay}`
}

/** 时长：「1 h 52 min」「35 min」。不足一分钟写秒——app 里取整成 0 min，演示里访客的段几乎都不到一分钟，这里和 app 不同。 */
export function durLabel(min: number): string {
  if (min < 1) return `${Math.min(59, Math.max(1, Math.round(min * 60)))} s`
  const m = Math.round(min)
  const h = Math.floor(m / 60)
  const r = m % 60
  if (h && r) return `${h} h ${r} min`
  if (h) return `${h} h`
  return `${r} min`
}

const weekdayOf = (dayKey: string): number => {
  const [y, m, d] = dayKey.split('-').map(Number)
  return new Date(y, m - 1, d).getDay()
}
export const weekdayLabel = (dayKey: string) => LOG.weekdays[weekdayOf(dayKey)]
export const weekdayShort = (dayKey: string) => LOG.weekdaysShort[weekdayOf(dayKey)]

/** 「8 Oct」 */
export function mdLabel(dayKey: string): string {
  const [, m, d] = dayKey.split('-').map(Number)
  return `${d} ${LOG.months[m - 1]}`
}

/** 正计时的写法：不到一小时 mm:ss，过了就 h:mm:ss。（app Sow.tsx 的 fmtElapsed） */
export function fmtElapsed(ms: number): string {
  const s = Math.floor(ms / 1000)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${pad(m)}:${pad(sec)}`
}
