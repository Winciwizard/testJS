const sum = require('./sub.js');

test('sub 2 - 1 to equal 1', () => {
    expect(sum(2, 1)).toBe(1);
});