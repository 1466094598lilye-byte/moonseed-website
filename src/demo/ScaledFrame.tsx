import { useEffect, useRef, useState, type ReactNode } from 'react'

// app 的页面按 360 × 588 画、字号是固定 px，不能跟着容器流动。按 site.css 里写的缩放契约：
// 量 .frame-slot 的宽 w，scale = min(1, (w − 5) / 360)（5 = .frame-wrap 左右两条 2.5px 边），
// .frame-wrap 内联宽高跟着缩，.frame 整块 transform 缩放，边框画在不缩放的 .frame-wrap 上。只缩小不放大。
const W = 360
const H = 588
const BORDER = 5

export function ScaledFrame({ children }: { children: ReactNode }) {
  const slot = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const el = slot.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setScale(Math.max(0, Math.min(1, (entry.contentRect.width - BORDER) / W))))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return (
    <div ref={slot} className="frame-slot">
      <div className="frame-wrap" style={{ width: W * scale, height: H * scale }}>
        <div className="frame" style={{ transform: `scale(${scale})` }}>{children}</div>
      </div>
    </div>
  )
}
