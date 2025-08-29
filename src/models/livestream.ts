/**
 *  programa: advideo.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo subclasse livestream
 */

import { Video } from "./video";

export class LiveStream extends Video {
    public isLive: boolean = true;

    constructor(
        id: number,
        titulo: string,
        autor: string,
        views: number,
        public concurrentViewers: number
    ) {
        super(id, titulo, 0, autor, views); // live não tem duração fixa
    }

    play(): void {
        console.log(`Transmitindo ao vivo: ${this.titulo} para ${this.concurrentViewers} espectadores.`);
    }

    pause(): void {
        console.log("Live não pode ser pausada.");
    }

    stop(): void {
        console.log("Live encerrada.");
        this.isLive = false;
    }

    info(): string {
        return `LiveStream: ${this.titulo} | Viewers: ${this.concurrentViewers}`;
    }
}
