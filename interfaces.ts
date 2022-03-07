interface Persona{

    nombre: string;
    apellido: string;
    edad: number;
}
function mostrarPersona(pPersona: Persona){
    console.log(pPersona);
}
mostrarPersona({nombre: 'Ander',apellido: 'Arruza',edad:20});

//Propiedades opcionales
interface Coche{

    marca: string;
    modelo: string;
    color?: string;
}
//Al tener un atributo opcional, hay que controlar si tiene ese atributo, o no.
function mostrarCoche(cCoche: Coche){
    //Estos atributos son obligatorios por lo que siempre los sacaremos por pantalla
    console.log(`marca: ${cCoche.marca} modelo: ${cCoche.modelo}`);
    //cCoche.color devuelve true si el objeto coche tiene el atributo color
    if(cCoche.color){
        console.log(`color: ${cCoche.color}`)
    }
}
mostrarCoche({marca: 'Renault',modelo: 'Twingo'});
mostrarCoche({marca: 'Fiat',modelo: '500', color: 'Rojo'});

//Propiedades de solo lectura
interface Coordenadas{

    readonly x: number;
    readonly y: number;
}
let p1: Coordenadas = {x: 10,y: 50};
//Ya no se puede modificar el valor de x o de y
//p1.x = 20

//!!!!!!!! IMPORTANTE
//Definir una funcion dentro de una interface, para que, más adelante, todas las clases
//que implementen esa interface tengan que tener si o si esa función
interface Busqueda{
    (valor: string, buscar: string): boolean;
}
const miBusqueda: Busqueda = (v: string, b:string): boolean => {

    const result = v.search(b);
    return result > 1;

}
//Implementar una interfaz en una clase
interface Humano{
    nombre:string;
    edad: number;
}
class Adulto implements Humano{
    nombre: string;
    edad: number;
    tieneCoche: boolean;

    constructor(pNombre: string, pEdad: number, pCoche: boolean){
        this.nombre = pNombre;
        this.edad = this.edad;
        this.tieneCoche = pCoche;
    }
}