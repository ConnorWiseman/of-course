/**
 * @file Unit tests for lib/prompt.js
 */
'use strict';


const chai           = require('chai');
const chaiAsPromised = require('chai-as-promised');
const proxyquire     = require('proxyquire');
const should         = chai.should();
const sinon          = require('sinon');


chai.use(chaiAsPromised);


const readlineStubs = {
  close:           function() {},
  createInterface: function() { return this; },
  question:        function(text, cb) {
    return cb('response');
  }
};


const prompt = proxyquire('../../lib/prompt', {
  'readline': readlineStubs
});


describe('lib/prompt.js', () => {
  it('should export a function', () => {
    prompt.should.exist;
    prompt.should.be.a('function');
  });

  it('should create an interface via readline#createInterface', (done) => {
    sinon.spy(readlineStubs, 'createInterface');

    prompt('string', (response) => {
      should.equal(readlineStubs.createInterface.callCount, 1);
      readlineStubs.createInterface.restore();
      done();
    });
  });

  it('should call readline#question', (done) => {
    sinon.spy(readlineStubs, 'createInterface');
    sinon.spy(readlineStubs, 'question');

    prompt('string', (response) => {
      should.equal(readlineStubs.question.callCount, 1);
      readlineStubs.createInterface.restore();
      readlineStubs.question.restore();
      done();
    });
  });

  it('should call readline#close', (done) => {
    sinon.spy(readlineStubs, 'question');
    sinon.spy(readlineStubs, 'close');

    prompt('string', (response) => {
      should.equal(readlineStubs.close.callCount, 1);
      readlineStubs.question.restore();
      readlineStubs.close.restore();
      done();
    });
  });
});
