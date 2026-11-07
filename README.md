# 🐝 Waggle

A Tinder-style group trip planner. Friends swipe on destinations and vote together, inspired by how honeybee swarms choose a new home.

![Waggle screenshot](docs/screenshot.png)

## The idea

When a honeybee swarm needs a new home, scout bees advertise sites with a "waggle dance." The swarm commits once enough scouts agree on one site. Waggle brings that logic to group trip planning: everyone swipes on options, and the group's favorites rise to the top.

## Status

Work in progress. The swipe interface works, and the backend and group features are next.

## Tech

- React + TypeScript (Vite)
- Custom swipe gestures built with pointer events (no swipe library)

## Roadmap

- [x] Swipeable destination cards with drag gestures
- [x] WAGGLE / NOPE indicators that fade in while dragging
- [x] Honeybee branding
- [ ] Node + Express backend serving destinations
- [ ] Postgres database for destinations and votes
- [ ] Create a trip and join with an invite link
- [ ] Real-time group voting with Socket.IO
- [ ] Matching engine: weighted scoring and constraints (budget, dates)
- [ ] Tests, CI, and deployment

## Run it locally

```bash
git clone https://github.com/katrinadarby/waggle.git
cd waggle
npm install
npm run dev
```

Then open the link it prints (usually http://localhost:5173).