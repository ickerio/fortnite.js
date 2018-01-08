class Profile {
    constructor(content) {
        this.accountId = content.accountId;
        this.platformId = content.platformId;
        this.platformName = content.platformName;
        this.username = content.epicUserHandle;
        this.seasonStats = content.stats;
        this.lifeStats = new Map(content.lifeTimeStats.map(s => [s.key, s.value]));
    }
}

module.exports = Profile;