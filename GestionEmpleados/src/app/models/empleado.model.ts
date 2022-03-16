export class Empleado {
    nombre: string;
    apellidos: string;
    email: string;
    edad: number;
    departamento: string;
    password: string;
    imagen: string;

    constructor(nombre: string, apellidos: string, email: string,
    edad: number, departamento: string, password: string, imagen: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.edad = edad;
        this.departamento = departamento;
        this.password = password;
        this.imagen = imagen;
    }


}