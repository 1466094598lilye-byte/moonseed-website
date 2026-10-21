import { ECOSPHERES } from '../copy.ts'
import { HybridPlant, Plant } from '../ui/Plant.tsx'
import type { Stage } from '../ui/species.ts'

// 规格 §3.4：三个生态球并排，各自一小片植物。只是画，不可点。
// 2026-10-21：每个球三株不同物种（球是项目，里面每天长的物种是随机的，不是"一球一种"），按色相配成三色组；
// 第二个球放一株实验作物——"Today didn't go as expected"那天长出来的杂交株。
// 顺序跟 copy.ts 里 ECOSPHERES.names 一致：the novel / the thesis / the side app。
// 地面是弧线（y 在 x=72 处约 143.5，x=104 处 146，x=136 处 148，x=168 处约 150），每株各给一个 y，让根都埋进去 2 个单位左右。
type Planted =
  | { x: number; y: number; species: number; stage: Stage }
  | { x: number; y: number; hybrid: { rootstock: number; scion: number; color: string; mirror?: boolean } }
const SPHERES: Planted[][] = [
  // the novel：青（触须草）/ 青绿（螺旋孢囊，完全体）/ 琥珀（环节鞭）/ 沙色小苗
  [
    { x: 72, y: 145.5, species: 5, stage: 'b' },
    { x: 104, y: 148, species: 1, stage: 'c' },
    { x: 136, y: 150, species: 8, stage: 'b' },
    { x: 168, y: 152, species: 10, stage: 'a' },
  ],
  // the thesis：薄荷（羽扇）/ 杂交株：蓝（磷火蕈）砧木接珊瑚色接穗 / 紫（盘伞）/ 沙色（脊骨草）
  [
    { x: 72, y: 145.5, species: 13, stage: 'b' },
    { x: 104, y: 148, hybrid: { rootstock: 9, scion: 3, color: '#d96a4b' } },
    { x: 136, y: 150, species: 4, stage: 'b' },
    { x: 168, y: 152, species: 10, stage: 'b' },
  ],
  // the side app：青柠（硫黄苔）/ 靛蓝（棱镜叶，完全体）/ 粉（气囊藤）/ 玫红小苗（灯笼藓）
  [
    { x: 72, y: 145.5, species: 6, stage: 'b' },
    { x: 104, y: 148, species: 12, stage: 'c' },
    { x: 136, y: 150, species: 7, stage: 'b' },
    { x: 168, y: 152, species: 2, stage: 'a' },
  ],
]

function Sphere({ plants }: { plants: Planted[] }) {
  return (
    <svg viewBox="0 40 240 140" aria-hidden="true">
      <path d="M20 150 A100 100 0 0 1 220 150" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeDasharray="10 6" opacity=".55" />
      <path d="M36 150 A84 84 0 0 1 204 150" fill="var(--ground-far)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M36 150 Q90 138 120 146 T204 144 L204 170 L36 170 Z" fill="var(--ground)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M36 158 Q100 148 150 154 T204 152 L204 170 L36 170 Z" fill="url(#hatch)" opacity=".5" />
      {plants.map((p) =>
        'hybrid' in p ? (
          <HybridPlant key={p.x} {...p.hybrid} x={p.x} y={p.y} scale={0.55} />
        ) : (
          <Plant key={p.x} species={p.species} stage={p.stage} x={p.x} y={p.y} scale={0.55} />
        ),
      )}
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
        {SPHERES.map((plants, i) => (
          <div className="sphere" key={ECOSPHERES.names[i]}>
            <Sphere plants={plants} />
            <div className="name">{ECOSPHERES.names[i]}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
