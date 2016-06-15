const MeService  = require('../../lib/services/me-service').MeService;
const HttpClient = require('../../lib/http-client').HttpClient;
const services   = require('../../lib/services/me');

describe('me service', () => {

    const me = new MeService( new HttpClient() );

    it('has correct members', done => {
        expect(me).to.have.all.keys(
            'client',
            'Status',
            'Record',
            'Work',
            'Program'
        );
        done();
    });

    it('constructor new service instances correctly', done => {
        expect(me.client)
            .to.be.instanceof(HttpClient);

        expect(me.Status)
            .to.be.instanceof(services.MeStatusesService);

        expect(me.Record)
            .to.be.instanceof(services.MeRecordsService);

        expect(me.Work)
            .to.be.instanceof(services.MeWorksService);

        expect(me.Program)
            .to.be.instanceof(services.MeProgramsService);

        done();
    });
});
