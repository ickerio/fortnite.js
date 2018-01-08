class Profile {
    constructor(content) {
        this.accountId = content.accountId;
        this.platformId = content.platformId;
        this.platformName = content.platformName;
        this.epicUserHandle = content.epicUserHandle;
        this.stats = content.stats;
        this.lifeTimeStats = content.lifeTimeStats;
    }
}

module.exports = Profile;