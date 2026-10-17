// Copied from Moonseed (private repo) apps/desktop/src/ui/species.ts (snapshot 2026-10-17, e21bb47). 网站的副本，不跟 app 同步。
// Metadata for the 15 alien plant species drawn in SvgDefs.tsx (symbols s1a..s15c).
// Order follows docs/design/design-notes.txt (frames 4a / 5a / 5b); `index` is 1-based so that
// `s${index}` is the symbol id prefix. `color` is the species accent colour used in the artwork -
// everything else in a plant is the shared cream stroke #e8dfc8 (and, for s3 / s6, the ground ink #0f1a17).

export interface Species {
  /** 1-based; `s${index}` is the symbol id prefix */
  index: number;
  /** symbol id prefix: 's1'..'s15' */
  key: string;
  zh: string;
  en: string;
  /** species accent colour, hex */
  color: string;
}

/** growth stage: a = 发芽 sprout, b = 抽条 shoot, c = 完全体 full */
export type Stage = 'a' | 'b' | 'c';

export const SPECIES: readonly Species[] = [
  { index: 1, key: 's1', zh: '螺旋孢囊', en: 'Spiral Sporepod', color: '#4f8a7a' },
  { index: 2, key: 's2', zh: '灯笼藓', en: 'Lantern Moss', color: '#c75b8f' },
  { index: 3, key: 's3', zh: '珊瑚管', en: 'Coral Tube', color: '#d96a4b' },
  { index: 4, key: 's4', zh: '盘伞', en: 'Disc Umbrella', color: '#8f7ad1' },
  { index: 5, key: 's5', zh: '触须草', en: 'Tendril Grass', color: '#5cc3c9' },
  { index: 6, key: 's6', zh: '硫黄苔', en: 'Sulfur Moss', color: '#b7c94a' },
  { index: 7, key: 's7', zh: '气囊藤', en: 'Bladder Vine', color: '#e29aa8' },
  { index: 8, key: 's8', zh: '环节鞭', en: 'Segment Whip', color: '#e0a04f' },
  { index: 9, key: 's9', zh: '磷火蕈', en: 'Foxfire Fungus', color: '#6fa8dc' },
  { index: 10, key: 's10', zh: '脊骨草', en: 'Spine Grass', color: '#d9c78a' },
  { index: 11, key: 's11', zh: '结节藤', en: 'Knot Vine', color: '#b8433f' },
  { index: 12, key: 's12', zh: '棱镜叶', en: 'Prism Leaf', color: '#5b6bd6' },
  { index: 13, key: 's13', zh: '羽扇', en: 'Feather Fan', color: '#8fd6a8' },
  // s14 also uses amber #e0a04f for the glow in the stone gaps (more attribute hits than the grey),
  // but amber is s8's colour and the stones themselves are #7d8fa6, so the grey is the species colour.
  { index: 14, key: 's14', zh: '石苞', en: 'Stone Bud', color: '#7d8fa6' },
  { index: 15, key: 's15', zh: '垂帘藻', en: 'Curtain Kelp', color: '#7a3b6e' },
];

/** Symbol id for a species at a growth stage, e.g. plantSymbolId(4, 'c') === 's4c'. */
export function plantSymbolId(speciesIndex: number, stage: Stage): string {
  if (!Number.isInteger(speciesIndex) || speciesIndex < 1 || speciesIndex > SPECIES.length) {
    throw new RangeError(`species index out of range: ${speciesIndex} (expected 1..${SPECIES.length})`);
  }
  return `s${speciesIndex}${stage}`;
}
