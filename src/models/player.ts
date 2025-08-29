/**
 *  programa: player.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo classe responsável pelo controle da reprodução do vídeo
 */

import { Playlist } from "./playlist";
import type { Video } from "./video";

export class Player extends Playlist {
    private state: 'stopped' | 'playing' | 'paused' = 'stopped';
    private shuffle: boolean = false;
    private loop: boolean = false;
    private shuffleOrder: number[] = [];
    private shuffleIndex: number = 0;
    private history: string[] = [];

    constructor(videos: Video[], currentIndex: number = 0) {
        super(videos, currentIndex);
    }

    private logHistory(video: Video): void {
        this.history.push(video.titulo);
    }

    play(): void {
        const current = this.getCurrentVideo();
        if (current) {
            current.play();
            this.state = 'playing';
            this.logHistory(current);
        }
    }

    pause(): void {
        console.log("Pausando player...");
        this.state = 'paused';
    }

    stop(): void {
        console.log("Parando player...");
        this.state = 'stopped';
    }

    private getCurrentVideo(): Video | null {
        if (this.shuffle) {
            const index = this.shuffleOrder[this.shuffleIndex];
            return this["videos"][index];
        }
        return this["videos"][this["currentIndex"]];
    }

    next(): void {
        if (this.shuffle) {
            this.shuffleIndex++;
            if (this.shuffleIndex >= this.shuffleOrder.length) {
                if (this.loop) {
                    this.shuffleOrder = this.shuffleOrder.sort(() => Math.random() - 0.5);
                    this.shuffleIndex = 0;
                } else {
                    console.log("Fim da playlist (shuffle).");
                    return;
                }
            }
        } else {
            this["currentIndex"]++;
            if (this["currentIndex"] >= this["videos"].length) {
                if (this.loop) {
                    this["currentIndex"] = 0;
                } else {
                    console.log("Fim da playlist.");
                    return;
                }
            }
        }
        this.play();
    }

    previous(): void {
        if (this.shuffle) {
            this.shuffleIndex--;
            if (this.shuffleIndex < 0) {
                if (this.loop) {
                    this.shuffleIndex = this.shuffleOrder.length - 1;
                } else {
                    console.log("Não há vídeo anterior (shuffle).");
                    return;
                }
            }
        } else {
            this["currentIndex"]--;
            if (this["currentIndex"] < 0) {
                if (this.loop) {
                    this["currentIndex"] = this["videos"].length - 1;
                } else {
                    console.log("Não há vídeo anterior.");
                    return;
                }
            }
        }
        this.play();
    }

    setLoop(on: boolean): void {
        this.loop = on;
        console.log(`Loop ${on ? "ativado" : "desativado"}`);
    }

    setShuffle(on: boolean): void {
        this.shuffle = on;
        if (on) {
            this.shuffleOrder = this["videos"].map((_, i) => i).sort(() => Math.random() - 0.5);
            this.shuffleIndex = 0;
            console.log("Shuffle ativado.");
        } else {
            console.log("Shuffle desativado.");
        }
    }

    getHistory(): string[] {
        return [...this.history];
    }
}
