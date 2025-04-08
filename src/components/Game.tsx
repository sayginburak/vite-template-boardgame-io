import { BoardProps } from 'boardgame.io/react';
import { SimpleGameState } from '../game/SimpleGame';

export function Game({ G, ctx, moves, isActive }: BoardProps<SimpleGameState>) {
  const onClick = (id: number) => {
    if (isActive) {
      moves.clickCell(id);
    }
  };

  const cellStyle = {
    border: '1px solid #555',
    width: '100px',
    height: '100px',
    lineHeight: '100px',
    textAlign: 'center' as const,
    cursor: 'pointer',
    fontSize: '2em',
    fontWeight: 'bold',
  };

  const cells = G.cells.map((cell: string | null, id: number) => (
    <td key={id} style={cellStyle} onClick={() => onClick(id)}>
      {cell}
    </td>
  ));

  const rows = [];
  for (let i = 0; i < 3; i++) {
    rows.push(
      <tr key={i}>
        {cells.slice(i * 3, (i + 1) * 3)}
      </tr>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Current Player: {ctx.currentPlayer === '0' ? 'Player 1' : 'Player 2'}</h2>
      <h3>{isActive ? "Your Turn!" : "Waiting for opponent..."}</h3>
      <table style={{ margin: '0 auto' }}>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
} 