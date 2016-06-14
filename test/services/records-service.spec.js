const RecordsService
    = require('../../lib/services/works-service').RecordsService;
const HttpClient = require('../../lib/http-client').HttpClient;

describe('records service', () => {

    const Record = new RecordsService( new HttpClient() );

    it('has correct members', done => {
        [
            'get',
        ]
        .forEach(prop => expect(Record).to.have.property(prop))
        done();
    });

    it('constructor new service correctly', done => {
        expect(Record.client).to.be.instanceof(HttpClient);
        done();
    });

});
