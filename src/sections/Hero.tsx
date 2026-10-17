import { HERO } from '../copy.ts'

// 规格 §2.1 / §3.1：居中文字块，上方留画面的位置（现在只有排线底），一个按钮滚到 Quick start。
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-art" aria-hidden="true" />
      <h1>{HERO.title}</h1>
      <div className="lede">
        <p>{HERO.line1}</p>
        <p>{HERO.line2}</p>
      </div>
      <a className="btn btn-primary cta" href="#quick-start">{HERO.cta}</a>
    </section>
  )
}
