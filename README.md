# Fortnite.js

Fully fledged API for fortnite stats. Under construction

`npm install fortnite.js --save`

Get your api key [here](https://fortnitetracker.com/site-api)

```js
const fortnite = require('fortnite.js');

const Client = new fortnite.Client('api key here');
Client.get('ickerio', 'pc').then(console.log);
```