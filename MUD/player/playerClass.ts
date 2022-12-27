import { PlayerClassList } from 'MUD/data';
import { Player } from './player';

export class PlayerClass {
    constructor(private _playerClassList: PlayerClassList, private _player: Player) {}

    selectClass(classId: string) {
        console.log(classId);

        for (const playerclass of this._playerClassList.playerClass) {
            if (playerclass.class == classId) {
                this._player.player = playerclass;
                break;
            }
        }

        return;
    }
}
