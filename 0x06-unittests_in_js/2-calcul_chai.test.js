const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  it('should return correct output for SUM', () => {
    expect(calculateNumber('SUM', 1.3, 5)).to.equal(6);
  });
  it('should return correct output for SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 1.6, 5)).to.equal(-3);
  });
  it('should return correct output for DIVIDE by zero', () => {
    expect(calculateNumber('DIVIDE', 1.01, 0)).to.equal('Error');
  });
  it('should return correct output for DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 5.1, 2)).to.equal(2.5);
  });
  it('should return Error for DIVIDE with 0 and 0', () => {
    expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
  });
});
