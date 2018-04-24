const fortnite = require('fortnite.js');

// Make sure you set your own key, otherwise it won't work!
// Check the README for more info on obtaining your key.

const client = new fortnite('my api key');

client.get('ickerio', fortnite.PC)
    .then(console.log)
    .catch(console.error);