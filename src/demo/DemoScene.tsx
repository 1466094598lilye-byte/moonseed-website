// Copied from Moonseed (private repo) apps/desktop/src/pages/Sow.tsx (snapshot 2026-10-17, e21bb47). 网站的副本，不跟 app 同步。
// 只拿了场景（Scene / GroundA / GroundScene / DomeInside）、落种动画（useSeedFall）和阶段表；Sow() 本身没拿。
import { useEffect, type RefObject } from 'react'
import { Seed } from '../ui/Plant.tsx'

// 落种的四个阶段（2026-10-12）：a 没种 → falling 种子落进沟 → filling 土把它盖严 → rise 视角拉起 → b 仓内。
export type Phase = 'a' | 'falling' | 'filling' | 'rise' | 'b'
/** 每个过渡阶段到下一个的等待：落 0.6s，盖土 0.7s 再停 0.3s 让人看清种子被盖严了，拉起 0.8s。 */
export const NEXT_PHASE: Partial<Record<Phase, [Phase, number]>> = { falling: ['filling', 600], filling: ['rise', 1000], rise: ['b', 800] }

// 种子下落（2026-10-14）：不走 CSS 变换，直接写 SVG 的 transform 属性，单位是画布单位。
// 界面有 zoom 1.25，WebKit 会把 SVG 元素 CSS 变换里的 px 也乘上 zoom（Chromium 不会）：translateY(100px) 在 app 里走成 125 以上，
// 种子穿过坑落到地面上。属性里的数字 zoom 碰不到。落 0.6 秒：前 85% 加速落到 103（比底深一点），最后 15% 回弹到 100，和原来的 keyframes 一样。
const SEED_DROP = 100
const SEED_FALL_MS = 600
export function useSeedFall(phase: Phase, ref: RefObject<SVGGElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const set = (y: number) => el.setAttribute('transform', `translate(0 ${y.toFixed(1)})`)
    if (phase === 'a' || phase === 'b') {
      set(0)
      return
    }
    if (phase !== 'falling' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      set(SEED_DROP)
      return
    }
    const t0 = performance.now()
    let raf = requestAnimationFrame(function frame(now: number) {
      const p = Math.min(1, (now - t0) / SEED_FALL_MS)
      set(p < 0.85 ? 103 * (p / 0.85) ** 2 : 103 - 3 * ((p - 0.85) / 0.15))
      if (p < 1) raf = requestAnimationFrame(frame)
    })
    return () => cancelAnimationFrame(raf)
  }, [phase, ref])
}

export function Scene({ children }: { children: React.ReactNode }) {
  return (
    <svg className="page-scene" viewBox="0 0 360 640" preserveAspectRatio="xMidYMax meet">
      <g fill="var(--ink)" opacity=".6"><circle cx="60" cy="110" r="1.3" /><circle cx="300" cy="90" r="1.2" /><circle cx="250" cy="150" r="1" /></g>
      {children}
    </svg>
  )
}

// 8a：森林那块地的局部特写。
export function GroundA() {
  return (
    <g>
      <path d="M-20 360 C40 330 120 318 180 322 C250 326 320 340 380 366 L380 480 L-20 480Z" fill="var(--ground)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M-20 360 C40 330 120 318 180 322 C250 326 320 340 380 366 L380 480 L-20 480Z" fill="url(#hatch)" opacity=".22" />
      <path d="M-20 480 L380 480 L380 500 L-20 500Z" fill="var(--ground-far)" stroke="var(--ink)" strokeWidth="2.5" />
    </g>
  )
}

// 8a 的沟 + 落种用的几样东西：悬着的种子、坑的前沿（种子落底时挡住下半截）、滚进来的土块、盖上的土丘。
// 没种时土块和土丘都不可见；哪个阶段显示什么由 tokens.css 里 .page[data-phase] 的规则决定。
export function GroundScene({ seedRef }: { seedRef: RefObject<SVGGElement | null> }) {
  return (
    <g className="sow-ground">
      <GroundA />
      <path d="M110 372 C130 358 230 358 250 372 C230 380 130 380 110 372Z" fill="var(--panel)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M118 371 C136 362 224 362 242 371" fill="none" stroke="var(--ink)" strokeWidth="1" opacity=".4" />
      <path d="M100 366 c-6 -6 -2 -12 4 -10 M262 366 c6 -6 2 -12 -4 -10 M150 352 c2 -6 8 -6 8 0 M210 352 c2 -6 8 -6 8 0" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="180" cy="372" rx="9" ry="2.6" fill="var(--ink)" opacity=".35" />
      <line className="sow-guide" x1="180" y1="300" x2="180" y2="362" stroke="var(--ink)" strokeWidth="1.4" strokeDasharray="2 5" opacity=".45" />
      <g className="sow-seed" ref={seedRef}><Seed x={180} y={292} /></g>
      <path d="M106 372 C130 382 230 382 254 372 L254 396 L106 396 Z" fill="var(--ground)" />
      <path d="M106 372 C130 382 230 382 254 372 L254 396 L106 396 Z" fill="url(#hatch)" opacity=".22" />
      <path d="M110 372 C130 380 230 380 250 372" fill="none" stroke="var(--ink)" strokeWidth="2.5" />
      <g className="sow-clods" fill="var(--ground)" stroke="var(--ink)" strokeWidth="1.5">
        <path d="M124 368 l-7 -5 l9 -3 z" opacity="0" /><path d="M236 366 l7 -5 l-10 -3 z" opacity="0" /><path d="M158 360 l-4 -7 l8 1 z" opacity="0" /><path d="M204 361 l4 -7 l-8 1 z" opacity="0" />
      </g>
      <g className="sow-mound">
        <path d="M100 376 C122 332 238 332 260 376 Z" fill="var(--ground)" stroke="var(--ink)" strokeWidth="2.5" />
        <path d="M108 375 C128 340 232 340 252 375 Z" fill="url(#hatch)" opacity=".55" />
        <path d="M146 358 c3 -4 6 -4 9 0 M200 356 c3 -4 6 -4 9 0 M174 347 c3 -4 6 -4 9 0" fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" opacity=".7" />
      </g>
    </g>
  )
}

// 2a 改（2026-10-12）：从仓里往外看。铆钉穹顶罩着土壤，远处一枚残月；种子埋在土丘底下；
// 一颗细线牵着的光球悬在土丘上方——作业中球心亮琥珀、光晕呼吸，暂停时暗下。仓里没有别的东西。
export function DomeInside() {
  return (
    <g transform="translate(0 150)">
      <path d="M30 240 A150 150 0 0 1 330 240" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeDasharray="10 6" opacity=".55" />
      <path d="M55 240 A125 125 0 0 1 305 240" fill="var(--ground-far)" stroke="var(--ink)" strokeWidth="2.5" />
      <g className="orb-halo-wrap">
        <circle className="orb-halo" cx="180" cy="172" r="30" fill="var(--accent)" />
        <ellipse className="orb-wash" cx="180" cy="230" rx="34" ry="6" fill="var(--accent)" />
      </g>
      <g fill="var(--ink)"><circle cx="70" cy="200" r="2.5" /><circle cx="290" cy="200" r="2.5" /></g>
      {/* 残月往右上挪开（2026-10-12）：原位 (300,78) 的下沿贴着虚线外弧，看起来像长在穹顶上 */}
      <path d="M314 36 a26 26 0 1 0 22 40 a20 20 0 0 1 -22 -40z" fill="none" stroke="var(--ink)" strokeWidth="2.5" />
      <line x1="180" y1="115" x2="180" y2="158" stroke="var(--ink)" strokeWidth="1.2" strokeDasharray="2 5" opacity=".6" />
      <circle cx="180" cy="172" r="12" fill="var(--panel)" stroke="var(--ink)" strokeWidth="2.2" />
      <circle className="orb-core" cx="180" cy="172" r="6.5" />
      <path d="M55 240 Q120 222 180 232 T305 228 L305 300 L55 300 Z" fill="var(--ground)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M55 258 Q130 244 200 254 T305 250 L305 300 L55 300 Z" fill="url(#hatch)" opacity=".55" />
      <path d="M150 234 C162 212 198 212 210 234 Z" fill="var(--ground)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M156 233 C166 216 194 216 204 233 Z" fill="url(#hatch)" opacity=".55" />
      <path d="M172 222 c3 -4 6 -4 9 0" fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" opacity=".7" />
      <line x1="0" y1="300" x2="360" y2="300" stroke="var(--ink)" strokeWidth="2.5" />
      <g stroke="var(--ink)" strokeWidth="2.5"><line x1="20" y1="300" x2="20" y2="292" /><line x1="340" y1="300" x2="340" y2="292" /></g>
    </g>
  )
}
