/**
 *  programa: player.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo classe responsável pelo controle da reprodução do vídeo
 */
import { Playlist } from "./playlist";
import type { Video } from "./video";
export declare class Player extends Playlist {
    private state;
    private shuffle;
    private loop;
    private shuffleOrder;
    private shuffleIndex;
    private history;
    constructor(videos: Video[], currentIndex?: number);
    private logHistory;
    play(): void;
    pause(): void;
    stop(): void;
    private getCurrentVideo;
    next(): void;
    previous(): void;
    setLoop(on: boolean): void;
    setShuffle(on: boolean): void;
    getHistory(): string[];
}
//# sourceMappingURL=player.d.ts.map