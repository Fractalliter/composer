var compose = require('../composer');
const add = (...parms) => parms.reduce((a,b) => a+b);
const mul = (...parms) => parms.reduce((a,b) => a*b);

test('compose add and a digit and invoke mul', () => {
    expect(compose(mul, add(1,2), 3)).toBe(9);
  });