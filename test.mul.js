const sum = require('./mul.js');

test('multiple 2 * 3 to equal 6', () => {
    expect(sum(2, 3)).toBe(6);
});