const snekfetch = require('snekfetch');
const Package = require('../package.json');

const Profile = require('./Profile');

class Client {
    constructor(key) {

        if (!key) {
            throw new Error('No API key passed.');
        }

        this.key = key;

        this._headers = {
            'User-Agent': `fortnite.js v${Package.version} (${Package.homepage})`,
            'TRN-Api-Key': this.key
        };
    }

    get(username, platform) {
        return snekfetch.get(`https://api.fortnitetracker.com/v1/profile/${platform}/${username}`)
            .set(this._headers)
            .then(r => r.body.error ? Promise.reject(r.body.error) : new Profile(r.body))
            .catch(e => Promise.reject(`HTTP ${e}`));
    }

}

module.exports = Client;