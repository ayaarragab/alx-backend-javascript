const sinon = require('sinon')
const sendPaymentRequestToApi = require('./4-payment')
const { expect } = require('chai');
const { it, describe } = require('mocha');
const Utils = require('./utils');

describe('', () => {
    const checkSoy = sinon.spy(console, 'log');
    it('should', () => {
        const stub = sinon.stub(Utils, 'calculateNumber').
        sendPaymentRequestToApi(4, 5);
        stub.withArgs('SUM', 4, 5).returns(9);
        expect(checkSoy.calledOnce).to.be.true;
        expect(console.log('The total is: 9')).to.be.all;
        checkSoy.restore();
        stub.restore();
    })
})
