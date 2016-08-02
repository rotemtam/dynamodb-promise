### dynamodb-promise

A Promisified dynamodb Document Client , with some useful helpers

### Usage

```js
'use strict';

const DocumentClient = require('../src/index')
 , co = require('co');

let docClient = DocumentClient({region: 'us-east-1'});

function *main() {
  let res = yield docClient.scanFullAsync({
    TableName: 'example_table_name'
  });
  console.log(`Found ${res.Items.length} items.`)
}

co(main);
```
