const from2000 = require('../from2000.js');



test('seconde from 01/01/2000 to 21/12/2012 is 432169200000', () => {
    expect(from2000()).toBe(432169200000);
});