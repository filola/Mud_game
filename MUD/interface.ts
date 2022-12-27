export class Status {
    hp: number;
    atk: number;
    exp: number;
}

export class PlayerStatus {
    hp: number;
    totalHp: number;
    atk: number;
    exp: number;
    constructor() {
        this.hp = 100;
        this.totalHp = 100;
        this.atk = 10;
        this.exp = 0;
    }
}
