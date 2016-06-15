const MeStatusesService
    = require('../../../lib/services/me/me-statuses-service').MeStatusesService;
const HttpClient = require('../../../lib/http-client').HttpClient;

describe('me statuses service', () => {

    const Status = new MeStatusesService( new HttpClient() );

    it('has correct members', done => {
        [
            'client',
            'create'
        ]
        .forEach(prop => expect(Status).to.have.property(prop));
        done();
    });

    it('constructor new service correctly', done => {
        expect(Status.client).to.be.instanceof(HttpClient);
        done();
    });

});
