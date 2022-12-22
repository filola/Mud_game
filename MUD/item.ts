import { itemList } from './data';
import { Status } from './interface';

export class Item {
    constructor(private _status: Status, private _itemList: itemList) {}

    randomItem() {
        const itemKind = Math.floor(Math.random() * this._itemList.item.length);

        // return this._itemList.item[itemKind];

        switch (itemKind) {
            case 0:
                this._status.hp = 1.5;

                return { name: this._itemList.item[itemKind] };
            case 1:
                this._status.atk = Math.floor(Math.random() * 10);

                return this._itemList.item[itemKind];
            default:
                return;
        }
    }
}
