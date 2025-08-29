/**
 *  programa: video.ts
 *  autor: Gabriel da Silva Freitas
 *  data: 28/08/2025
 *  descrição: arquivo contendo classe abstrata responsável pela modelagem das informações do vídeo e suas funções
 * e as interfaces do vídeo
 */
export class Video {
    id;
    titulo;
    duracaoEmSegundos;
    autor;
    views;
    constructor(id, titulo, duracaoEmSegundos, autor, views) {
        this.id = id;
        this.titulo = titulo;
        this.duracaoEmSegundos = duracaoEmSegundos;
        this.autor = autor;
        this.views = views;
    }
}
//# sourceMappingURL=video.js.map