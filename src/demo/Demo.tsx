import { useEffect, useRef, useState } from 'react'
import { DEMO } from '../copy.ts'
import { DEMO_RELIC, DEMO_SPECIES, type DemoStage } from './fixture.ts'
import { DomeInside, GroundScene, NEXT_PHASE, Scene, useSeedFall, type Phase } from './DemoScene.tsx'
import { StatePicker } from './StatePicker.tsx'
import { Reveal } from './Reveal.tsx'

// 一天的演示（规格 §4.1）：app 的播种页去掉 store、作业计时、升华、第二颗种子的锁，只留流程。
// a 输入（预填，可改）→ falling / filling / rise 落种动画 → b 仓内（Wrap up）→ 三态框 → 揭示 → Take it 回到 a。
// 什么都不存，刷新即复位。
export function Demo() {
  const [phase, setPhase] = useState<Phase>('a')
  const [text, setText] = useState(DEMO.prefill)
  const [seedText, setSeedText] = useState('')
  // 刚从拉起落定：只有这一刻种子句、页脚才浮现（.page.landed）。
  const [landed, setLanded] = useState(false)
  const [closing, setClosing] = useState(false)
  const [picked, setPicked] = useState<DemoStage>('sprout')
  const [reveal, setReveal] = useState<DemoStage | null>(null)
  const seedRef = useRef<SVGGElement | null>(null)
  useSeedFall(phase, seedRef)

  // 阶段推进：和 app 同一张表，只是最后一步不用等写盘。
  useEffect(() => {
    const next = NEXT_PHASE[phase]
    if (!next) return
    const timer = setTimeout(() => {
      if (next[0] === 'b') setLanded(true)
      setPhase(next[0])
    }, next[1])
    return () => clearTimeout(timer)
  }, [phase])

  // 弹窗开着时 Esc 关掉（app 的 CloseModal 没有这条，网页键盘用户多）。
  useEffect(() => {
    if (!closing) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setClosing(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closing])

  const plant = () => {
    if (!text.trim() || phase !== 'a') return
    setSeedText(text.trim())
    setPhase('falling')
  }
  const confirm = () => {
    setClosing(false)
    setReveal(picked)
  }
  const reset = () => {
    setReveal(null)
    setPicked('sprout')
    setLanded(false)
    setText(DEMO.prefill)
    setPhase('a')
  }

  const inTransition = phase === 'falling' || phase === 'filling' || phase === 'rise'
  const head = (
    <div className="page-head">
      <div className="page-title">{DEMO.ecosphereName}</div>
      <div className="tag num">{DEMO.pod}</div>
    </div>
  )

  return (
    <div className={`page working ${landed ? 'landed' : ''}`} data-phase={phase}>
      {phase === 'b' ? (
        <>
          <Scene>
            <DomeInside />
          </Scene>
          {head}
          <div className="seed-text">
            <div className="line">{seedText}</div>
          </div>
          <div className="spacer" />
          <div className="page-foot">
            <button className="btn btn-primary" onClick={() => { setPicked('sprout'); setClosing(true) }}>{DEMO.wrapUp}</button>
          </div>
        </>
      ) : (
        <>
          <Scene>
            <GroundScene seedRef={seedRef} />
            {phase === 'rise' && <g className="sow-dome"><DomeInside /></g>}
          </Scene>
          {head}
          <div className="spacer" />
          <div className="page-foot" style={inTransition ? { visibility: 'hidden' } : undefined}>
            <input className="field" aria-label={DEMO.placeholder} placeholder={DEMO.placeholder} value={text} maxLength={80}
              onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && plant()} />
            <button className="btn btn-primary" disabled={!text.trim() || inTransition} onClick={plant}>{DEMO.plant}</button>
          </div>
        </>
      )}
      {closing && (
        <div className="overlay fadein" onClick={() => setClosing(false)}>
          <div className="modal rise" role="dialog" aria-modal="true" aria-labelledby="demo-pick" onClick={(e) => e.stopPropagation()}>
            <p id="demo-pick" style={{ fontSize: 16, color: 'var(--ink-muted)', letterSpacing: '.06em' }}>{DEMO.pickState}</p>
            <StatePicker species={DEMO_SPECIES} value={picked} labels={DEMO.states} onChange={setPicked} />
            <div className="row">
              <button className="btn btn-outline" autoFocus onClick={() => setClosing(false)}>{DEMO.cancel}</button>
              <button className="btn btn-primary" onClick={confirm}>{DEMO.confirm}</button>
            </div>
          </div>
        </div>
      )}
      {reveal && (
        <Reveal relic={DEMO_RELIC} species={DEMO_SPECIES} stage={reveal} ecosphereName={DEMO.ecosphereName} takeLabel={DEMO.take} onDone={reset} />
      )}
    </div>
  )
}
