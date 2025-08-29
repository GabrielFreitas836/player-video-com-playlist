/**
 *  programa: advideo.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo subclasse advideo
 */

import { Video } from "./video";

export class AdVideo extends Video {
    constructor(
        id: number,
        titulo: string,
        duracaoEmSegundos: number,
        autor: string,
        views: number,
        public anunciante: string,
        public skippableAfterSeconds: number
    ) {
        super(id, titulo, duracaoEmSegundos, autor, views);
    }

    play(): void {
        console.log(`Anúncio de ${this.anunciante}... Pode pular após ${this.skippableAfterSeconds}s.`);
    }

    pause(): void {
        console.log("Anúncio pausado.");
    }

    stop(): void {
        console.log("Anúncio encerrado.");
    }

    info(): string {
        return `AdVideo: ${this.titulo} | Anunciante: ${this.anunciante}`;
    }
}
