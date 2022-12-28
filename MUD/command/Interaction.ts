import { NowLocation } from 'MUD/data';
import { Player } from 'MUD/player/player';

export class Interaction {
    constructor(private _player: Player, private _nowLocation: NowLocation) {}

    fightEnemy(data) {
        console.log('플레이어 hp : ' + this._player.player.status.hp);
        console.log('플레이어 atk : ' + this._player.player.status.atk);
        console.log('플레이어 exp : ' + this._player.player.status.exp);

        console.log(data);

        data.status.hp - this._player.player.status.atk;
        this._player.player.status.hp - data.status.atk;

        if (data.status.hp == 0) {
            this._player.player.status.exp += data.level * 10;
            if (this._player.player.status.exp >= 100) {
                this._player.player.status.exp -= 100;
                this.levelUp();
            }
        }
        // this._nowLocation.nowX =
        // this._nowLocation.nowY =
    }

    runEnemy() {
        return;
    }
    // meetEnemy(data) {
    //     console.log(data);
    // }
    // meetItem(data) {
    //     console.log(data);
    // }
    // meetNpc(data) {
    //     console.log(data);
    // }

    levelUp() {
        this._player.player.status.atk += 20;
        this._player.player.status.hp += 50;
        this._player.player.level += 1;
    }

    async getItem(data) {
        console.log(data);
        if (data.hp) {
            this._player.player.status.hp *= data.hp;
            if (this._player.player.status.hp > this._player.player.status.totalHp) {
                this._player.player.status.hp = this._player.player.status.totalHp;
            }
        }
        if (data.atk) {
            this._player.player.status.atk += data.atk;
        }
    }

    async helpNPC(data) {
        console.log(data);
        if (data.exp) {
            this._player.player.status.exp *= data.exp;
        }
        if (data.hp) {
            this._player.player.status.hp *= data.hp;
            if (this._player.player.status.hp > this._player.player.status.totalHp) {
                this._player.player.status.hp = this._player.player.status.totalHp;
            }
        }
        if (data.atk) {
            this._player.player.status.atk += data.atk;
        }
    }
}
