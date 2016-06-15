const WorksService = require('../../lib/services/works-service').WorksService;
const HttpClient   = require('../../lib/http-client').HttpClient;

describe('works service', () => {

    const Work = new WorksService( new HttpClient() );

    it('has correct members', done => {
        [
            'client',
            'get',
        ]
        .forEach(prop => expect(Work).to.have.property(prop))
        done();
    });

    it('constructor new service correctly', done => {
        expect(Work.client).to.be.instanceof(HttpClient);
        done();
    });

});
