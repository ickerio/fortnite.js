# fortnite.js [![npm downloads](https://img.shields.io/npm/dt/fortnite.js.svg?maxAge=3600)](https://www.npmjs.com/package/fortnite.js) [![Dependencies](https://img.shields.io/david/ickerio/fortnite.js.svg?maxAge=3600)](https://david-dm.org/ickerio/fortnite.js) [![RunKit](https://badge.runkitcdn.com/fortnite.js.svg)](https://npm.runkit.com/fortnite.js)

<img src="https://user-images.githubusercontent.com/14541442/34761296-23fa9616-f61e-11e7-8530-e6af77046e99.png" width="250" align="right">

###### [API](docs/api.md) | [Changelog](docs/changelog.md) | [Issues](#issues)

A powerful and super light Fortnite stats API wrapper for Node.js.
 
# Setup and Installation
1. Signup at [fortnitetracker](https://fortnitetracker.com/)
2. Navigate to the [api page](https://fortnitetracker.com/site-api) and generate a key
3. Install **fortnite.js** `npm install fortnite.js --save`
4. When using the wrapper, parse your generated key when creating the client


# Examples
```js
const fortnite = require('fortnite.js');

// Make sure you set your own key, otherwise it won't work!
// Check the README for more info on obtaining your key.

const client = new fortnite('my api key');

client.get('ickerio', fortnite.PC)
    .then(p => {
        console.log(`${p.displayName} has placed in the Top 12: ${p.stats.top12} out of ${p.stats.matches} games.`);
        // => ickerio has placed in the Top 12: 13 out of 45 games.

        console.log(`${p.displayName} has played ${p.solo.minutesPlayed.valueInt / (p.solo.minutesPlayed.valueInt + p.duo.minutesPlayed.valueInt + p.squad.minutesPlayed.valueInt) * 100}% of his total time (${p.stats.timePlayed}) in solo.`);
        // => ickerio has played 34.104046242774565% of his total time (5h 46m ) in solo.

        console.log(`${p.displayName} has a nifty K/D of ${p.stats.kd}.`);
        // => ickerio has a nifty K/D of 0.53.
    })
    .catch(console.error);
```

# Issues
If you run into any issues, have any queries or concerns or would just like to make a few suggestions please do not hesitate to open an issue, pull request or message me on Discord at `rabb#7134`