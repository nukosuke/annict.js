const UsersService
    = require('../../lib/services/users-service').UsersService;
const HttpClient = require('../../lib/http-client').HttpClient;

describe('users service', () => {

  const User = new UsersService( new HttpClient() );

  it('has correct members', done => {
    [
      'client',
      'get',
    ].forEach(prop => expect(User).to.have.property(prop));
    done();
  });

  it('constructor new service correctly', done => {
      expect(User.client).to.be.instanceof(HttpClient);
      done();
  });

});
