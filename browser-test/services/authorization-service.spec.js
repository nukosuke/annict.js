require('../../browser/annict.min');

describe('authorization service', () => {

    const annict = new Annict();
    const OAuth  = annict.OAuth;

    it('token method throw error', done => {
        expect(OAuth.token).to.throw(Error);
        done();
    });

    it('support authorize method', done => {
        window.location.assign = sinon.spy();
        OAuth.authorize();

        expect(window.location.assign).to.have.been.called;
        done();
    });
});
