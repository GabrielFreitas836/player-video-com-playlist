/**
 *  programa: player.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo classe responsável pelo controle da reprodução do vídeo
 */
import { Playlist } from "./playlist";
export class Player extends Playlist {
    state = 'stopped';
    shuffle = false;
    loop = false;
    shuffleOrder = [];
    shuffleIndex = 0;
    history = [];
    constructor(videos, currentIndex = 0) {
        super(videos, currentIndex);
    }
    logHistory(video) {
        this.history.push(video.titulo);
    }
    play() {
        const current = this.getCurrentVideo();
        if (current) {
            current.play();
            this.state = 'playing';
            this.logHistory(current);
        }
    }
    pause() {
        console.log("Pausando player...");
        this.state = 'paused';
    }
    stop() {
        console.log("Parando player...");
        this.state = 'stopped';
    }
    getCurrentVideo() {
        if (this.shuffle) {
            const index = this.shuffleOrder[this.shuffleIndex];
            return this["videos"][index];
        }
        return this["videos"][this["currentIndex"]];
    }
    next() {
        if (this.shuffle) {
            this.shuffleIndex++;
            if (this.shuffleIndex >= this.shuffleOrder.length) {
                if (this.loop) {
                    this.shuffleOrder = this.shuffleOrder.sort(() => Math.random() - 0.5);
                    this.shuffleIndex = 0;
                }
                else {
                    console.log("Fim da playlist (shuffle).");
                    return;
                }
            }
        }
        else {
            this["currentIndex"]++;
            if (this["currentIndex"] >= this["videos"].length) {
                if (this.loop) {
                    this["currentIndex"] = 0;
                }
                else {
                    console.log("Fim da playlist.");
                    return;
                }
            }
        }
        this.play();
    }
    previous() {
        if (this.shuffle) {
            this.shuffleIndex--;
            if (this.shuffleIndex < 0) {
                if (this.loop) {
                    this.shuffleIndex = this.shuffleOrder.length - 1;
                }
                else {
                    console.log("Não há vídeo anterior (shuffle).");
                    return;
                }
            }
        }
        else {
            this["currentIndex"]--;
            if (this["currentIndex"] < 0) {
                if (this.loop) {
                    this["currentIndex"] = this["videos"].length - 1;
                }
                else {
                    console.log("Não há vídeo anterior.");
                    return;
                }
            }
        }
        this.play();
    }
    setLoop(on) {
        this.loop = on;
        console.log(`Loop ${on ? "ativado" : "desativado"}`);
    }
    setShuffle(on) {
        this.shuffle = on;
        if (on) {
            this.shuffleOrder = this["videos"].map((_, i) => i).sort(() => Math.random() - 0.5);
            this.shuffleIndex = 0;
            console.log("Shuffle ativado.");
        }
        else {
            console.log("Shuffle desativado.");
        }
    }
    getHistory() {
        return [...this.history];
    }
}
//# sourceMappingURL=player.js.map