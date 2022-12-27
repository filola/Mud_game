import { EnemyList, ItemList, MapData, NowLocation, NPCList, PlayerClassList } from './data';
import { Enemy } from './MapData/enemy';
import { PlayerStatus, Status } from './interface';
import { Item } from './MapData/item';
import { MapMaker } from './MapData/map';
import { MapKind } from './MapData/mapKind';
import { NPC } from './MapData/NPC';
import { GameInput } from './command/input';
import { PlayerClass } from './player/playerClass';
import { Command } from './command/commad';
import { Interaction } from './command/Interaction';

const status = new Status();
const nowLocation = new NowLocation();

// 적, 아이템, NPC 리스트
const npcList = new NPCList();
const enemyList = new EnemyList();
const itemList = new ItemList();

// 적,아이템, NPC 랜덤
const item = new Item(status, itemList);
const npc = new NPC(status, npcList);
const enemy = new Enemy(status, 10, 1, enemyList);

// Map 생성
const mapData = new MapData();
const mapKind = new MapKind(enemy, npc, item);
const map = new MapMaker(mapKind, mapData, nowLocation);

// Player 생성
const playerStatus = new PlayerStatus();
const playerClassList = new PlayerClassList(playerStatus);
const playerClass = new PlayerClass(playerClassList);

const interaction = new Interaction();
const command = new Command(mapData, nowLocation, interaction);
const gamestart = new GameInput(playerClassList, playerClass, nowLocation, command, mapData);

map.makeMap(21);

gamestart.startGame();
