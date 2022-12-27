import { MapData, NowLocation, PlayerClassList } from 'MUD/data';
import { MapMaker } from 'MUD/MapData/map';
import { PlayerClass } from 'MUD/player/playerClass';
import * as readline from 'readline';
import * as util from 'util';
import { Command } from './commad';

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
        switch (inputData) {
            case '북':
                this._nowLocation.nowX -= 1;

                const here = this._mapData.map[this._nowLocation.nowX][this._nowLocation.nowY];

                return this._command.meetSomthing(here);
            case '남':
                this._nowLocation.nowX += 1;

                this._mapData.map[this._nowLocation.nowX][this._nowLocation.nowY];

                return this._command.showMap();
            case '서':
                this._nowLocation.nowY -= 1;

                this._mapData.map[this._nowLocation.nowX][this._nowLocation.nowY];

                return this._command.showMap();
            case '동':
                this._nowLocation.nowY += 1;

                this._mapData.map[this._nowLocation.nowX][this._nowLocation.nowY];

                return this._command.showMap();
        }
    }
}
