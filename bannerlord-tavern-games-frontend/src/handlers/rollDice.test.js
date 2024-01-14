const rollDice = require('./rollDice');

test('checks if rolled number is less than or equal to 5', () => {
    expect(rollDice(1, 5)).toBeLessThanOrEqual(5);
});

test('checks if rolled number is greater than or equal to 1', () => {
    expect(rollDice(1, 5)).toBeGreaterThanOrEqual(1);
});