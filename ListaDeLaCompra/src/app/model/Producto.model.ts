import { Departamento } from "./Departamento.enum";

export class Producto{

    nombre: string;
    cantidad: number;
    departamento: Departamento;
    comprado: boolean;

    constructor(nombre: string, cantidad: number, departamento: Departamento){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.departamento = departamento;
        this.comprado = false;

    }
}