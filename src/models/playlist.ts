/**
 *  programa: playlist.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo classe responsável pela criação da estrutura das playlists e seu funcionamento
 */

import { Video } from "./video";

export class Playlist{
    constructor(
        private videos: Video[],
        private currentIndex: number

    ){}

    play(): void {
        console.log("Tocando vídeo...");
    }

    pause(): void {
        console.log("Pausando vídeo...");
    }

    stop(): void {
        console.log("Parando vídeo...");
    }

    info(): string {
        let info: string = 'Info';
        console.log("Informações do vídeo");
        return info;
    }

    add(video: Video): void{
        this.videos.push(video);
        
    }

    remove(id: number): void{
        this.videos.splice(id);
    }

    getCurrent(): void{
        let currentVideo = this.videos[0];
        console.log(`Vídeo atual: ${currentVideo}`);
    }

    hasNext(): void{
        let nextVideo = this.videos[1];
        console.log(`Próximo vídeo: ${nextVideo}`);
    }

    hasPrevious(): void{
        let prevoiusVideo = this.videos[-1];
        console.log(`Vídeo anterior: ${prevoiusVideo}`);
    }
}