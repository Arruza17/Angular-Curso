const sumar  = function (a: number, b: number):number {
    return a+b;
}
//Parametros opcionales
function nombreCompleto(nombre: string,apellido?: string): string{
    return (apellido)?nombre+' '+apellido:nombre;

}
console.log(nombreCompleto('Ander','Arruza'));
//Parametros REST (infinitos)
//para poder decirle que puedes poner todos los valores que quieras hay que utilizar el
//operador expread (los 3 puntos)
function nombreCompleto2(nombre: string, ...restoNombre: string[]): string{
    return nombre + ' ' + restoNombre.join(' ');
}
console.log(nombreCompleto2('Ander','Arruza','Fuertes'));