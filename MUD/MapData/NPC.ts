import { NPCList } from '../data';
import { Status } from '../interface';

export class NPC {
    constructor(private _status: Status, private _npcList: NPCList) {}

    randomNpc() {
        const npcKind = Math.floor(Math.random() * this._npcList.npc.length);

        switch (npcKind) {
            case 0:
                this._status.exp = 1.5;

                return { map: 'NPC', name: this._npcList.npc[npcKind], exp: this._status.exp };
            case 1:
                this._status.atk = Math.floor(Math.random() * 10);

                return { map: 'NPC', name: this._npcList.npc[npcKind], atk: this._status.atk };
            case 2:
                this._status.hp = 1.5;

                return { map: 'NPC', name: this._npcList.npc[npcKind], hp: this._status.hp };
            default:
                return;
        }
    }
}
