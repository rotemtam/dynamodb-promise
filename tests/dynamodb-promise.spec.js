'use strict';

const DocumentClient = require('../src/index')
 , expect = require('chai').expect;

describe('Construct object', function() {
  let docClient;
  before(function() {
    docClient = DocumentClient({region: 'us-east-1'});
  });
  it('should return a dynamodb document client', function() {
    expect(docClient.constructor.name).to.equal('DocumentClient')
  });
  it('should create a scanFullAsync method', function() {
    expect(docClient).to.respondTo('scanFullAsync')
  });
});
