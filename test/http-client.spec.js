const HttpClient = require('../lib/http-client').HttpClient;

describe('http client', () => {
  const httpClient = new HttpClient();

  it('has correct default headers', done => {
    expect(httpClient.headers).to.have.all.keys(
      'Accept',
      'Content-Type',
      'User-Agent'
    );
    done();
  });

});
