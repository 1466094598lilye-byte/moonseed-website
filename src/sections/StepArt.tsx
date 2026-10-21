// One day 三个圆里的画（2026-10-21，照效果图第 4 版）。全用已经挂在 App 里的符号（SvgDefs：sSeed、s1a、s1b；ExtraDefs：#hatch），静态，不动。
export type StepKind = 'plant' | 'bloom' | 'relic'

export function StepArt({ kind }: { kind: StepKind }) {
  if (kind === 'plant') {
    // 播种页那一幕：沟上悬着种子、一根虚线引导线
    return (
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <path d="M0 132 C50 126 150 126 200 132 L200 200 L0 200 Z" fill="var(--ground)" />
        <path d="M0 132 C50 126 150 126 200 132 L200 200 L0 200 Z" fill="url(#hatch)" opacity=".22" />
        <path d="M0 132 C50 126 150 126 200 132" fill="none" stroke="var(--ink)" strokeWidth="2.5" />
        <path d="M60 132 C75 121 125 121 140 132 C125 138 75 138 60 132Z" fill="var(--panel)" stroke="var(--ink)" strokeWidth="2.5" />
        <path d="M53 126 c-5 -5 -2 -10 3 -8 M147 126 c5 -5 2 -10 -3 -8" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="100" cy="132" rx="8" ry="2.4" fill="var(--ink)" opacity=".35" />
        <line x1="100" y1="84" x2="100" y2="124" stroke="var(--ink)" strokeWidth="1.4" strokeDasharray="2 5" opacity=".45" />
        <use href="#sSeed" transform="translate(100 80)" />
      </svg>
    )
  }
  if (kind === 'bloom') {
    // 三态选择框里选中的那一格：画的是"选"，不是"长"
    return (
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <g fontFamily="var(--font)" fontSize="11" textAnchor="middle">
          <rect x="64" y="46" width="80" height="100" rx="3" fill="var(--accent-2)" />
          <rect x="60" y="42" width="80" height="100" rx="3" fill="var(--panel)" stroke="var(--ink)" strokeWidth="2.2" />
          <line x1="70" y1="120" x2="130" y2="120" stroke="var(--ink)" strokeWidth="1.4" opacity=".5" />
          <use href="#s1b" transform="translate(100 120) scale(0.72)" />
          <text x="100" y="134" fill="var(--ink)">Shoot</text>
        </g>
        <path d="M0 150 L200 150 L200 200 L0 200 Z" fill="var(--ground)" />
        <path d="M0 150 L200 150 L200 200 L0 200 Z" fill="url(#hatch)" opacity=".22" />
        <line x1="0" y1="150" x2="200" y2="150" stroke="var(--ink)" strokeWidth="2.5" />
      </svg>
    )
  }
  // 揭示里立方体打开的那一帧：两面倒下，遗物带火花升出
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true">
      <path d="M0 142 L200 142 L200 200 L0 200 Z" fill="var(--ground)" />
      <path d="M0 142 L200 142 L200 200 L0 200 Z" fill="url(#hatch)" opacity=".22" />
      <line x1="0" y1="142" x2="200" y2="142" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M62 142 C80 132 120 132 138 142 C120 148 80 148 62 142Z" fill="var(--panel)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M54 136 c-6 -6 -2 -12 4 -10 M146 136 c6 -6 2 -12 -4 -10" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <g transform="translate(100 142) scale(1.5)">
        <g stroke="var(--ink)" strokeWidth="1.6" strokeLinejoin="round">
          <polygon points="-19,-33 0,-22 0,0 -19,-11" fill="var(--panel)" opacity=".35" transform="rotate(-75)" />
          <polygon points="0,-22 19,-33 19,-11 0,0" fill="var(--ground-far)" opacity=".35" transform="rotate(75)" />
        </g>
        <g stroke="var(--ink)" strokeWidth="1.5" opacity=".7" fill="none">
          <path d="M-30 -54 l-6 -4 M30 -54 l6 -4 M-26 -26 l-6 4 M26 -26 l6 4 M0 -78 v-8" />
        </g>
        <text x="0" y="-48" textAnchor="middle" fontSize="30">🔦</text>
      </g>
    </svg>
  )
}
