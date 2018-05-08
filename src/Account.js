const Match = require('./Match');

class Account {
    constructor(content) {
        this.accountId = content.accountId;
        this.platformId = content.platformId;
        this.platformName = content.platformName;
        this.platformNameLong = content.platformNameLong;
        this.displayName = content.epicUserHandle;

        this.solo = this._structureGame(content.stats.p2);
        this.duo = this._structureGame(content.stats.p10);
        this.squad = this._structureGame(content.stats.p9);

        this.curr_solo = this._structureGame(content.stats.curr_p2);
        this.curr_duo = this._structureGame(content.stats.curr_p10);
        this.curr_squad = this._structureGame(content.stats.curr_p9);

        this.prior_solo = this._structureGame(content.stats.prior_p2);
        this.prior_duo = this._structureGame(content.stats.prior_p10);
        this.prior_squad = this._structureGame(content.stats.prior_p9);

        this.recentMatches = content.recentMatches.map(m => new Match(m));
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