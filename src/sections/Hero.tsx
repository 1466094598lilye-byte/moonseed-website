import { HERO } from '../copy.ts'
import { HeroReveal } from './HeroReveal.tsx'

// 规格 §2.1 / §3.1（2026-10-21 定稿）：左文右画。画是收工之后那一段揭示，播一次停在终帧，没有 app 边框。
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>{HERO.title}</h1>
        <div className="lede">
          <p>{HERO.line1}</p>
          <p>{HERO.line2}</p>
        </div>
        <a className="btn btn-primary cta" href="#quick-start">{HERO.cta}</a>
      </div>
      <HeroReveal />
    </section>
  )
}
