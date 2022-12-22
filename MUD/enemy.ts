import { Status } from './interface';

export class Enemy {
    max: number;
    min: number;
    constructor(private status: Status, max: number, min: number) {
        this.max = max;
        this.min = min;
    }

    randomEnemy() {
        const level = Math.ceil(Math.random() * (this.max - this.min) + this.min);

        this.status.hp = level * 30;
        this.status.atk = level * 5;

        return {};
    }
}
