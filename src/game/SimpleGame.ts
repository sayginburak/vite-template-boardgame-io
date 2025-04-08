import { Game } from 'boardgame.io';

export interface SimpleGameState {
  cells: (string | null)[];
  currentPlayer: string;
}

export const SimpleGame: Game<SimpleGameState> = {
  name: 'simple-game',
  setup: (): SimpleGameState => ({
    cells: Array(9).fill(null),
    currentPlayer: '0',
  }),

  moves: {
    clickCell: ({ G, ctx }: { G: SimpleGameState, ctx: any }, cellIndex: number) => {
      if (G.cells[cellIndex] === null) {
        G.cells[cellIndex] = ctx.currentPlayer;
        G.currentPlayer = ctx.currentPlayer === '0' ? '1' : '0';
      }
    },
  },

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },
}; 