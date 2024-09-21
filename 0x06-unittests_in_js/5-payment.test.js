const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');
const { it, describe } = require('mocha');

describe('sendPaymentRequestToApi', () => {
    let spyBoy;
    beforeEach(() => {
      spyBoy = sinon.spy(console, 'log');
    });
    afterEach(() => {
      sinon.restore();
    });
    it('checking if numbers round with spies and stubs 1st', () => {
        sendPaymentRequestToApi(100, 20);
        expect(spyBoy.calledOnce).to.be.true;
        expect(spyBoy.calledWith('The total is: 120')).to.be.true;
      });
    it('checking if numbers round with spies and stubs 2nd', () => {
        sendPaymentRequestToApi(10, 10);
        expect(spyBoy.calledOnce).to.be.true;
        expect(spyBoy.calledWith('The total is: 20')).to.be.true;
});
});
