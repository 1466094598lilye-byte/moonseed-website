// Copied from Moonseed (private repo) apps/desktop/src/pages/flow/Reveal.tsx (snapshot 2026-10-17, e21bb47). 网站的副本，不跟 app 同步。
// 去掉 store / i18n / 教程；遗物、物种、结局从 props 来；没有升华分支（演示里没有升华）。
import { useEffect, useState } from 'react'
import { Plant } from '../ui/Plant.tsx'
import { fmtDate, RARITY_VAR, relicEmoji } from '../ui/relic.ts'
import { RARITY_LABEL, todayKey, type DemoRelic, type DemoStage } from './fixture.ts'

// 揭示（2026-10-12 重做）：先让今天长出来，再从旁边的土里翻出一件旧货。
// grow 植物从土丘里长出来、土丘同时沉平（0–0.9s）→ dig 旁边开一个坑、土块飞起（0.9–1.5s）
// → rise 一颗小立方体从坑里升起（1.5–2.2s）→ open 立刻打开：盖子掀起、两侧面倒下、一圈光炸开、遗物从中心升出来带火花（2.2–3.3s）→ card 卡片推上。
// 立方体、火花、光圈都用绝对坐标画，不放进带位移的组：WebKit 和 Chromium 对组内 transform-origin 的读法不同。
type Phase = 'grow' | 'dig' | 'rise' | 'open' | 'card'
const NEXT: Partial<Record<Phase, [Phase, number]>> = { grow: ['dig', 900], dig: ['rise', 600], rise: ['open', 700], open: ['card', 1100] }
const STAGE: Record<DemoStage, 'a' | 'b' | 'c'> = { sprout: 'a', shoot: 'b', full: 'c' }

export function Reveal({ relic, species, stage, ecosphereName, takeLabel, onDone }: { relic: DemoRelic; species: number; stage: DemoStage; ecosphereName: string; takeLabel: string; onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>('grow')
  // 每个阶段只排下一步。
  useEffect(() => {
    const next = NEXT[phase]
    if (!next) return
    const timer = setTimeout(() => setPhase(next[0]), next[1])
    return () => clearTimeout(timer)
  }, [phase])
  const color = RARITY_VAR[relic.rarity]
  const opening = phase === 'open' || phase === 'card'
  return (
    <div className={`reveal fadein ${opening ? 'opening' : ''}`} data-rphase={phase}>
      <svg className="page-scene" viewBox="0 0 360 640" preserveAspectRatio="xMidYMax meet">
        <g fill="var(--ink)" opacity=".6"><circle cx="60" cy="110" r="1.3" /><circle cx="300" cy="90" r="1.2" /><circle cx="250" cy="150" r="1" /></g>
        <path d="M-20 360 C40 330 120 318 180 322 C250 326 320 340 380 366 L380 480 L-20 480Z" fill="var(--ground)" stroke="var(--ink)" strokeWidth="2.5" />
        <path d="M-20 360 C40 330 120 318 180 322 C250 326 320 340 380 366 L380 480 L-20 480Z" fill="url(#hatch)" opacity=".22" />
        <path d="M-20 480 L380 480 L380 500 L-20 500Z" fill="var(--ground-far)" stroke="var(--ink)" strokeWidth="2.5" />
        {/* 盖着种子的土丘，长芽时沉平 */}
        <g className="rv-mound">
          <path d="M100 376 C122 332 238 332 260 376 Z" fill="var(--ground)" stroke="var(--ink)" strokeWidth="2.5" />
          <path d="M108 375 C128 340 232 340 252 375 Z" fill="url(#hatch)" opacity=".55" />
        </g>
        {/* 今天长出来的东西 */}
        <g className="rv-plant">
          <Plant species={species} stage={STAGE[stage]} x={180} y={372} />
        </g>
        {/* 旁边的坑 */}
        <g className="rv-pit">
          <path d="M230 386 C250 376 290 376 310 386 C290 392 250 392 230 386Z" fill="var(--panel)" stroke="var(--ink)" strokeWidth="2.5" />
          <g className="rv-clods" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round">
            <path d="M222 380 c-6 -6 -2 -12 4 -10" />
            <path d="M318 380 c6 -6 2 -12 -4 -10" />
            <path d="M260 368 c2 -6 8 -6 8 0" />
          </g>
        </g>
        {/* 小立方体：底顶点在 (270,386)，边长 22。升起即打开 */}
        <g className="rv-cube">
          <circle className="rv-burst" cx="270" cy="364" r="4" fill="none" stroke="var(--accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <text className="rv-emoji" x="270" y="374" textAnchor="middle" fontSize="30">{relicEmoji(relic)}</text>
          <polygon className="face rv-faceL" points="251,353 270,364 270,386 251,375" fill="var(--panel)" />
          <polygon className="face rv-faceR" points="270,364 289,353 289,375 270,386" fill="var(--ground-far)" />
          <polygon className="face rv-lid" points="270,342 289,353 270,364 251,353" fill="var(--ground)" />
          <g className="rv-sparks" stroke="var(--ink)" strokeWidth="1.5" opacity=".7">
            <path d="M240 302 l-6 -4 M300 302 l6 -4 M244 330 l-6 4 M296 330 l6 4 M270 282 v-8" />
          </g>
        </g>
      </svg>
      {phase === 'card' && (
        <div className="reveal-card rise">
          <div className="card" style={{ padding: '12px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color }}>{relic.name}</div>
              <div style={{ fontSize: 12, letterSpacing: '.14em', color, flex: 'none' }}>{RARITY_LABEL[relic.rarity]}</div>
            </div>
            <div style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-85)', marginTop: 6 }}>{relic.text}</div>
            <div style={{ fontSize: 13, letterSpacing: '.1em', color: 'var(--ink-muted)', marginTop: 8 }}>
              {fmtDate(todayKey())} · {ecosphereName}
            </div>
          </div>
          <button className="btn btn-primary" onClick={onDone}>{takeLabel}</button>
        </div>
      )}
    </div>
  )
}
