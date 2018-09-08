const snekfetch = require('snekfetch');
const Package = require('../package.json');

const Account = require('./Account');
const Match = require('./Match').Match;
const StoreItem = require('./StoreItem');
const Challenges = require('./Challenges');

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

    _request(link) {
        return snekfetch.get(link)
            .set(this.headers)
            .then(r => {

                this.rateLimit = {
                    limit: Number(r.headers['x-ratelimit-limit-minute']),
                    remaining: Number(r.headers['x-ratelimit-remaining-minute'])
                };

                if (r.body.error || r.body.message) return Promise.reject(r.body.error);

                return r.body;
            })
            .catch(e => Promise.reject(`HTTP ${e}`));
    }

    get(username, platform = 'pc', raw = false) {
        return this._request(`https://api.fortnitetracker.com/v1/profile/${platform}/${encodeURI(username)}`)
            .then(r => raw ? r : new Account(r))
            .catch(e => Promise.reject(e));
    }

    getMatches(accountId, raw = false) {
        return this._request(`https://api.fortnitetracker.com/v1/profile/account/${accountId}/matches`)
            .then(r => raw ? r : r.map(m => new Match(m)))
            .catch(e => Promise.reject(e));
    }

    getStore(raw = false) {
        return this._request(`https://api.fortnitetracker.com/v1/store`)
            .then(r => raw ? r : r.map(item => new StoreItem(item)))
            .catch(e => Promise.reject(e));
    }

    getChallenges(raw = false) {
        return this._request(`https://api.fortnitetracker.com/v1/challenges`)
            .then(r => raw ? r : new Challenges(r))
            .catch(e => Promise.reject(e));
    }
}

module.exports = Client;