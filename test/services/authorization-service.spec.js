const AuthorizationService =
    require('../../lib/services/authorization-service').AuthorizationService;
const HttpClient = require('../../lib/http-client').HttpClient;

describe('authorization service', () => {

    var OAuth = new AuthorizationService( new HttpClient() );
    const sinon = require('sinon');

    it('has correct members', done => {
        [
            'client',
            'authorize',
            'token',
            'info',
            'revoke'
        ]
        .forEach(prop => expect(OAuth).to.have.property(prop));
        done();
    });

    it('constructor new service correctly', done => {
        expect(OAuth.client).to.be.instanceof(HttpClient);
        done();
    });

    it('support token method', done => {
        OAuth.client.post = sinon.spy();
        OAuth.token();
        expect(OAuth.client.post).to.have.been.called;
        done();
    });

    it('authorize method throw error', done => {
        expect(OAuth.authorize).to.throw(Error);
        done();
    });
});
