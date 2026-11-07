import { useState } from 'react'
import SwipeCard from './SwipeCard'
import './App.css'

type Destination = { name: string; description: string; emoji: string; color: string }

const destinations: Destination[] = [
  { name: 'Lisbon, Portugal', description: 'Tiled streets, pastries, and golden sunsets.', emoji: '🚋', color: '#ffd166' },
  { name: 'Kyoto, Japan', description: 'Temples, gardens, and quiet old lanes.', emoji: '⛩️', color: '#f4a6b7' },
  { name: 'Hanoi, Vietnam', description: 'Street food, motorbikes, and lake walks.', emoji: '🍜', color: '#9bd8a4' },
  { name: 'Banff, Canada', description: 'Mountains, turquoise lakes, and hiking.', emoji: '🏔️', color: '#8ecae6' },
  { name: 'Mexico City, Mexico', description: 'Art, markets, and incredible tacos.', emoji: '🌮', color: '#f9a875' },
]

function Logo() {
  return (
    <div className="logo">
      <div className="hex">🐝</div>
      <h1>Waggle</h1>
    </div>
  )
}

function App() {
  const [index, setIndex] = useState(0)
  const [liked, setLiked] = useState<string[]>([])

  function vote(yes: boolean) {
    if (yes) setLiked([...liked, destinations[index].name])
    setIndex(index + 1)
  }

  if (index >= destinations.length) {
    return (
      <div>
        <Logo />
        <h2>Your Waggles</h2>
        <ul className="results">
          {liked.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </div>
    )
  }

  const current = destinations[index]
  return (
    <div>
      <Logo />
      <div className="cards">
        <SwipeCard
          key={current.name}
          name={current.name}
          description={current.description}
          emoji={current.emoji}
          color={current.color}
          onSwipe={vote}
        />
      </div>
      <button onClick={() => vote(false)}>Nope</button>
      <button onClick={() => vote(true)}>Waggle!</button>
    </div>
  )
}

export default App