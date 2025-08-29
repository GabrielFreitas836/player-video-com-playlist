/**
 *  programa: advideo.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo subclasse livestream
 */
import { Video } from "./video";
export class LiveStream extends Video {
    concurrentViewers;
    isLive = true;
    constructor(id, titulo, autor, views, concurrentViewers) {
        super(id, titulo, 0, autor, views); // live não tem duração fixa
        this.concurrentViewers = concurrentViewers;
    }
    play() {
        console.log(`Transmitindo ao vivo: ${this.titulo} para ${this.concurrentViewers} espectadores.`);
    }
    pause() {
        console.log("Live não pode ser pausada.");
    }
    stop() {
        console.log("Live encerrada.");
        this.isLive = false;
    }
    info() {
        return `LiveStream: ${this.titulo} | Viewers: ${this.concurrentViewers}`;
    }
}
//# sourceMappingURL=livestream.js.map