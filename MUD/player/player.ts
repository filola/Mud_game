import { PlayerStatus } from 'MUD/interface';

export class Player {
    constructor(private _playerStatus: PlayerStatus) {}

    player: { class: string; level: number; status: PlayerStatus };
}
