const rpnCalculator = require('./rpn-calculator');


test('input: 12 result: 12', () => {
    expect(rpnCalculator.processInput('12')).toBe(12);
});


test('input: 5 5 5 8 + + - result: -13', () => {
    expect(rpnCalculator.processInput('5 5 5 8 + + -')).toBe(-13);
});


test('input: 2 3 + 6 * result: 30', () => {
    expect(rpnCalculator.processInput('2 3 + 6 *')).toBe(30);
});