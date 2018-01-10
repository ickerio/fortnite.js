const snekfetch = require('snekfetch');
const Package = require('../package.json');

const Account = require('./Account');

class Client {
    constructor(key) {

        if (!key) {
            throw new Error('No API key passed.');
        }

        this.key = key;

        this.headers = {
            'User-Agent': `fortnite.js v${Package.version} (${Package.homepage})`,
            'TRN-Api-Key': this.key
        };
    }

    get(username, platform = 'pc') {
        return snekfetch.get(`https://api.fortnitetracker.com/v1/profile/${platform}/${username.replace(/ /g, '%20')}`)
            .set(this.headers)
            .then(r => r.body.error ? Promise.reject(r.body.error) : new Account(r.body))
            .catch(e => Promise.reject(`HTTP ${e}`));
    }

}

module.exports = Client;