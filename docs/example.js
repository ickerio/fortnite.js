const fortnite = require('fortnite.js');

// Make sure you set your own key, otherwise it won't work!
// Check the README for more info on obtaining your key.

const client = new fortnite('my api key');

client.get('ickerio', fortnite.PC)
    .then(p => {
        console.log(`${p.displayName} has placed in the Top 12: ${p.stats['Top 12s']} out of ${p.stats['Matches Played']} games.`);
        // => ickerio has placed in the Top 12: 13 out of 45 games.

        console.log(`${p.displayName} has played ${p.solo.minutesPlayed.valueInt / (p.solo.minutesPlayed.valueInt + p.duo.minutesPlayed.valueInt + p.squad.minutesPlayed.valueInt) * 100}% of his total time (${p.stats['Time Played']}) in solo.`);
        // => ickerio has played 34.104046242774565% of his total time (5h 46m ) in solo.

        console.log(`${p.displayName} has a nifty K/D of ${p.stats['K/d']}.`);
        // => ickerio has a nifty K/D of 0.53.
    })
    .catch(console.error);