/**
 *  programa: advideo.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo subclasse advideo
 */
import { Video } from "./video";
export declare class AdVideo extends Video {
    anunciante: string;
    skippableAfterSeconds: number;
    constructor(id: number, titulo: string, duracaoEmSegundos: number, autor: string, views: number, anunciante: string, skippableAfterSeconds: number);
    play(): void;
    pause(): void;
    stop(): void;
    info(): string;
}
//# sourceMappingURL=advideo.d.ts.map