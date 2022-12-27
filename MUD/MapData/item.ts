import { ItemList } from '../data';
import { Status } from '../interface';

export class Item {
    constructor(private _status: Status, private _itemList: ItemList) {}

    randomItem() {
        const itemKind = Math.floor(Math.random() * this._itemList.item.length);

        // return this._itemList.item[itemKind];

        switch (itemKind) {
            case 0:
                this._status.hp = 1.5;

                return { map: 'item', name: this._itemList.item[itemKind], hp: this._status.hp };
            case 1:
                this._status.atk = Math.floor(Math.random() * 10 + 1);

                return { map: 'item', name: this._itemList.item[itemKind], atk: this._status.atk };
            default:
                return;
        }
    }
}
