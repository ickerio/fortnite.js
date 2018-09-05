class StoreItem {
    constructor(content) {
        this.imageUrl = content.imageUrl;
        this.manifestId = content.manifestId;
        this.name = content.name;
        this.rarity = content.rarity;
        this.storeCategory = content.storeCategory;
        this.vBucks = content.vBucks;
    }
}

module.exports = StoreItem;