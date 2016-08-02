'use strict';

const AWS = require('aws-sdk')
	, promisifyAll = require('bluebird').promisifyAll
  , assert = require('assert');

function DocumentClient(params) {

  params = params || {};
  assert(params.region, 'Must have "region" in params')
  let service = new AWS.DynamoDB(params)
   , docClient = new AWS.DynamoDB.DocumentClient({
   	region: params.region,
   	service: service
  });

  docClient = promisifyAll(docClient);

  docClient.scanFullAsync = function *(params) {
  	let data = [];

  	for(;;) {
  		let res = yield docClient.scanAsync(params);
  		data = data.concat(res.Items);
  		if (typeof res.LastEvaluatedKey != "undefined") {
  			params.ExclusiveStartKey = res.LastEvaluatedKey;
  		} else {
  			break;
  		}
  	}

  	return {Items: data};
  };

  return docClient;
}

module.exports = DocumentClient;
