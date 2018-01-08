# Fortnite.js

Fully fledged API for fortnite stats. Under construction

`npm install fortnite.js --save`

```js
const fortnite = require('fortnite.js');

const Client = new fortnite.Client('cefb0824-9610-4773-b550-57ea035ee103');
Client.get('ickerio', 'pc').then(console.log);
```