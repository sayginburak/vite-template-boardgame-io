# Boardgame.io + Vite + React Template

This is a template for creating multiplayer board games using [boardgame.io](https://boardgame.io/), React, and Vite.

## Features

- TypeScript support
- React for UI components
- Vite for fast development
- Multiplayer support with Socket.IO
- Clean, modern UI
- Match creation and joining system
- Debug panel included

## Getting Started

1. Clone this template
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Start the game server (in a separate terminal):
   ```bash
   npm run server
   ```

## Playing the Game

1. Open http://localhost:5173 in two browser windows
2. In the first window:
   - Click "Create New Game"
   - Copy the Match ID that appears
3. In the second window:
   - Paste the Match ID
   - Click "Join Game"
4. Play the game!

## Project Structure

```
├── src/
│   ├── game/
│   │   └── Game.ts         # Game logic and state
│   ├── components/
│   │   └── Board.tsx      # Game board component
│   ├── App.tsx            # Main application
│   ├── main.tsx           # Entry point
│   └── *.css             # Styles
├── server.ts              # Game server
└── package.json          # Dependencies and scripts
```

## Customizing the Game

1. Modify `src/game/Game.ts` to change game rules and logic
2. Update `src/components/Board.tsx` to customize the game board
3. Adjust styles in `src/App.css` and `src/index.css`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run server` - Start the game server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Notes

- The game server runs on port 8000
- The development server runs on port 5173
- Debug panel is enabled by default (can be disabled in App.tsx)
- TypeScript is configured for strict mode

## License

MIT 