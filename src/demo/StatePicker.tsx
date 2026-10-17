// Copied from Moonseed (private repo) apps/desktop/src/pages/flow/CloseFlow.tsx StatePicker (snapshot 2026-10-17, e21bb47). 网站的副本，不跟 app 同步。
// useT 换成 labels prop；没有教程。
import { Plant } from '../ui/Plant.tsx'
import type { DemoStage } from './fixture.ts'

// 三个态并排，发芽预选，用户可拉高到抽条 / 完全体。没有 AI 评定。
export function StatePicker({ species, value, labels, onChange }: { species: number; value: DemoStage; labels: Record<DemoStage, string>; onChange: (s: DemoStage) => void }) {
  const opts: Array<{ s: DemoStage; stage: 'a' | 'b' | 'c' }> = [
    { s: 'sprout', stage: 'a' },
    { s: 'shoot', stage: 'b' },
    { s: 'full', stage: 'c' },
  ]
  return (
    <div className="states">
      {opts.map((o) => (
        <button key={o.s} className={`state-opt ${value === o.s ? 'on' : ''}`} aria-pressed={value === o.s} onClick={() => onChange(o.s)}>
          <svg width="72" height="74" viewBox="-36 -70 72 74">
            <line x1="-30" y1="0" x2="30" y2="0" stroke="var(--ink)" strokeWidth="1.5" opacity=".5" />
            <Plant species={species} stage={o.stage} x={0} y={0} scale={0.5} />
          </svg>
          <span>{labels[o.s]}</span>
        </button>
      ))}
    </div>
  )
}
