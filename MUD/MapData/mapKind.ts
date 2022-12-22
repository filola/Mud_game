import { Enemy } from './enemy';
import { Item } from './item';
import { NPC } from './NPC';

export class MapKind {
    constructor(private enemy: Enemy, private npc: NPC, private item: Item) {}

    randomRoom() {
        const num = Math.floor(Math.random() * 3);

        switch (num) {
            case 0:
                return this.enemy.randomEnemy();
            case 1:
                return this.npc.randomNpc();
            case 2:
                return this.item.randomItem();
            default:
                return;
        }
    }
}
