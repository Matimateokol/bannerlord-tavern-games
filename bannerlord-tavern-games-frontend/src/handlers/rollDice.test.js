import { rollDice } from './rollDice';

test('checks if rolled number is less than or equal to 5', () => {
  expect(rollDice(1, 5)).toBeLessThanOrEqual(5);
});

test('checks if rolled number is greater than or equal to 1', () => {
  expect(rollDice(1, 5)).toBeGreaterThanOrEqual(1);
});

test('checks if rolled output is a number', () => {
  expect(rollDice(1, 5)).not.toBeNaN();
});

test('checks if rolled output is a NaN', () => {
  expect(rollDice(NaN, NaN)).toBeNaN();
});
