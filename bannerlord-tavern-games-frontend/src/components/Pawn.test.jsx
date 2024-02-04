import { render, screen } from '@testing-library/react';
import Pawn from './Pawn';

test('Test if Pawn is rendered with a number on it', () => {
  render(<Pawn pawnStyleName={'blackPawn'} id={5} />);

  const pawn = screen.getByText(/5/i);

  expect(pawn).toBeInTheDocument();
});
