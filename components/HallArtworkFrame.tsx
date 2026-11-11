import type { CSSProperties } from 'react';

const framePieces = [
  ['corner-tl', 1, 1],
  ['rail-top', 1, 2],
  ['center-top', 1, 3],
  ['rail-top', 1, 4],
  ['corner-tr', 1, 5],
  ['rail-left', 2, 1],
  ['rail-right', 2, 5],
  ['center-left', 3, 1],
  ['center-right', 3, 5],
  ['rail-left', 4, 1],
  ['rail-right', 4, 5],
  ['corner-bl', 5, 1],
  ['rail-bottom', 5, 2],
  ['center-bottom', 5, 3],
  ['rail-bottom', 5, 4],
  ['corner-br', 5, 5],
] as const;

export function HallArtworkFrame() {
  return (
    <span aria-hidden="true" className="hall-artwork-frame">
      {framePieces.map(([piece, row, column]) => (
        <span
          key={`${row}-${column}`}
          style={{
            gridArea: `${row} / ${column}`,
            '--frame-piece': `url(/ornaments/hall-frame/${piece}.png)`,
          } as CSSProperties}
        />
      ))}
    </span>
  );
}
