// Copied from Moonseed (private repo) apps/desktop/src/pages/flow/OpLog.tsx (snapshot 2026-10-20, e21bb47). 网站的副本，不跟 app 同步。
// 去掉 store / i18n / 总结卡的打开（按钮照 app 灰着）；七天里只有今天有数据，数据从 props 来；core 的纯函数在 ./time.ts。
import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { LOG } from '../copy.ts'
import { addDays, AXIS_START, clockLabel, dayMidnightMs, durLabel, mdLabel, weekdayLabel, weekdayShort, type Seg } from './time.ts'

// 作业记录（spec 2026-10-12）：今天和之前六天，一页一天，默认停在今天；左右翻页，顶上的日期条可点。
// 竖轴从早上 6 点到次日 6 点；跨午夜的段自然画下去；还在跑的段用斜线画到"现在"。
const SHOWN = 7
const RECAP_DAYS = 14
// app 里颜色按生态球序号轮换；演示只有一个球，用第一个色
const COLOR = 'var(--accent)'

export interface OpLogProps {
  today: string
  ecosphereName: string
  seedText: string
  stateLabel: string
  segs: Seg[]
  onClose: () => void
}

export function OpLog({ today, ecosphereName, seedText, stateLabel, segs, onClose }: OpLogProps) {
  const keys = Array.from({ length: SHOWN }, (_, i) => addDays(today, i - (SHOWN - 1)))
  const pager = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(SHOWN - 1)
  // 打开时停在今天（绘制前就滚过去，不闪）
  useLayoutEffect(() => {
    const el = pager.current
    if (el) el.scrollLeft = el.scrollWidth
  }, [])
  const goTo = (i: number) => {
    const el = pager.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollTo({ left: i * el.clientWidth, behavior: reduce ? 'auto' : 'smooth' })
  }
  const onScroll = () => {
    const el = pager.current
    if (el) setPage(Math.round(el.scrollLeft / el.clientWidth))
  }
  // "现在"的虚线和还在跑的段都画到 now：页面开着时每半分钟刷一次
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 30_000)
    return () => clearInterval(timer)
  }, [])
  // 有记录的日子 = 收工过且至少一段收口的作业；演示里只有今天可能算
  const recorded = segs.some((s) => s.end !== null) ? 1 : 0
  const left = RECAP_DAYS - recorded
  return (
    <div className="oplog fadein">
      <div className="page-head">
        <button className="page-title" autoFocus aria-label={LOG.title} onClick={onClose}><span className="back" aria-hidden="true">‹</span>{LOG.title}</button>
      </div>
      <div className="chips">
        {keys.map((k, i) => (
          <button key={k} className={`chip-day ${i === page ? 'on' : ''}`} aria-pressed={i === page} aria-label={`${mdLabel(k)} ${weekdayLabel(k)}`} onClick={() => goTo(i)}>
            <b>{Number(k.slice(8))}</b><small>{weekdayShort(k)}</small>
          </button>
        ))}
      </div>
      <div className="pager" ref={pager} onScroll={onScroll}>
        {keys.map((k) => {
          const isToday = k === today
          return (
            <div className="pg" key={k}>
              <div className="dh">
                <span className={`date ${isToday ? 'td' : ''}`}>{isToday ? `${LOG.today} ` : ''}{mdLabel(k)} {weekdayLabel(k)}</span>
                {isToday && <span className="chip" style={{ color: COLOR }}>{ecosphereName}</span>}
                {isToday && <span className="st">{stateLabel}</span>}
              </div>
              {isToday ? <p className="seed">“{seedText}”</p> : <p className="seed none">{LOG.none}</p>}
              <div className="tl">
                <DayTimeline segs={isToday ? segs : []} color={COLOR} isToday={isToday} nowMin={(now - dayMidnightMs(k)) / 60_000} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="page-foot">
        <button className="btn-op" disabled>{LOG.recap}</button>
        <div className="btn-quiet faint">{LOG.recapHint.replace('{n}', String(left))}</div>
      </div>
    </div>
  )
}

// 竖轴：viewBox 320×392，6:00 在 y=12，次日 6:00 在 y=380；色条宽 52，起止写在右边，挤到一起时往下推并画一根牵线。
const AX = { top: 12, bottom: 380, x0: 34, barX: 44, barW: 52, lbX: 108, W: 320, H: 392 }
const yOf = (min: number) => AX.top + ((min - AXIS_START) / 1440) * (AX.bottom - AX.top)
const HOURS = Array.from({ length: 9 }, (_, i) => 6 + i * 3)

const AXIS_END = AXIS_START + 1440
const clampAxis = (min: number) => Math.min(Math.max(min, AXIS_START), AXIS_END)

function DayTimeline({ segs, color, isToday, nowMin }: { segs: Seg[]; color: string; isToday: boolean; nowMin: number }) {
  const hatch = `hatch-${useId()}`
  // 段太多（番茄钟一天十几段）时只写起止不写时长，标签才放得下
  const compact = segs.length > 9
  // 先把标签往下推开，算出整列的高度；放不下就整列往上收回画布，牵线照样指回色条
  let lastBottom = 0
  const rows = segs.map((g) => {
    const stop = g.end
    const end = stop === null ? Math.max(g.start + 1, nowMin) : stop
    // 轴是早 6 到次日 6：轴外的部分裁掉不画，文字照写真实时刻
    const y1 = yOf(clampAxis(g.start))
    const y2 = Math.max(yOf(clampAxis(end)), y1 + 4)
    const mid = (y1 + y2) / 2
    const pushed = Math.max(mid - 2, lastBottom + 14)
    // 一行字占到 pushed+2；带时长那行到 pushed+18
    lastBottom = pushed + (stop === null || compact ? 2 : 18)
    return { g, stop, y1, y2, mid, pushed }
  })
  const overflow = Math.max(0, lastBottom - AX.H)
  const bars = rows.map(({ g, stop, y1, y2, mid, pushed }, i) => {
    const ly = Math.max(14, pushed - overflow)
    const shifted = Math.abs(ly - mid) > 6
    return (
      <g key={i}>
        <rect x={AX.barX} y={y1} width={AX.barW} height={y2 - y1} rx="1.5" fill={stop === null ? `url(#${hatch})` : color} stroke={stop === null ? color : 'none'} strokeWidth="1.2" />
        {shifted && <line x1={AX.barX + AX.barW + 2} y1={mid} x2={AX.lbX - 4} y2={ly - 4} stroke="var(--ink)" opacity=".35" />}
        <text x={AX.lbX} y={ly} className="lb">
          {clockLabel(g.start)} – {stop === null ? <tspan className="run">{LOG.running}</tspan> : clockLabel(stop)}
        </text>
        {stop !== null && !compact && <text x={AX.lbX} y={ly + 15} className="dur">{durLabel(stop - g.start)}</text>}
      </g>
    )
  })
  const showNow = isToday && nowMin >= AXIS_START && nowMin <= AXIS_END
  return (
    <svg viewBox={`0 0 ${AX.W} ${AX.H}`} preserveAspectRatio="xMinYMin meet">
      <defs>
        <pattern id={hatch} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="var(--ink)" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect x={AX.x0} y={yOf(22 * 60)} width={AX.W - AX.x0} height={yOf(30 * 60) - yOf(22 * 60)} fill="var(--ink)" opacity=".045" />
      {HOURS.map((h) => (
        <g key={h}>
          <line x1={AX.x0} y1={yOf(h * 60)} x2={AX.W} y2={yOf(h * 60)} stroke="var(--ink)" opacity={h % 6 ? 0.08 : 0.2} />
          <text x={AX.x0 - 8} y={yOf(h * 60) + 4} textAnchor="end" className={`ax ${h >= 24 ? 'nd' : ''}`}>{h >= 24 ? `${h - 24}⁺` : h}</text>
        </g>
      ))}
      {bars}
      {showNow && (
        <g>
          <line x1={AX.x0} y1={yOf(nowMin)} x2={AX.W - 36} y2={yOf(nowMin)} stroke="var(--accent)" strokeDasharray="3 3" opacity=".8" />
          <text x={AX.W} y={yOf(nowMin) + 4} textAnchor="end" className="now">{LOG.now}</text>
        </g>
      )}
    </svg>
  )
}
