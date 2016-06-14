const HttpClient = require('../lib/http-client').HttpClient;

describe('http client', () => {

    const httpClient = new HttpClient();


    it('has properties', done => {
        expect(httpClient).to.have.property('headers')
            .that.is.an('object');

        [
            'getHeader',
            'setHeader',
            'post',
            'get',
            'patch',
            'delete'
        ]
        .forEach(func => {
            expect(httpClient).to.have.property('getHeader')
                .that.is.a('function');
        });
        done();
    });


    it('has correct default headers', done => {
        expect(httpClient.headers).to.have.all.keys(
            'Accept',
            'Content-Type',
            'User-Agent'
        );
        done();
    });

});
