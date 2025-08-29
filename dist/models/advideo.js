/**
 *  programa: advideo.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo subclasse advideo
 */
import { Video } from "./video";
export class AdVideo extends Video {
    anunciante;
    skippableAfterSeconds;
    constructor(id, titulo, duracaoEmSegundos, autor, views, anunciante, skippableAfterSeconds) {
        super(id, titulo, duracaoEmSegundos, autor, views);
        this.anunciante = anunciante;
        this.skippableAfterSeconds = skippableAfterSeconds;
    }
    play() {
        console.log(`Anúncio de ${this.anunciante}... Pode pular após ${this.skippableAfterSeconds}s.`);
    }
    pause() {
        console.log("Anúncio pausado.");
    }
    stop() {
        console.log("Anúncio encerrado.");
    }
    info() {
        return `AdVideo: ${this.titulo} | Anunciante: ${this.anunciante}`;
    }
}
//# sourceMappingURL=advideo.js.map