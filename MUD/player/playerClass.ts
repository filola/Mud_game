import { PlayerClassList } from 'MUD/data';

export class PlayerClass {
    constructor(private _playerClassList: PlayerClassList) {}

    selectClass(classId: string) {
        console.log(classId);
        if (this._playerClassList.playerClass[classId]) {
            return this._playerClassList.playerClass[classId];
        }
    }
}
