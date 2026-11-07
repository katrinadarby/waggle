import { useState } from 'react'

type Destination = { name: string; description: string }

const destinations: Destination[] = [
  { name: 'Lisbon, Portugal', description: 'Tiled streets, pastries, and golden sunsets.' },
  { name: 'Kyoto, Japan', description: 'Temples, gardens, and quiet old lanes.' },
  { name: 'Hanoi, Vietnam', description: 'Street food, motorbikes, and lake walks.' },
  { name: 'Banff, Canada', description: 'Mountains, turquoise lakes, and hiking.' },
  { name: 'Mexico City, Mexico', description: 'Art, markets, and incredible tacos.' },
]

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
        <h1>Your Waggles 🐝</h1>
        <ul>
          {liked.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </div>
    )
  }

  const current = destinations[index]
  return (
    <div>
      <h1>Waggle</h1>
      <h2>{current.name}</h2>
      <p>{current.description}</p>
      <button onClick={() => vote(false)}>Nope</button>
      <button onClick={() => vote(true)}>Waggle!</button>
    </div>
  )
}

export default App