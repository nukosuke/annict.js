const chai      = require('chai');
const sinon     = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

/**
 * inject global variables
 * be careful of name conflict!
 */
global.expect = chai.expect;
