import { BoardProps } from 'boardgame.io/react';
import { GameState } from '../game/Game';

export function Board({ G, ctx, moves, isActive }: BoardProps<GameState>) {
  const onClick = (id: number) => {
    if (isActive && G.cells[id] === null) {
      moves.clickCell(id);
    }
  };

  const cellStyle = {
    border: '1px solid #555',
    width: '50px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center' as const,
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const winner = ctx.gameover?.winner;
  const draw = ctx.gameover?.draw;

  let tbody = [];
  for (let i = 0; i < 3; i++) {
    let cells = [];
    for (let j = 0; j < 3; j++) {
      const id = 3 * i + j;
      cells.push(
        <td key={id} style={cellStyle} onClick={() => onClick(id)}>
          {G.cells[id]}
        </td>
      );
    }
    tbody.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <div className="game">
      <div className="status">
        {winner && <div>Winner: Player {winner}</div>}
        {draw && <div>Draw!</div>}
        {!ctx.gameover && <div>Current player: {ctx.currentPlayer}</div>}
      </div>
      <table>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  );
} 