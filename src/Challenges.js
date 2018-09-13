/**
 * An API returned Challenges object
 * @class Challenges
 */
class Challenges {
    constructor(content) {
        /**
         * Store items
         * @type {Array<Object>}
         */
        this.items = this._structureItems(content.items);
    }

    _structureItems(oldItems) {
        const items = [];
        for (const oldItem of oldItems) {
            const itemInfo = oldItem.metadata;
            const item = {};
            for (const field of itemInfo) {
                item[field.key] = field.value;
            }
            items.push(item);
        }
        return items;
    }
}

module.exports = Challenges;