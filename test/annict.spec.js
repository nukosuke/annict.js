const Annict     = require('../lib/annict').default;
const HttpClient = require('../lib/http-client').HttpClient;
const services   = require('../lib/services');

describe('Annict class', () => {

    const annict = new Annict();

    it('has correct members', done => {
        expect(annict).to.have.all.keys(
            'client',
            'OAuth',
            'Work',
            'Episode',
            'Record',
            'Me'
        );
        done();
    });

    it('constructor new service instances correctly', done => {
        expect(annict.client)
            .to.be.instanceof(HttpClient);

        expect(annict.OAuth)
            .to.be.instanceof(services.AuthorizationService);

        expect(annict.Work)
            .to.be.instanceof(services.WorksService);

        expect(annict.Episode)
            .to.be.instanceof(services.EpisodesService);

        expect(annict.Record)
            .to.be.instanceof(services.RecordsService);

        expect(annict.Me)
            .to.be.instanceof(services.MeService);

        done();
    });

});
