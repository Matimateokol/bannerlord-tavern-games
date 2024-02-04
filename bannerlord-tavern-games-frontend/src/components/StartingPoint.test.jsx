import { cleanup, render, screen } from '@testing-library/react';
import StartingPoint from './StartingPoint';

test('Test if Starting point is rendered with correctly colored Pawns', () => {
  render(<StartingPoint id={'startingPointBlack'} />);

  const blackPawns = screen.getAllByRole('button');

  blackPawns.forEach((pawn) => {
    expect(pawn).toHaveClass('blackPawn');
  });

  cleanup();

  render(<StartingPoint id={'startingPointWhite'} />);

  const whitePawns = screen.getAllByRole('button');

  whitePawns.forEach((pawn) => {
    expect(pawn).toHaveClass('whitePawn');
  });
});
