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

    it('convert share_twitter, share_facebook from String to Boolean', done => {
        const query = Record.normalizeQuery({
          share_twitter  : true,
          share_facebook : false,
        });
        expect(query.share_twitter).to.be.a('string').and.equal('true');
        expect(query.share_facebook).to.be.a('string').and.equal('false');
        done();
    });
});
