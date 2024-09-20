const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return correct output', () => {
    assert.equal(calculateNumber(1.3, 5), 6);
  });
  it('should return correct output', () => {
    assert.equal(calculateNumber(1.6, 5), 7);
  });
  it('should return correct output', () => {
    assert.equal(calculateNumber(1.01, 5), 6);
  });
  it('should return correct output', () => {
    assert.equal(calculateNumber(1, 5.1), 6);
  });
  it('should return correct output', () => {
    assert.equal(calculateNumber(1.3, 5.7), 7);
  });
  it('should return correct output', () => {
    assert.equal(calculateNumber(1.6, 5.7), 8);
  });
  it('should return correct output', () => {
    assert.equal(calculateNumber(1.3, 5.1), 6);
  });
  it('should return correct output', () => {
    assert.equal(calculateNumber(1.3, 0.5), 2);
  });
});
