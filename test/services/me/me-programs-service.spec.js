const MeProgramsService
    = require('../../../lib/services/me/me-programs-service').MeProgramsService;
const HttpClient = require('../../../lib/http-client').HttpClient;

describe('me programs service', () => {

    const Program = new MeProgramsService( new HttpClient() );

    it('has correct members', done => {
        [
            'client',
            'get',
        ]
        .forEach(prop => expect(Program).to.have.property(prop));
        done();
    });

    it('constructor new service correctly', done => {
        expect(Program.client).to.be.instanceof(HttpClient);
        done();
    });

});
