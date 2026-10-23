import { useEffect, useRef, useState } from 'react'
import { DEMO } from '../copy.ts'
import { Plant } from '../ui/Plant.tsx'
import { DEMO_RELIC, DEMO_SPECIES, todayKey, type DemoStage } from './fixture.ts'
import { DomeInside, GroundA, GroundScene, NEXT_PHASE, Scene, useSeedFall, type Phase } from './DemoScene.tsx'
import { StatePicker } from './StatePicker.tsx'
import { Reveal } from './Reveal.tsx'
import { OpLog } from './OpLog.tsx'
import { dayMidnightMs, fmtElapsed, type Seg } from './time.ts'

// 一天的演示（规格 §4.1，2026-10-20 扩）：app 的播种页去掉 store、升华、第二颗种子的锁，其余照 app 走一遍。
// a 输入（预填，可改）→ falling / filling / rise 落种动画（种下即开始作业）→ b 仓内（计时在走、Pause / Resume、Wrap up）
// → 三态框 → 揭示 → Take it → c「Today took root.」（作业记录入口）→ Start over 回到 a。
// 什么都不存，刷新即复位。作业段只在内存里，记录页画的就是访客刚才点出来的那几段。
const STAGE: Record<DemoStage, 'a' | 'b' | 'c'> = { sprout: 'a', shoot: 'b', full: 'c' }
/** 一段作业，epoch 毫秒；end 为 null 是还在跑。 */
interface WorkSeg { start: number; end: number | null }
const openSeg = (w: WorkSeg[]) => w.length > 0 && w[w.length - 1].end === null
const stopWork = (w: WorkSeg[], at = Date.now()): WorkSeg[] => (openSeg(w) ? [...w.slice(0, -1), { ...w[w.length - 1], end: at }] : w)

// onPlanted：种下时告诉外面（One day 用它显示框下面那颗 Start over；回到起点是外面换 key 重挂，这里没有 reset）。
export function Demo({ onPlanted }: { onPlanted?: () => void } = {}) {
  const [phase, setPhase] = useState<Phase>('a')
  const [text, setText] = useState(DEMO.prefill)
  const [seedText, setSeedText] = useState('')
  // 播种那天的 dayKey：记录页把段挂在这一天上（app 也是按播种日），跨午夜开 log 也不会错页。
  const [dayKey, setDayKey] = useState(() => todayKey())
  // 刚从拉起落定：只有这一刻计时行、种子句、页脚才浮现（.page.landed）。
  const [landed, setLanded] = useState(false)
  const [work, setWork] = useState<WorkSeg[]>([])
  const [closing, setClosing] = useState(false)
  const [picked, setPicked] = useState<DemoStage>('sprout')
  const [reveal, setReveal] = useState<DemoStage | null>(null)
  // Take it 之后：今天结束了，停在「Today took root.」那一页，作业记录从这里进（app 也是收工之后才有入口）。
  const [closed, setClosed] = useState<DemoStage | null>(null)
  const [logOpen, setLogOpen] = useState(false)
  const seedRef = useRef<SVGGElement | null>(null)
  useSeedFall(phase, seedRef)

  const working = openSeg(work)
  // 正计时：只在表开着时每秒刷一次。
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    if (!working) return
    setNow(Date.now())
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [working])
  const elapsed = work.reduce((sum, s) => sum + ((s.end ?? now) - s.start), 0)

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

  // 弹窗或记录页开着时 Esc 关掉（app 没有这条，网页键盘用户多）。
  useEffect(() => {
    if (!closing && !logOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setClosing(false)
      setLogOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closing, logOpen])

  const plant = () => {
    if (!text.trim() || phase !== 'a') return
    setSeedText(text.trim())
    setDayKey(todayKey())
    // app 在播种那一批就写 work.started：种下即开始作业，进仓时计时已经在走，按钮是 Pause。
    const t = Date.now()
    setNow(t)
    setWork([{ start: t, end: null }])
    setPhase('falling')
    onPlanted?.()
  }
  const toggleWork = () => {
    // 同一时刻同时更新 now 和段，开始的那一帧 readout 才不会先用旧 now 算出负数
    const t = Date.now()
    setNow(t)
    setWork((w) => (openSeg(w) ? stopWork(w, t) : [...w, { start: t, end: null }]))
  }
  const confirm = () => {
    // 结束这一天前若还开着先收口（app 也是这么做的）
    setWork(stopWork)
    setClosing(false)
    setReveal(picked)
  }
  const take = () => {
    setClosed(reveal)
    setReveal(null)
  }

  const today = dayKey
  const midnight = dayMidnightMs(today)
  const segs: Seg[] = work.map((s) => ({ start: (s.start - midnight) / 60_000, end: s.end === null ? null : (s.end - midnight) / 60_000 }))
  const workLabel = working ? DEMO.workPause : work.length > 0 ? DEMO.workResume : DEMO.workStart

  const inTransition = phase === 'falling' || phase === 'filling' || phase === 'rise'
  const head = (
    <div className="page-head">
      <div className="page-title">{DEMO.ecosphereName}</div>
      <div className="tag num">{DEMO.pod}</div>
    </div>
  )

  return (
    <div className={`page ${working ? 'working' : ''} ${landed ? 'landed' : ''}`} data-phase={phase}>
      {closed ? (
        <>
          {/* 状态 C（app Sow.tsx）：今天结束了，植物长在地里 */}
          <Scene>
            <GroundA />
            <Plant species={DEMO_SPECIES} stage={STAGE[closed]} x={180} y={372} />
          </Scene>
          {head}
          <div className="seed-text">
            <div className="line" style={{ color: 'var(--ink-85)', fontSize: 14 }}>{seedText}</div>
            <div className="from">{DEMO.tookRoot}</div>
            <button className="btn-op" onClick={() => setLogOpen(true)}>{DEMO.log}</button>
          </div>
          <div className="spacer" />
        </>
      ) : phase === 'b' ? (
        <>
          {/* 状态 B：种了没结束。页头下 mono 正计时（只在作业中显示），页脚两层：作业开关、收工 */}
          <Scene>
            <DomeInside />
          </Scene>
          {head}
          <div className="oprow">
            <div className={`readout num ${working ? '' : 'off'}`}>{fmtElapsed(elapsed)}</div>
          </div>
          <div className="seed-text">
            <div className="line">{seedText}</div>
          </div>
          <div className="spacer" />
          <div className="page-foot">
            <button className="btn-op lg" onClick={toggleWork}>{workLabel}</button>
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
        <Reveal relic={DEMO_RELIC} species={DEMO_SPECIES} stage={reveal} ecosphereName={DEMO.ecosphereName} takeLabel={DEMO.take} onDone={take} />
      )}
      {logOpen && closed && (
        <OpLog today={today} ecosphereName={DEMO.ecosphereName} seedText={seedText} stateLabel={DEMO.states[closed]} segs={segs} onClose={() => setLogOpen(false)} />
      )}
    </div>
  )
}
