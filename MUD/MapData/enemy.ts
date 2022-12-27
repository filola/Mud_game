import { EnemyList } from '../data';
import { Status } from '../interface';

export class Enemy {
    max: number;
    min: number;
    constructor(private _status: Status, max: number, min: number, private _enemyList: EnemyList) {
        this.max = max;
        this.min = min;
    }

    randomEnemy() {
        const level = Math.floor(Math.random() * (this.max - this.min) + this.min);

        this._status.hp = level * 30;
        this._status.atk = level * 5;
        this._status.exp = level * 10;

        return { map: 'enemy', name: '도깨비', level: level, status: this._status };
    }

    meetEnemy() {}
}
