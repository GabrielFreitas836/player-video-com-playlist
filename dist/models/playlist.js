/**
 *  programa: playlist.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo classe responsável pela criação da estrutura das playlists e seu funcionamento
 */
import { Video } from "./video";
export class Playlist {
    videos;
    currentIndex;
    constructor(videos, currentIndex) {
        this.videos = videos;
        this.currentIndex = currentIndex;
    }
    play() {
        console.log("Tocando vídeo...");
    }
    pause() {
        console.log("Pausando vídeo...");
    }
    stop() {
        console.log("Parando vídeo...");
    }
    info() {
        let info = 'Info';
        console.log("Informações do vídeo");
        return info;
    }
    add(video) {
        this.videos.push(video);
    }
    remove(id) {
        this.videos.splice(id);
    }
    getCurrent() {
        let currentVideo = this.videos[0];
        console.log(`Vídeo atual: ${currentVideo}`);
    }
    hasNext() {
        let nextVideo = this.videos[1];
        console.log(`Próximo vídeo: ${nextVideo}`);
    }
    hasPrevious() {
        let prevoiusVideo = this.videos[-1];
        console.log(`Vídeo anterior: ${prevoiusVideo}`);
    }
}
//# sourceMappingURL=playlist.js.map