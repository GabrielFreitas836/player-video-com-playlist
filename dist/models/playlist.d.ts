/**
 *  programa: playlist.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo classe responsável pela criação da estrutura das playlists e seu funcionamento
 */
import { Video } from "./video";
export declare class Playlist {
    private videos;
    private currentIndex;
    constructor(videos: Video[], currentIndex: number);
    play(): void;
    pause(): void;
    stop(): void;
    info(): string;
    add(video: Video): void;
    remove(id: number): void;
    getCurrent(): void;
    hasNext(): void;
    hasPrevious(): void;
}
//# sourceMappingURL=playlist.d.ts.map