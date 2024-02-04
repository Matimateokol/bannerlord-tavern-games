import { render } from '@testing-library/react';
import PawnHolder from './PawnHolder';

test('Test if PawnHolder matches snapshot with given prop values', async () => {
  const { pawnHolder } = render(<PawnHolder id={3} pawnStyleName={'blackPawn'} />);

  expect(pawnHolder).toMatchSnapshot(`
    <div className="pawnHolder">
      <button className='blackPawn'>3</button>
    </div>
  `);
});
