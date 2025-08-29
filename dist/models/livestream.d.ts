/**
 *  programa: advideo.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo subclasse livestream
 */
import { Video } from "./video";
export declare class LiveStream extends Video {
    concurrentViewers: number;
    isLive: boolean;
    constructor(id: number, titulo: string, autor: string, views: number, concurrentViewers: number);
    play(): void;
    pause(): void;
    stop(): void;
    info(): string;
}
//# sourceMappingURL=livestream.d.ts.map