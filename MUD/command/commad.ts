import { MapData, NowLocation } from 'MUD/data';
import { Enemy } from 'MUD/MapData/enemy';
import { Item } from 'MUD/MapData/item';
import { NPC } from 'MUD/MapData/NPC';
import { Interaction } from './Interaction';

export class Command {
    constructor(private _mapData: MapData, private _nowLocation: NowLocation, private _interaction: Interaction) {}

    async showMap() {
        const nowX = this._nowLocation.nowX;
        const nowY = this._nowLocation.nowY;

        for (let mapX = 0; mapX < this._mapData.map.length; mapX++) {
            for (let mapY = 0; mapY < this._mapData.map[mapX].length; mapY++) {
                if (
                    (mapX == nowX - 1 && mapY == nowY) ||
                    (mapX == nowX + 1 && mapY == nowY) ||
                    (mapX == nowX && mapY == nowY - 1) ||
                    (mapX == nowX && mapY == nowY + 1)
                ) {
                    process.stdout.write(this._mapData.map[mapX][mapY].map + '\t');
                } else if (mapX == nowX && mapY == nowY) {
                    process.stdout.write('Here!\t');
                } else {
                    process.stdout.write('X\t');
                }
            }
            console.log('\n');
        }
        return;
    }

    meetSomthing(data) {
        const map = data.map;

        this.showMap();

        switch (map) {
            case 'item':
                return this._interaction.meetItem();
            case 'NPC':
                return this._interaction.meetNpc();
            case 'enemy':
                return this._interaction.meetEnemy();
        }
    }
}
