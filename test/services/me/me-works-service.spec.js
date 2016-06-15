const MeWorksService
    = require('../../../lib/services/me/me-works-service').MeWorksService;
const HttpClient = require('../../../lib/http-client').HttpClient;

describe('me works service', () => {

    const Work = new MeWorksService( new HttpClient() );

    it('has correct members', done => {
        [
            'client',
            'get',
        ]
        .forEach(prop => expect(Work).to.have.property(prop));
        done();
    });

    it('constructor new service correctly', done => {
        expect(Work.client).to.be.instanceof(HttpClient);
        done();
    });
    
});
