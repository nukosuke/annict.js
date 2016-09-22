require('../../browser/annict.min');

describe('authorization service', () => {

    const annict = new Annict();
    const OAuth  = annict.OAuth;

    it('support authorize', done => {
        window.location.assign = sinon.spy();
        OAuth.authorize();

        expect(window.location.assign).to.have.been.called;
        done();
    });
});
