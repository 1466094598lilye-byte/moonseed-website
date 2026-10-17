// 演示用的常量：物种、写死的旧货、预填那句以外的所有"数据"。都不是数据，刷新即复位。
export type DemoStage = 'sprout' | 'shoot' | 'full'
export type Rarity = 'common' | 'uncommon' | 'rare' | 'unique'

export interface DemoRelic {
  rarity: Rarity
  icon: string
  name: string
  text: string
}

/** 1-based，见 ui/species.ts。换一个物种只改这里。 */
export const DEMO_SPECIES = 1

/** 规格 §4.2：稀有度、emoji、名字、简介四样写死，不抽、不调模型。 */
export const DEMO_RELIC: DemoRelic = {
  rarity: 'uncommon',
  icon: '🔦',
  name: 'Shift lamp',
  text: "Reads full charge after thirty years underground; this year's inspection tag is still on it.",
}

export const RARITY_LABEL: Record<Rarity, string> = { common: 'Common', uncommon: 'Uncommon', rare: 'Rare', unique: 'Unique' }

/** 访客当天的 dayKey（本地时间），YYYY-MM-DD。 */
export function todayKey(): string {
  const d = new Date()
  const two = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${two(d.getMonth() + 1)}-${two(d.getDate())}`
}
