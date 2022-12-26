import { EnemyList, ItemList, MapData, NPCList, PlayerClassList } from './data';
import { Enemy } from './MapData/enemy';
import { PlayerStatus, Status } from './interface';
import { Item } from './MapData/item';
import { MapMaker } from './MapData/map';
import { MapKind } from './MapData/mapKind';
import { NPC } from './MapData/NPC';
import { GameInput } from './command/input';
import { PlayerClass } from './player/playerClass';

const status = new Status();

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
const map = new MapMaker(mapKind, mapData);

// Player 생성
const playerStatus = new PlayerStatus();
const playerClassList = new PlayerClassList(playerStatus);
const playerClass = new PlayerClass(playerClassList);
const gamestart = new GameInput(playerClassList, playerClass);

map.makeMap(3);

gamestart.startGame();
