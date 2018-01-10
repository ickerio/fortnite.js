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
        this.stats = this._structureStats(content.lifeTimeStats);
    }

    _structureStats(stats) {
        const newStats = {};
        for (var s of stats) {
            newStats[s.key] = s.value;
        }
        return newStats;
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