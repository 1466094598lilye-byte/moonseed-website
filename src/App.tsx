import { SvgDefs } from './ui/SvgDefs.tsx'
import { ExtraDefs } from './ui/ExtraDefs.tsx'
import { HybridDefs } from './ui/HybridDefs.tsx'
import { Hero } from './sections/Hero.tsx'
import { QuickStart } from './sections/QuickStart.tsx'
import { OneDay } from './sections/OneDay.tsx'
import { Ecospheres } from './sections/Ecospheres.tsx'
import { FOOTER } from './copy.ts'

// 四屏（规格 §0）：Hero → Quick start → One day → An Ecosphere for every project。defs 挂一次，所有 <use> 都靠它。
export function App() {
  return (
    <>
      <SvgDefs />
      <ExtraDefs />
      <HybridDefs />
      <main className="site">
        <Hero />
        <QuickStart />
        <OneDay />
        <Ecospheres />
      </main>
      <footer className="site-foot">
        <a href={FOOTER.url}>{FOOTER.github}</a>
      </footer>
    </>
  )
}
