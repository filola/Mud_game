import { mapData } from './data';
import { MapKind } from './mapKind';

export class MapMaker {
    constructor(private _mapKind: MapKind, private _data: mapData) {}

    async makeMap(leng: number) {
        const startValue = this.startPoint(leng);

        for (let x: number; x < leng; x++) {
            for (let y: number; y < leng; y++) {
                if (x == startValue && y == startValue) {
                    continue;
                } else {
                    this._data.map[x][y].push(this._mapKind.randomRoom());
                }
            }
        }
    }

    startPoint(leng: number) {
        if (leng % 2 == 1) {
            return (leng - 1) / 2;
        } else {
            return leng / 2;
        }
    }
}
