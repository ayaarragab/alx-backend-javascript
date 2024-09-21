const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');
const { it, describe } = require('mocha');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    const checkSoy = sinon.spy(console, 'log');
    it('should log the correct total', () => {
        const stub = sinon.stub(Utils, 'calculateNumber');
        stub.withArgs('SUM', 4, 5).returns(9);
        sendPaymentRequestToApi(4, 5);
        expect(checkSoy.calledOnce).to.be.true;
        expect(checkSoy.calledWith('The total is: 9')).to.be.true;
        checkSoy.restore();
        stub.restore();
    });
});
