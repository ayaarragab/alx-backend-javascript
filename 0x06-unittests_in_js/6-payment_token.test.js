const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');
const { it, describe } = require('mocha');

describe('getPaymentTokenFromAPI', () => {
    it('isPromise?', () => {
        res = getPaymentTokenFromAPI(true);
        expect(res.to.be.instanceof(Promise));
      });
    it('', () => {
        getPaymentTokenFromAPI(true)
        .then((res) => {
            expect(res.data).to.be.equal('Successful response from the API');
            done();
        });
    });
    it('', () => {
        getPaymentTokenFromAPI(false)
        .then((res) => {
            expect(res.data).to.be.equal('');
            done();
        });
    })
});
