import { useEffect, useState } from 'react'
import { DEMO, HERO } from '../copy.ts'
import { Plant } from '../ui/Plant.tsx'
import { fmtDate, RARITY_VAR, relicEmoji } from '../ui/relic.ts'
import { DEMO_RELIC, DEMO_SPECIES, RARITY_LABEL, todayKey } from '../demo/fixture.ts'

// hero 的画（2026-10-21 第三版）：先停在埋着种子的土丘上，下面一颗和 app 同款的 Wrap up !。
// 停一拍之后一只光标滑过来把它按下去（aim → press），然后才播收工之后那一段——
// 苗长出（固定抽条，跳过三态选择框）→ 开坑 → 立方体升起打开 → 遗物卡在按钮原来的位置推上，卡角一颗 ↻ 从头再来。
// 访客自己点按钮也行：直接进 press，这时不画那只光标（他们自己的光标就在那）。第一版是加载就播，没有"按"这个动作，看着莫名其妙，打回了。
// 卡出来时不抢焦点：自动播放在加载 6 秒后才到卡，访客可能已经往下看了，抢焦点会把页面拽回来。
// 画面和时间表照 demo/Reveal.tsx；没有 app 的边框，场景直接长在 hero 底色上。
// viewBox 顶到 180：emoji 升到基线 238、火花最高到 190 上下，再低就飞出画面（第二版裁到 236，emoji 被切了一半）。
// 动画规则复用 tokens.css 里 .reveal[data-rphase] / .reveal.opening 那一组；aim / press 两段画面上仍是 idle 那一帧。
// 减少动态：不自动按；访客按下 Wrap up 直接到 card，tokens.css 的 reduce 规则把各部件放到终态。
type Phase = 'idle' | 'aim' | 'press' | 'grow' | 'dig' | 'rise' | 'open' | 'card'
const NEXT: Partial<Record<Phase, [Phase, number]>> = {
  idle: ['aim', 1400], aim: ['press', 450], press: ['grow', 200],
  grow: ['dig', 900], dig: ['rise', 600], rise: ['open', 700], open: ['card', 1100],
}
const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function HeroReveal() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [byHand, setByHand] = useState(false)
  useEffect(() => {
    if (phase === 'idle' && reduced()) return
    const next = NEXT[phase]
    if (!next) return
    const timer = setTimeout(() => setPhase(next[0]), next[1])
    return () => clearTimeout(timer)
  }, [phase])
  const wrapUp = () => { setByHand(true); setPhase(reduced() ? 'card' : 'press') }
  const replay = () => { setByHand(false); setPhase('idle') }
  const relic = DEMO_RELIC
  const color = RARITY_VAR[relic.rarity]
  const pre = phase === 'idle' || phase === 'aim' || phase === 'press'
  const scene = pre ? 'idle' : phase
  const opening = phase === 'open' || phase === 'card'
  return (
    <div className="hero-stage">
      <div className={`reveal hero-reveal ${opening ? 'opening' : ''}`} data-rphase={scene} aria-hidden="true">
        <svg viewBox="0 180 360 332" preserveAspectRatio="xMidYMax meet">
          <g fill="var(--ink)" opacity=".6"><circle cx="48" cy="204" r="1.3" /><circle cx="322" cy="198" r="1.2" /></g>
          <path d="M-20 360 C40 330 120 318 180 322 C250 326 320 340 380 366 L380 480 L-20 480Z" fill="var(--ground)" stroke="var(--ink)" strokeWidth="2.5" />
          <path d="M-20 360 C40 330 120 318 180 322 C250 326 320 340 380 366 L380 480 L-20 480Z" fill="url(#hatch)" opacity=".22" />
          <path d="M-20 480 L380 480 L380 500 L-20 500Z" fill="var(--ground-far)" stroke="var(--ink)" strokeWidth="2.5" />
          {/* 盖着种子的土丘：idle 时就停在这里，长芽时沉平 */}
          <g className="rv-mound">
            <path d="M100 376 C122 332 238 332 260 376 Z" fill="var(--ground)" stroke="var(--ink)" strokeWidth="2.5" />
            <path d="M108 375 C128 340 232 340 252 375 Z" fill="url(#hatch)" opacity=".55" />
          </g>
          {/* 今天长出来的东西：抽条 */}
          <g className="rv-plant">
            <Plant species={DEMO_SPECIES} stage="b" x={180} y={372} />
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
      </div>
      {/* 画下面那一格：先是按钮（光标滑过来按下去），播完在同一个位置换成卡 */}
      <div className="hero-foot">
        {pre && (
          <div className="hero-press">
            <button className={`btn btn-primary hero-wrap ${phase === 'press' ? 'down' : ''}`} onClick={wrapUp}>{DEMO.wrapUp}</button>
            {phase !== 'idle' && !byHand && (
              <svg className={`hero-pointer ${phase}`} viewBox="0 0 22 26" aria-hidden="true">
                <path d="M4 2 L4 20 L8.6 16 L11.6 23 L14.6 21.7 L11.6 14.8 L17.6 14.8 Z" fill="#fff" stroke="#111" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        )}
        {phase === 'card' && (
          <div className="hero-card card rise">
            <div className="hero-card-head">
              <div style={{ fontSize: 15, fontWeight: 700, color }}>{relic.name}</div>
              <div style={{ fontSize: 12, letterSpacing: '.14em', color, flex: 'none' }}>{RARITY_LABEL[relic.rarity]}</div>
            </div>
            <div className="hero-card-text">{relic.text}</div>
            <div className="hero-card-foot">
              <span>{fmtDate(todayKey())} · {DEMO.ecosphereName}</span>
              <button className="hero-replay" onClick={replay} aria-label={HERO.replay} title={HERO.replay}>↻</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
