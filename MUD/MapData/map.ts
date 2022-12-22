import { MapData } from '../data';
import { MapKind } from './mapKind';

export class MapMaker {
    constructor(private _mapKind: MapKind, private _data: MapData) {}

    async makeMap(leng: number) {
        const startValue = this.startPoint(leng);
        console.log(leng);

        for (let x = 0; x < leng; x++) {
            this._data.map.push([]);
        }

        for (let x = 0; x < leng; x++) {
            for (let y = 0; y < leng; y++) {
                if (x == startValue && y == startValue) {
                    this._data.map[x][y] = { map: '광장' };
                } else {
                    // console.log(this._mapKind.randomRoom());

                    this._data.map[x][y] = this._mapKind.randomRoom();
                    // console.log(this._data.map[x][y]);
                }
            }
        }
        console.log(this._data.map);
    }

    startPoint(leng: number) {
        if (leng % 2 == 1) {
            return (leng - 1) / 2;
        } else {
            return leng / 2;
        }
    }
}
