import { ONE_DAY } from '../copy.ts'
import { Demo } from '../demo/Demo.tsx'
import { ScaledFrame } from '../demo/ScaledFrame.tsx'

// 规格 §2.3 / §3.3：左边三段旁白，右边演示；手机宽度旁白在上、演示在下（site.css .oneday）。
export function OneDay() {
  return (
    <section id="one-day">
      <div className="oneday">
        <div>
          <h2>{ONE_DAY.title}</h2>
          <div className="steps">
            {ONE_DAY.steps.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
        <ScaledFrame>
          <Demo />
        </ScaledFrame>
      </div>
    </section>
  )
}
