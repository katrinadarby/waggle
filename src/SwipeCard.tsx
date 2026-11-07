import { useRef, useState } from 'react'

type Props = {
  name: string
  description: string
  emoji: string
  color: string
  onSwipe: (liked: boolean) => void
}

export default function SwipeCard({ name, description, emoji, color, onSwipe }: Props) {
  const [dragX, setDragX] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [flown, setFlown] = useState(false)
  const startX = useRef(0)

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (flown) return
    e.currentTarget.setPointerCapture(e.pointerId)
    startX.current = e.clientX
    setDragging(true)
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return
    setDragX(e.clientX - startX.current)
  }

  function handlePointerUp() {
    if (!dragging) return
    setDragging(false)
    if (dragX > 100) flyOff(1)
    else if (dragX < -100) flyOff(-1)
    else setDragX(0) // not far enough: snap back
  }

  function flyOff(direction: 1 | -1) {
    setFlown(true)
    setDragX(direction * 600)
    setTimeout(() => onSwipe(direction === 1), 300)
  }

  const likeOpacity = Math.min(Math.max(dragX / 100, 0), 1)
  const nopeOpacity = Math.min(Math.max(-dragX / 100, 0), 1)

  return (
    <div
      className={`swipe-wrapper ${dragging ? 'dragging' : ''}`}
      style={{
        transform: `translateX(${dragX}px) rotate(${dragX / 15}deg)`,
        opacity: flown ? 0 : 1,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      
     <div className="location-card">
        <span className="stamp stamp-like" style={{ opacity: likeOpacity }}>WAGGLE</span>
        <span className="stamp stamp-nope" style={{ opacity: nopeOpacity }}>NOPE</span>
        <div className="card-hero" style={{ background: color }}>
          <span className="card-emoji">{emoji}</span>
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p><small>Swipe right to waggle 🐝</small></p>
    </div>
    </div>
  )
}