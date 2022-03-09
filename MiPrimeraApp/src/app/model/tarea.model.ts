export class Tarea{
    titulo: string;
    descripcion: string;
    finalizada: boolean;

    constructor(titulo:string,descripcion:string,finalizada:boolean){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.finalizada = finalizada;
    }
}