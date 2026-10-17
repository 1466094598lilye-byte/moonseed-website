// Copied from Moonseed (private repo) apps/desktop/src/ui/Plant.tsx (snapshot 2026-10-17, e21bb47). 网站的副本，不跟 app 同步。
// 去掉了 Hybrid（升华那天的杂交株，要 core 的 hybridOf）：演示里没有升华。
import type { Stage } from './species';
import { SPECIES, plantSymbolId } from './species';

/*
 * Each component renders a <use> of a symbol defined by <SvgDefs /> (mount it once in the document).
 * (x, y) is where the symbol's origin lands in the parent SVG's user units; `scale` scales the artwork
 * around that origin.
 *
 * Where the origins sit (rough bounding boxes in symbol units, including stroke):
 *   plants s1a..s15c  origin = ground. Widths up to about x -45..49 (s13c / s15c), heights up to
 *                     y -131 (s8c); everything sits within y <= +3. Pass y = the ground line.
 *   sSeed             origin = ground as well: a teardrop x -9..9, y -28..1, bottom tip at (0, 0).
 *   sX  (crystal)     origin is NOT the ground. The diamond spans x -8..8, y -15..8 (centre about
 *                     (0, -3)) and a faint shadow ellipse lies at y 28..32 (x -6..6). To rest the shadow
 *                     on a ground line pass y = groundY - 30; the crystal then hovers ~22 units above it.
 */

interface UseSymbolProps {
  id: string;
  x: number;
  y: number;
  scale: number;
  className?: string;
  onClick?: () => void;
}

function UseSymbol({ id, x, y, scale, className, onClick }: UseSymbolProps) {
  return (
    <use
      href={`#${id}`}
      transform={`translate(${x} ${y}) scale(${scale})`}
      className={className}
      onClick={onClick}
    />
  );
}

export interface PlantProps {
  /** 1-based species index, 1..15 (see SPECIES) */
  species: number;
  stage: Stage;
  x: number;
  y: number;
  scale?: number;
  className?: string;
  onClick?: () => void;
  /** 意外收获的那一天：植物发出荧光（自身颜色的模糊光晕，缓慢呼吸） */
  glow?: boolean;
}

// 15 个完全体符号的包围盒（符号坐标，样张页里 getBBox 量的）：意外收获的光点从上半身冒出来要用。
const FULL_BBOX: Record<number, { x: number; y: number; w: number; h: number }> = {
  1: { x: -28.5, y: -124.5, w: 59, h: 124.5 }, 2: { x: -29.5, y: -119, w: 61, h: 119 }, 3: { x: -26, y: -99.6, w: 59, h: 99.6 },
  4: { x: -22, y: -111.5, w: 44, h: 111.5 }, 5: { x: -36.2, y: -90.2, w: 78.4, h: 90.2 }, 6: { x: -28, y: -83.8, w: 60, h: 83.8 },
  7: { x: -27, y: -102, w: 58, h: 103.6 }, 8: { x: -7, y: -131, w: 25, h: 131 }, 9: { x: -35, y: -118.5, w: 57, h: 118.5 },
  10: { x: -22, y: -108, w: 45, h: 106.5 }, 11: { x: -12, y: -121, w: 42.3, h: 121 }, 12: { x: -34, y: -114, w: 68, h: 114 },
  13: { x: -44, y: -92, w: 86, h: 92 }, 14: { x: -31.6, y: -94.4, w: 49.9, h: 94.4 }, 15: { x: -24, y: -110, w: 48, h: 110 },
};

/**
 * 意外收获（方案 D2c）：植物不动；脚下一滩物种色的光池，缓慢呼吸；
 * 6 粒光点从植物上半身冒出来往上飘出树冠——奶白的芯 + 物种色的晕，压在植物上那一瞬也看得见。
 * 光点的大小和飘的距离定在场景坐标里，不跟着植物缩放，森林里 0.75 倍也一样显眼。
 */
export function WindfallGlow({ species, x, y, scale = 1 }: { species: number; x: number; y: number; scale?: number }) {
  const bb = FULL_BBOX[species] ?? { x: -25, y: -100, w: 50, h: 100 };
  const color = SPECIES[species - 1]?.color ?? '#e0a04f';
  const half = Math.max(18, Math.ceil(Math.max(-bb.x, bb.x + bb.w)) + 8);
  const top = y + bb.y * scale;
  const mid = y + (bb.y / 2) * scale;
  const motes = Array.from({ length: 6 }, (_, i) => {
    const fx = ((i * 0.618) % 1) * 1.2 - 0.6;
    const fy = (i * 0.382 + 0.2) % 1;
    const mx = x + fx * (half - 8) * scale;
    const my = top + fy * (mid - top);
    const r = 2 + (i % 3) * 0.5;
    return (
      <g key={i} className="mote-up" style={{ animationDelay: `${(i * 0.55).toFixed(2)}s` }}>
        <circle cx={mx} cy={my} r={r * 2.4} fill={color} opacity=".5" filter="url(#moteBlur)" />
        <circle cx={mx} cy={my} r={r} fill={color} />
        <circle cx={mx} cy={my} r={r * 0.7} fill="#e8dfc8" />
      </g>
    );
  });
  return { pool: <ellipse className="glow-halo" cx={x} cy={y + 2} rx={(half + 14) * scale} ry={12 * scale} fill={color} opacity=".55" filter="url(#poolBlur)" />, motes: <g>{motes}</g> };
}

export function Plant({ species, stage, x, y, scale = 1, className, onClick, glow }: PlantProps) {
  const id = plantSymbolId(species, stage);
  if (!glow) return <UseSymbol id={id} x={x} y={y} scale={scale} className={className} onClick={onClick} />;
  const fx = WindfallGlow({ species, x, y, scale });
  return (
    <g className={className} onClick={onClick}>
      {fx.pool}
      <UseSymbol id={id} x={x} y={y} scale={scale} />
      {fx.motes}
    </g>
  );
}

export interface MarkerProps {
  x: number;
  y: number;
  scale?: number;
  onClick?: () => void;
}

/** The seed every species starts from (symbol sSeed). */
export function Seed({ x, y, scale = 1, onClick }: MarkerProps) {
  return <UseSymbol id="sSeed" x={x} y={y} scale={scale} onClick={onClick} />;
}

/** The floating crystal that marks a sublimated day (symbol sX). */
export function Crystal({ x, y, scale = 1, onClick }: MarkerProps) {
  return <UseSymbol id="sX" x={x} y={y} scale={scale} onClick={onClick} />;
}
