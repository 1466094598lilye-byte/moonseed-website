import { useState } from 'react'
import { QUICK_START } from '../copy.ts'

// 规格 §2.2（2026-10-17 晚改）：eyebrow、一句引子、一个给 agent 的块、复制。不分 agent。
export function QuickStart() {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(QUICK_START.block)
      setDone(true)
      setTimeout(() => setDone(false), 1500)
    } catch {
      /* 用户可以手动选中复制 */
    }
  }
  return (
    <section id="quick-start">
      <h2 className="eyebrow">{QUICK_START.eyebrow}</h2>
      <p className="lede">{QUICK_START.lead}</p>
      <div className="qs-block">
        <pre>{QUICK_START.block}</pre>
        <button className="btn-op" onClick={() => void copy()}>{done ? QUICK_START.copied : QUICK_START.copy}</button>
      </div>
    </section>
  )
}
