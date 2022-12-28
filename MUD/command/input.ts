import { MapData, NowLocation, PlayerClassList } from 'MUD/data';

import { PlayerClass } from 'MUD/player/playerClass';
import * as readline from 'readline';
import * as util from 'util';
import { Command } from './commad';
import { Interaction } from './Interaction';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export class GameInput {
    constructor(
        private _playerClassList: PlayerClassList,
        private _playerClass: PlayerClass,
        private _nowLocation: NowLocation,
        private _command: Command,
        private _mapData: MapData,
        private _interaction: Interaction,
    ) {}

    startGame() {
        console.log('=====================머드 게임======================\n');
        console.log('직업 목록 : ' + util.inspect(this._playerClassList.playerClass, false, null));

        // console.log(this._playerClass);

        rl.question('\n직업을 선택해주세요 : ', async answer => {
            await this._playerClass.selectClass(answer);

            await this._command.showMap();

            await this.inputWay();
        });
    }

    async inputWay() {
        rl.question('어디로 이동하시겠습니까? ', description => {
            return this.selectDirection(description);
        });
    }

    selectDirection(inputData: string) {
        let here;

        switch (inputData) {
            case '북':
                this._nowLocation.nowX -= 1;

                here = this._mapData.map[this._nowLocation.nowX][this._nowLocation.nowY];

                return this.meetSomthing(here);
            case '남':
                this._nowLocation.nowX += 1;

                here = this._mapData.map[this._nowLocation.nowX][this._nowLocation.nowY];

                return this.meetSomthing(here);
            case '서':
                this._nowLocation.nowY -= 1;

                here = this._mapData.map[this._nowLocation.nowX][this._nowLocation.nowY];

                return this.meetSomthing(here);
            case '동':
                this._nowLocation.nowY += 1;

                here = this._mapData.map[this._nowLocation.nowX][this._nowLocation.nowY];

                return this.meetSomthing(here);
        }
    }

    async meetSomthing(data) {
        const map = data.map;

        await this._command.showMap();

        switch (map) {
            case 'item':
                await this._interaction.getItem(data);

                return this.inputWay();
            case 'NPC':
                await this._interaction.helpNPC(data);

                return this.inputWay();
            case 'enemy':
                await this.inputEnemyAction(data);
            default:
                return this.inputWay();
        }
    }

    async inputEnemyAction(data) {
        console.log('적 등장\n');
        console.log('1. 공격');
        console.log('2. 도망');
        rl.question('\n어떤 행동을 하시겠습니까?', select => {
            switch (select) {
                case '1':
                    this._interaction.fightEnemy(data);
                case '2':
                    this._interaction.runEnemy();
            }
        });
    }
}
