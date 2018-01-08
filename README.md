# Fortnite.js

Fully fledged API for fortnite stats, without the fuss. The most simple api on the npm registry, simply [generate your api key](https://fortnitetracker.com/site-api) and pass it through to the client.

`npm install fortnite.js --save`

```js
const fortnite = require('fortnite.js');

const Client = new fortnite.Client('api key here');
Client.get('ickerio', 'pc')
    .then(p => {
        console.log(`${p.username} has placed in the Top 12: ${p.lifeStats.get('Top 12s')} out of ${p.lifeStats.get('Matches Played')} games.`);
        // ickerio has placed in the Top 12: 2 out of 39 games.
    });
```