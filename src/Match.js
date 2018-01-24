class Match {
    constructor(content) {
        this.id = content.id;
        this.accountId = content.accountId;
        this.playlist = content.playlist;
        this.kills = content.kills;
        this.minutesPlayed = content.minutesPlayed;
        this.top1 = content.top1;
        this.top5 = content.top5;
        this.top6 = content.top6;
        this.top10 = content.top10;
        this.top12 = content.top12;
        this.top25 = content.top25;
        this.matches = content.matches;
        this.top3 = content.top3;
        this.dateCollected = content.dateCollected;
        this.score = content.score;
        this.platform = content.platform;
        this.trnRating = content.trnRating;
        this.trnRatingChange = content.trnRatingChange;
    }
}

module.exports = Match;