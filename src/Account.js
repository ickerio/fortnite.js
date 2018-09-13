const RecentMatch = require('./Match').RecentMatch;

/**
 * An API returned Account object
 * @class Account
 */
class Account {
    constructor(content) {
        /**
         * Account ID
         * @type {string}
         */
        this.accountId = content.accountId;

        /**
         * Platform ID
         * @type {string}
         */
        this.platformId = content.platformId;

        /**
         * Platform Name
         * @type {string}
         */
        this.platformName = content.platformName;

        /**
         * Longer platform name
         * @type {string}
         */
        this.platformNameLong = content.platformNameLong;

        /**
         * Account username
         * @type {string}
         */
        this.displayName = content.epicUserHandle;

        /**
         * Stats for solo game mode
         * @type {Object}
         * @property {Object} solo.trnRating TRN rating in solo
         * @property {Object} solo.score Score in solo
         * @property {Object} solo.top1 Number of wins in solo
         * @property {Object} solo.top3 Number of times in top 3 in solo
         * @property {Object} solo.top5 Number of times in top 5 in solo
         * @property {Object} solo.top6 Number of times in top 6 in solo
         * @property {Object} solo.top10 Number of times in top 10 in solo
         * @property {Object} solo.top12 Number of times in top 12 in solo
         * @property {Object} solo.top25 Number of times in top 25 in solo
         * @property {Object} solo.kd Kill/Death ratio in solo
         * @property {Object} solo.winRatio Win ratio in solo
         * @property {Object} solo.matches Number of matches in solo
         * @property {Object} solo.kills Number of kills in solo
         * @property {Object} solo.kpg Average kills per game in solo
         * @property {Object} solo.scorePerMatch Score per match in solo
         */
        this.solo = this._structureGame(content.stats.p2);

        /**
         * Stats for duo game mode
         * Has same properties as solo
         * @type {Object}
         */
        this.duo = this._structureGame(content.stats.p10);

        /**
         * Stats for squad game mode
         * Has same properties as solo
         * @type {Object}
         */
        this.squad = this._structureGame(content.stats.p9);

        /**
         * Stats for solo game mode in the current season
         * Has same properties as solo
         * @type {Object}
         */
        this.curr_solo = this._structureGame(content.stats.curr_p2);

        /**
         * Stats for squad game mode in the current season
         * Has same properties as solo
         * @type {Object}
         */
        this.curr_duo = this._structureGame(content.stats.curr_p10);

        /**
         * Stats for squad game mode in the current season
         * Has same properties as solo
         * @type {Object}
         */
        this.curr_squad = this._structureGame(content.stats.curr_p9);

        /**
         * Recent matches that user has played
         * @type {Array<RecentMatch>}
         */
        this.recentMatches = content.recentMatches.map(m => new RecentMatch(m));

        /**
         * Lifetime stats for the user
         * @type {Object}
         * @property {string} stats.top3 Number of times in top 3
         * @property {string} stats.top5 Number of times in top 5
         * @property {string} stats.top6 Number of times in top 6
         * @property {string} stats.top12 Number of times in top 12
         * @property {string} stats.top25 Number of times in top 25
         * @property {string} stats.score Lifetime score
         * @property {string} stats.matches Number of matches
         * @property {string} stats.top1 Number of wins
         * @property {string} stats.winPercent Win percentage
         * @property {string} stats.kills Number of kills
         * @property {string} stats.kd Kill/Death ratio
         */
        this.stats = this._structureStats(content.lifeTimeStats);
    }

    _structureStats(oldStats) {
        const stats = {};
        for (var s of oldStats) {
            stats[s.key] = s.value;
        }

        return {
            top3: stats['Top 3s'],
            top5: stats['Top 5s'],
            top6: stats['Top 6s'],
            top12: stats['Top 12s'],
            top25: stats['Top 25s'],
            score: stats['Score'],
            matches: stats['Matches Played'],
            top1: stats['Wins'],
            winPercent: stats['Win%'],
            kills: stats['Kills'],
            kd: stats['K/d']
        };
    }

    _structureGame(game) {
        const newGame = {};
        for (const s in game) {
            const data = game[s];
            newGame[s] = {
                fullName: data.label,
                name: data.field,
                category: data.category,
                value: data.value,
                valueInt: data.valueInt,
                rank: data.rank,
                percentile: data.percentile,
                displayValue: data.displayValue
            };
        }
        return newGame;
    }
}

module.exports = Account;