//boolean variable
let isValid = true;
//number varibale
//is not like in java 8, the "int" is now "number"
let numero = 5;
//string variable
let nombre = 'Ander';
let apellido = 'Arruza';
//Concat an Array
let nombre_apellido = `${nombre} ${apellido}`;
//is not like in java 8, the System.out.println() is now console.log(variable)
console.log(nombre_apellido);
//Normal Array of String
let nombres = ['Ander', 'Gonzalo'];
console.log(nombres[1]);
//2 Dimensional Arrays (in spanish Tuplas)
let sitio = ['Erandio', 1672];
//Enumerations
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = 0] = "Offline";
    Estado[Estado["Indefinido"] = 1] = "Indefinido";
    Estado[Estado["Online"] = 2] = "Online";
})(Estado || (Estado = {}));
//Variable that contains an Enumeration
let stat = Estado.Online;
