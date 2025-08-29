/**
 *  programa: main.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo em que será instanciado as classes
 */

import { AdVideo } from "./advideo";
import { LiveStream } from "./livestream";
import { Player } from "./player";
import { Video } from "./video";

class NormalVideo extends Video {
    play(): void { console.log(`Tocando vídeo normal: ${this.titulo}`); }
    pause(): void { console.log("Vídeo normal pausado."); }
    stop(): void { console.log("Vídeo normal parado."); }
    info(): string { return `Normal: ${this.titulo}`; }
}

const v1 = new AdVideo(1, "Comercial 1", 30, "Empresa X", 100, "Nike", 5);
const v2 = new NormalVideo(2, "Tutorial TypeScript", 600, "Gabriel", 5000);
const v3 = new LiveStream(3, "Live Coding", "StreamerZ", 2000, 150);

const player = new Player([v1, v2, v3]);

console.log("=== Demonstração Polimorfismo ===");
[v1, v2, v3].forEach(v => {
    console.log(v.info());
    v.play();
});

console.log("\n=== Player Teste ===");
player.play();      // toca o primeiro (anúncio)
player.next();      // toca o próximo
player.next();      // toca a live
player.setShuffle(true);
player.setLoop(true);
player.next();      // embaralhado com loop
player.previous();

// Histórico
console.log("\nHistórico de reprodução:", player.getHistory());
