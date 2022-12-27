import { MapData, NowLocation } from '../data';
import { MapKind } from './mapKind';

export class MapMaker {
    constructor(private _mapKind: MapKind, private _data: MapData, private _nowLocation: NowLocation) {}

    async makeMap(leng: number) {
        const startValue = await this.startPoint(leng);

        this._nowLocation.nowX = startValue;
        this._nowLocation.nowY = startValue;

        for (let x = 0; x < leng; x++) {
            this._data.map.push([]);
        }

        for (let x = 0; x < leng; x++) {
            for (let y = 0; y < leng; y++) {
                if (x == startValue && y == startValue) {
                    this._data.map[x][y] = { map: '광장' };
                } else {
                    this._data.map[x][y] = this._mapKind.randomRoom();
                    // console.log(this._data.map[x][y]);
                }
            }
        }
    }

    async startPoint(leng: number) {
        if (leng % 2 == 1) {
            return (leng - 1) / 2;
        } else {
            return leng / 2;
        }
    }
}
