// Copied from Moonseed (private repo) apps/desktop/src/ui/relic.ts (snapshot 2026-10-17, e21bb47). 网站的副本，不跟 app 同步。
// 去掉了 speciesIndexOf（要 core 的 speciesOf）；Rarity 类型来自 demo/fixture.ts。
import type { Rarity } from '../demo/fixture.ts'

export const RARITY_VAR: Record<Rarity, string> = {
  common: 'var(--c-common)',
  uncommon: 'var(--c-uncommon)',
  rare: 'var(--c-rare)',
  unique: 'var(--c-unique)',
}

// 图标是模型命名时选的 emoji；没有就是一个纸箱。
export function relicEmoji(r: { icon?: string }): string {
  return r.icon ?? '📦'
}

export function fmtDate(dayKey: string): string {
  return dayKey.replace(/-/g, '.')
}
