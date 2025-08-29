/**
 *  programa: video.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo classe abstrata responsável pela modelagem das informações do vídeo e suas funções
 * e as interfaces do vídeo
 */
export declare abstract class Video {
    id: number;
    titulo: string;
    private duracaoEmSegundos;
    autor: string;
    views: number;
    constructor(id: number, titulo: string, duracaoEmSegundos: number, autor: string, views: number);
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
    abstract info(): string;
}
export interface Playable extends Video {
    play(): void;
    pause(): void;
    stop(): void;
}
export interface Describable extends Video {
    info(): string;
}
//# sourceMappingURL=video.d.ts.map