import { PlayerClassList } from 'MUD/data';
import { PlayerClass } from 'MUD/player/playerClass';
import * as readline from 'readline';
import * as util from 'util';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export class GameInput {
    constructor(private _playerClassList: PlayerClassList, private _playerClass: PlayerClass) {}

    startGame() {
        console.log('=====================머드 게임======================\n');
        console.log('직업 목록 : ' + util.inspect(this._playerClassList.playerClass, false, null));

        // console.log(this._playerClass);

        rl.question('\n직업을 선택해주세요 : ', async answer => {
            await this._playerClass.selectClass(answer);

            return;
        });
    }
}
