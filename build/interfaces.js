function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({ nombre: 'Ander', apellido: 'Arruza', edad: 20 });
//Al tener un atributo opcional, hay que controlar si tiene ese atributo, o no.
function mostrarCoche(cCoche) {
    //Estos atributos son obligatorios por lo que siempre los sacaremos por pantalla
    console.log(`marca: ${cCoche.marca} modelo: ${cCoche.modelo}`);
    //cCoche.color devuelve true si el objeto coche tiene el atributo color
    if (cCoche.color) {
        console.log(`color: ${cCoche.color}`);
    }
}
mostrarCoche({ marca: 'Renault', modelo: 'Twingo' });
mostrarCoche({ marca: 'Fiat', modelo: '500', color: 'Rojo' });
let p1 = { x: 10, y: 50 };
const miBusqueda = (v, b) => {
    const result = v.search(b);
    return result > 1;
};
class Adulto {
    constructor(pNombre, pEdad, pCoche) {
        this.nombre = pNombre;
        this.edad = this.edad;
        this.tieneCoche = pCoche;
    }
}
