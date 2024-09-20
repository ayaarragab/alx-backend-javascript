const sinon = require('sinon')
const sendPaymentRequestToApi = require('./3-payment')
const { expect } = require('chai');
const { it, describe } = require('mocha');
const Utils = require('./utils');

describe('', () => {
    it('should', () => {
        const spy = sinon.spy(Utils, 'calculateNumber')
        sendPaymentRequestToApi(4, 5)
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('SUM', 4, 9));
        spy.restore();
    })
})
