import { ECOSPHERES } from '../copy.ts'
import { Plant } from '../ui/Plant.tsx'
import type { Stage } from '../ui/species.ts'

// 规格 §3.4：三个生态球并排，各自一小片不同体量的植物。只是画，不可点。
// 顺序跟 copy.ts 里 ECOSPHERES.names 一致：the novel / the thesis / the side app。
// 地面是弧线（y 在 x=80 处约 143，x=120 处 146，x=160 处约 149.5），每株各给一个 y，让根都埋进去 2 个单位左右。
const SPHERES: Array<{ species: number; plants: Array<{ x: number; y: number; stage: Stage }> }> = [
  { species: 1, plants: [{ x: 80, y: 146, stage: 'a' }, { x: 120, y: 148, stage: 'c' }, { x: 160, y: 152, stage: 'b' }] },
  { species: 9, plants: [{ x: 85, y: 146, stage: 'a' }, { x: 120, y: 148, stage: 'b' }, { x: 155, y: 152, stage: 'a' }] },
  { species: 12, plants: [{ x: 80, y: 146, stage: 'b' }, { x: 120, y: 148, stage: 'c' }, { x: 160, y: 152, stage: 'a' }] },
]

function Sphere({ species, plants }: (typeof SPHERES)[number]) {
  return (
    <svg viewBox="0 40 240 140" aria-hidden="true">
      <path d="M20 150 A100 100 0 0 1 220 150" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeDasharray="10 6" opacity=".55" />
      <path d="M36 150 A84 84 0 0 1 204 150" fill="var(--ground-far)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M36 150 Q90 138 120 146 T204 144 L204 170 L36 170 Z" fill="var(--ground)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M36 158 Q100 148 150 154 T204 152 L204 170 L36 170 Z" fill="url(#hatch)" opacity=".5" />
      {plants.map((p) => (
        <Plant key={p.x} species={species} stage={p.stage} x={p.x} y={p.y} scale={0.55} />
      ))}
      <line x1="10" y1="170" x2="230" y2="170" stroke="var(--ink)" strokeWidth="2.5" />
    </svg>
  )
}

export function Ecospheres() {
  return (
    <section id="ecospheres">
      <h2>{ECOSPHERES.title}</h2>
      <p className="lede">{ECOSPHERES.text}</p>
      <div className="spheres">
        {SPHERES.map((s, i) => (
          <div className="sphere" key={ECOSPHERES.names[i]}>
            <Sphere {...s} />
            <div className="name">{ECOSPHERES.names[i]}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
