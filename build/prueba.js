//Boolean variable
let isValid = true;
//Number varibale
//Is not like in java 8, the "int" is now "number"
let numero = 5;
//string variable
let nombre = 'Ander';
let apellido = 'Arruza';
//Concat an Array
let nombre_apellido = `${nombre} ${apellido}`;
//Is not like in java 8, the System.out.println() is now console.log(variable)
console.log(nombre_apellido);
//Normal Array of String
let nombres = ['Ander', 'Gonzalo'];
//Print the second name
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
//In TypeScript there is a variable that has no type and it's called unknown
let sinTipo = 'Hola';
//This this of variable is usefull when you get information from a web-page
//When you dont know what type are you going to recive
sinTipo = 1;
sinTipo = true;
let nuevaCadena = 'Esto es una cadena';
//You can't simply set an unknown variable to a non-unkown variable
//nuevaCadena = sinTipo;
//Variable any
let tipoIndefinido = 'Hey';
//any type variablets let you setting any type of varibale to them
nuevaCadena = tipoIndefinido;
//Functions
function logger() {
    console.log('Logger');
}
