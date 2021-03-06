/**
 * @file Unit tests for lib/index.js
 */
'use strict';


const chai           = require('chai');
const chaiAsPromised = require('chai-as-promised');
const proxyquire     = require('proxyquire');
const should         = chai.should();
const sinon          = require('sinon');

chai.use(chaiAsPromised);


const promptStub       = sinon.stub().returns(Promise.resolve('string'));
const promptSilentStub = sinon.stub().returns(Promise.resolve('string'));


const prompt = proxyquire('../../lib', {
  './prompt': promptStub,
  './prompt-silent': promptSilentStub
});


describe('lib/index.js', () => {
  it('should export `string` and `password` functions', () => {
    prompt.should.have.all.keys('string', 'password');
  });

  describe('#string', () => {
    it('should be a function', () => {
      prompt.string.should.exist;
      prompt.string.should.be.a('function');
    });

    it('should return a Promise', () => {
      prompt.string('').should.be.a('Promise');
    });

    it('should eventually resolve to a string', () => {
      prompt.string('').should.eventually.be.a.string;
    });
  });

  describe('#password', () => {
    it('should be a function', () => {
      prompt.password.should.exist;
      prompt.password.should.be.a('function');
    });

    it('should return a Promise', () => {
      prompt.password('').should.be.a('Promise');
    });

    it('should eventually resolve to a string', () => {
      prompt.password('').should.eventually.be.a.string;
    });
  });
});
