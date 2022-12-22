import { PlayerClassList } from 'MUD/data';

export class PlayerClass {
    constructor(private _playerClass: PlayerClassList) {}

    selectClass(classId: number) {
        if (this._playerClass.playerClass[classId]) {
            return { player: this._playerClass.playerClass[classId], level: 1 };
        }
    }
}
