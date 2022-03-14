export class Persona{
    nombre: string;
    apellidos: string;
    edad: number;
    activo: boolean;

    constructor(nombre: string,apellidos: string,edad: number, activo: boolean){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.activo = activo;
    }
}