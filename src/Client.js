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
        
        this.rateLimit = {
            limit: 30,
            remaining: 30
        };

    }

    get(username, platform = 'pc', raw = false) {
        return snekfetch.get(`https://api.fortnitetracker.com/v1/profile/${platform}/${encodeURI(username)}`)
            .set(this.headers)
            .then(r => {
                
                this.rateLimit = {
                    limit: Number(r.headers['x-ratelimit-limit-minute']),
                    remaining: Number(r.headers['x-ratelimit-remaining-minute'])
                };

                if (r.body.error || r.body.message) return Promise.reject(r.body.error);

                return raw ? r.body : new Account(r.body);
            })
            .catch(e => Promise.reject(`HTTP ${e}`));
    }

}

module.exports = Client;