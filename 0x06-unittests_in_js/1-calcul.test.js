const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should return correct output', () => {
    assert.equal(calculateNumber('SUM', 1.3, 5), 6);
  });
  it('should return correct output', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.6, 5), -3);
  });
  it('should return correct output', () => {
    assert.equal(calculateNumber('DIVIDE', 1.01, 0), 'Error');
  });
  it('should return correct output', () => {
    assert.equal(calculateNumber('DIVIDE', 5.1, 2), 2.5);
  })
  it('negative number and number rounded up to zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
  });
});
