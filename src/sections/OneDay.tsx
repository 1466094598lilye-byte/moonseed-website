import { useRef, useState } from 'react'
import { DEMO, ONE_DAY } from '../copy.ts'
import { Demo } from '../demo/Demo.tsx'
import { ScaledFrame } from '../demo/ScaledFrame.tsx'
import { StepArt, type StepKind } from './StepArt.tsx'

// 规格 §2.3 / §3.3（2026-10-21 改成 Forest 式）：居中标题 → 一行三圆（画 + 小标题 + 一句）→ Try it 大按钮 → 演示框居中。
// 2026-10-23：种下之后框下面出现一颗和 Try it 同款的 Start over，点了换 key 把演示整个重挂回起点。
// 放在框外而不是记录页里：访客走到记录页只有左上角的 ‹ 能出去，会困惑，而框外这颗在任何一页都看得见。
const KINDS: StepKind[] = ['plant', 'bloom', 'relic']

export function OneDay() {
  const frame = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const [demoKey, setDemoKey] = useState(0)
  const startOver = () => {
    setDemoKey((k) => k + 1)
    setStarted(false)
  }
  // Try it：把演示框滚到视野中间，输入框还在的话把焦点给它
  const tryIt = () => {
    const el = frame.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' })
    el.querySelector<HTMLInputElement>('.field')?.focus({ preventScroll: true })
  }
  return (
    <section id="one-day">
      <h2>{ONE_DAY.title}</h2>
      <div className="steps">
        {ONE_DAY.steps.map((s, i) => (
          <div className="step" key={s.title}>
            <div className="art"><StepArt kind={KINDS[i]} /></div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
      <div className="cta-row">
        <button className="btn btn-primary try" onClick={tryIt}>{ONE_DAY.tryIt}</button>
      </div>
      <div ref={frame}>
        <ScaledFrame>
          <Demo key={demoKey} onPlanted={() => setStarted(true)} />
        </ScaledFrame>
      </div>
      {started && (
        <div className="restart-row">
          <button className="btn btn-primary try" onClick={startOver}>{DEMO.startOver}</button>
        </div>
      )}
    </section>
  )
}
