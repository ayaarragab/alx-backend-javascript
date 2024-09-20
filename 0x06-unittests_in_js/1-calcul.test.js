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
  it('checking correct type for operation 1', () => {
    assert.equal(calculateNumber(5, 1, 4), 'Error');
  });
  it('should return correct output', () => {
    assert.equal(calculateNumber('DIVIDE', 5.1, 2), 2.5);
  })
  it('0 and 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
  });
  it(' type for operation 2', () => {
    assert.equal(calculateNumber('plus', 1, 4), 'Error');
  });
});
