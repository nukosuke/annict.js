const EpisodesService
    = require('../../lib/services/episodes-service').EpisodesService;
const HttpClient = require('../../lib/http-client').HttpClient;

describe('episodes service', () => {

    const Episode = new EpisodesService( new HttpClient() );

    it('has correct members', done => {
        [
            'client',
            'get',
        ]
        .forEach(prop => expect(Episode).to.have.property(prop))
        done();
    });

    it('constructor new service correctly', done => {
        expect(Episode.client).to.be.instanceof(HttpClient);
        done();
    });

});
