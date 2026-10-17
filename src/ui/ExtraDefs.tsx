// Copied from Moonseed (private repo) apps/desktop/src/ui/ExtraDefs.tsx (snapshot 2026-10-17, e21bb47). 网站的副本，不跟 app 同步。
// 设计稿里各页自带的排线 pattern 与证件面板纹理，这里集中定义一次。
export function ExtraDefs() {
  return (
    <svg width={0} height={0} style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <pattern id="hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1="0" y1="0" x2="0" y2="9" stroke="var(--ink)" strokeWidth="1.3" />
        </pattern>
        <pattern id="hatch2" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-40)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="var(--ink)" strokeWidth="1" />
        </pattern>
        <pattern id="mPanel" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="var(--ink)" strokeWidth="1" opacity="0.18" />
        </pattern>
        <filter id="moteBlur" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        <filter id="poolBlur" x="-50%" y="-100%" width="200%" height="300%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="neon2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <filter id="neon3" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>
    </svg>
  )
}
