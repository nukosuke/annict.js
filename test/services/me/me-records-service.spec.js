const MeRecordsService
    = require('../../../lib/services/me/me-records-service').MeRecordsService;
const HttpClient = require('../../../lib/http-client').HttpClient;

describe('me records service', () => {

    const Record = new MeRecordsService( new HttpClient() );

    it('has correct members', done => {
        [
            'client',
            'create',
            'update',
            'delete'
        ]
        .forEach(prop => expect(Record).to.have.property(prop));
        done();
    });

    it('constructor new service correctly', done => {
        expect(Record.client).to.be.instanceof(HttpClient);
        done();
    });

});
