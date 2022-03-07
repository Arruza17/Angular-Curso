//Boolean variable
let isValid: boolean = true;

//Number varibale
//Is not like in java 8, the "int" is now "number"
let numero: number = 5;

//string variable
let nombre: string = 'Ander';
let apellido: string = 'Arruza';

//Concat an Array
let nombre_apellido: string = `${nombre} ${apellido}`;
//Is not like in java 8, the System.out.println() is now console.log(variable)
console.log(nombre_apellido);

//Normal Array of String
let nombres: string[] = ['Ander','Gonzalo'];
//Print the second name
console.log(nombres[1])

//2 Dimensional Arrays (in spanish Tuplas)
let sitio: [string,number] = ['Erandio',1672]

//Enumerations
enum Estado{
    Offline,Indefinido,Online
}
//Variable that contains an Enumeration
let stat: Estado = Estado.Online;

//In TypeScript there is a variable that has no type and it's called unknown
let sinTipo: unknown = 'Hola';
//This this of variable is usefull when you get information from a web-page
//When you dont know what type are you going to recive
sinTipo = 1;
sinTipo = true;

let nuevaCadena: string = 'Esto es una cadena';
//You can't simply set an unknown variable to a non-unkown variable
//nuevaCadena = sinTipo;

//Variable any
let tipoIndefinido: any = 'Hey';
//any type variablets let you setting any type of varibale to them
nuevaCadena = tipoIndefinido;

//Functions
function logger(): void{
    console.log('Logger');

}