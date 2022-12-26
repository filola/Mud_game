import { PlayerStatus } from './interface';

export class MapData {
    map = [];
}

export class EnemyList {
    enemy = [];
}

export class ItemList {
    item = ['회복약', '공격력 증가'];
}

export class NPCList {
    npc = ['노인', '사냥꾼', '약초꾼'];
}

export class PlayerClassList {
    constructor(private _playerStatus: PlayerStatus) {}

    playerClass = [{ class: '전사', level: 1, status: this._playerStatus }];
}
