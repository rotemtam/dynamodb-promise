### dynamodb-promise

A Promisified dynamodb Document Client , with some useful helpers

### Usage

Install:

```bash
npm i --save dynamodb-promise
```

Use:

```js
'use strict';

const DocumentClient = require('dynamodb-promise')
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
