# Blackjack (JavaScript Practice)

A simple single–player vs computer Blackjack game built as a JavaScript practice exercise.
It focuses on DOM manipulation, event handling, basic game state management, and simple probability logic (deck shuffle + score calculation).

## Features
- Deck generated and shuffled each game (no external libs needed).
- Player can draw cards or stop.
- Computer auto-draws trying to beat the player without busting.
- Instant score updates and winner detection.

## How to Play
1. Click "New Game" (or start with the initial deck).
2. Press "Request a card" to draw.
3. Press "Stop" to end your turn and let the computer play.
4. Alerts show the result (Win, Lose, or Draw).

## Tech
- Vanilla JavaScript (ES6+)
- Vite for fast development and building
- Minimal HTML + Bootstrap for quick styling

## Setup & Run
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

Enjoy and tweak the logic to extend (multi-player, different Ace values, stats, etc.).
