/**
 * An API returned Match object
 * @class Match
 */
class Match {
    constructor(content) {
        /**
         * Match ID
         * @type {number}
         */
        this.id = content.id;

        /**
         * Game mode
         * @type {string}
         */
        this.playlist = content.playlist;

        /**
         * Number of kills
         * @type {number}
         */
        this.kills = content.kills;

        /**
         * Number of wins
         * @type {number}
         */
        this.top1 = content.top1;

        /**
         * Number of times in top 5
         * @type {number}
         */
        this.top5 = content.top5;

        /**
         * Number of times in top 6
         * @type {number}
         */
        this.top6 = content.top6;

        /**
         * Number of times in top 10
         * @type {number}
         */
        this.top10 = content.top10;

        /**
         * Number of times in top 12
         * @type {number}
         */
        this.top12 = content.top12;

        /**
         * Number of times in top 25
         * @type {number}
         */
        this.top25 = content.top25;

        /**
         * Number of matches
         * @type {number}
         */
        this.matches = content.matches;

        /**
         * Number of times in top 3
         * @type {number}
         */
        this.top3 = content.top3;

        /**
         * Date collected in ISO 8601
         * @type {string}
         */
        this.dateCollected = content.dateCollected;

        /**
         * Score gained from the match group
         * @type {number}
         */
        this.score = content.score;

        /**
         * TRN rating gained from the match group
         * @type {number}
         */
        this.trnRating = content.trnRating;
    }
}

/**
 * An API returned RecentMatch object
 * @class RecentMatch
 * @extends Match
 */
class RecentMatch extends Match {
    constructor(content) {
        super(content);

        this.accountId = content.accountId;
        this.minutesPlayed = content.minutesPlayed;
        this.platform = content.platform;
        this.trnRatingChange = content.trnRatingChange;
    }
}

module.exports = {
    RecentMatch: RecentMatch,
    Match: Match
};