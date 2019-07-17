const fetch = require('node-fetch');
const Package = require('../package.json');

const Account = require('./Account');
const Match = require('./Match').Match;
const StoreItem = require('./StoreItem');
const Challenges = require('./Challenges');

/**
 * The client for interacting with the Fortnite Tracker API
 * @class Client
 * @param {string} key Fortnite Tracker API token
 */
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

    /**
     * Makes the request to the API
     * @private
     * @param {string} link URL endpoint of API
     * @returns {Promise<Object>}
     * @memberof Client
     */
    _request(link) {
        return fetch(link, { headers: this.headers })
            .then(r => {
                this.rateLimit = {
                    limit: Number(r.headers.get('x-ratelimit-limit-minute')),
                    remaining: Number(r.headers.get('x-ratelimit-remaining-minute'))
                };

                if (!r.ok) return Promise.reject(r.statusText);

                return r.json();
            })
            .catch(e => Promise.reject(`HTTP ${e}`));
    }

    /**
     * Get user info
     * @param {string} username username of the user to search for
     * @param {string=} [platform='pc'] platform to search for user in (pc, xbl, or psn)
     * @param {boolean=} [raw=false] whether to return raw response from API
     * @returns {(Promise<Account>|Promise<Object>)}
     * @memberof Client
     */
    get(username, platform = 'pc', raw = false) {
        return this._request(`https://api.fortnitetracker.com/v1/profile/${platform}/${encodeURI(username)}`)
            .then(r => r.error ? Promise.reject(r) : r)
            .then(r => raw ? r : new Account(r))
            .catch(e => Promise.reject(e));
    }

    /**
     * Get user's matches
     * @param {string} accountId user's account ID found in user info
     * @param {boolean=} [raw=false] whether to return raw response from API
     * @returns {(Promise<Array<Match>>|Promise<Array<Object>>)}
     * @memberof Client
     */
    getMatches(accountId, raw = false) {
        return this._request(`https://api.fortnitetracker.com/v1/profile/account/${accountId}/matches`)
            .then(r => r.error ? Promise.reject(r.error) : r)
            .then(r => raw ? r : r.map(m => new Match(m)))
            .catch(e => Promise.reject(e));
    }

    /**
     * Get current store items
     * @param {boolean=} [raw=false] whether to return raw response from API
     * @returns {Promise<Array<StoreItem>>|Promise<Array<Object>>}
     * @memberof Client
     */
    getStore(raw = false) {
        return this._request('https://api.fortnitetracker.com/v1/store')
            .then(r => r.error ? Promise.reject(r.error) : r)
            .then(r => raw ? r : r.map(item => new StoreItem(item)))
            .catch(e => Promise.reject(e));
    }

    /**
     * Get currently weekly challenges
     * @param {boolean=} [raw=false] whether to return raw response from API
     * @returns {(Promise<Challenges>|Promise<Object>)}
     * @memberof Client
     */
    getChallenges(raw = false) {
        return this._request('https://api.fortnitetracker.com/v1/challenges')
            .then(r => r.error ? Promise.reject(r.error) : r)
            .then(r => raw ? r : new Challenges(r))
            .catch(e => Promise.reject(e));
    }
}

module.exports = Client;