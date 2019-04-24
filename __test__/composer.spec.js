var compose = require('../composer');
var ind = require('../index');

test('compose add and a digit and invoke mul', () => {
    expect(compose(ind.mul, ind.add(1,2), 3)).toBe(9);
  });