'use strict';
var chai = require('chai');
global.sinon = require('sinon');
global.expect = chai.expect;
global.assert = chai.assert;

describe('Simple unit tests', function() {
  it('True is true', () => {
    expect(true).to.be.true;
  });
});
