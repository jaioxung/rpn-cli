const rpnCalculator = require('./rpn-calculator');

test('input: string result: invalid input', () => {
    expect(rpnCalculator.processInput('string')).toBe('invalid input');
});

test('input: 12 result: 12', () => {
    expect(rpnCalculator.processInput('12')).toBe(12);
});

test('input: 4 4 + result: 8', () => {
    expect(rpnCalculator.processInput('4 4 +')).toBe(8);
});

test('input: 9 3 - result: 6', () => {
    expect(rpnCalculator.processInput('9 3 -')).toBe(6);
});

test('input: 3 9 - result: -6', () => {
    expect(rpnCalculator.processInput('3 9 -')).toBe(-6);
});

test('input: 2 3 * result: 6', () => {
    expect(rpnCalculator.processInput('2 3 *')).toBe(6);
});

test('input: 12 4 / result: 3', () => {
    expect(rpnCalculator.processInput('12 4 /')).toBe(3);
});

test('input: 5 5 5 8 + + - result: -13', () => {
    expect(rpnCalculator.processInput('5 5 5 8 + + -')).toBe(-13);
});

test('input: 2 3 6 + * result: 18', () => {
    expect(rpnCalculator.processInput('2 3 6 + *')).toBe(18);
});

test('input: 2 3 + 6 * result: 30', () => {
    expect(rpnCalculator.processInput('2 3 + 6 *')).toBe(30);
});

test('input: 2 3  6  2 * - - result: 11', () => {
    expect(rpnCalculator.processInput('2 3 6  2 * - -')).toBe(11);
});