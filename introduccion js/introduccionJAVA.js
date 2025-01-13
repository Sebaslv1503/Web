var nombre1;
var edad;
var altura;

nombre1 = "Reishel";
edad = 21;
altura = 1.80;

console.log("El nombre de la persona es: " + nombre1);
console.log("La edad de la persona es: " + edad);
console.log("La altura de la persona es: " + altura);

//var par declarar una variable global
//let para delcarar una variable local o tambien una variable bloque
//const declara una variable constante es decir su valor no va a cambiar

//if marca un bloque de instrucciones que se ejecutan si una condicion se cumple
//switch marca un bloque de instrucciones que se ejecuta si una condicion se cumple
//for marca una condicion de instrucciones que se ejecutan varias veces
//while marca una condicion de instrucciones que se ejecutan varias veces
//function marca un bloque de instruucciones que se ejecutan cuando se llama
//try se ejecuta cuando no se produce un error
//catch se ejecuta cuando se produce un error
//return se ejecura cuando una condicion se cumple, ademas de retornar un valor

//TIPOS DE DATOS
//tipo de dato string
var nombre1 = "Reishel";
console.log(nombre1);

//tipo de dato numerico
var edad = 20;
console.log(edad);

//tipo de dato Object object
var objeto = {
    nombre: 'Dayelin', //comillas simples o dobles se puede utilizar 
    edad: 22,
    altura: 1.60
}
console.log(objeto);

//tipo de dato Typeof
var var1 = "Juan";
var var2 = false;
var var3 = BigInt(123);
var var4 = [1, 2, 3];

console.log(var1);
console.log(typeof var1);

console.log(var2);
console.log(typeof var2);

console.log(var3);
console.log(typeof var3);

console.log(var4);
console.log(typeof var4);

//tipo de dato boolean)true, false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//tipo function
function saludar() { }
console.log(saludar);
console.log(typeof saludar);

//tipo symbol
var simbolo = Symbol();
console.log(simbolo);
console.log(typeof simbolo);

//tipo clase es una funcion
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

//tipo undefined
var variable;
console.log(variable);
console.log(typeof variable);

var a;
console.log(a);
console.log(typeof a);

//tipo de dato null
var variable = null;
console.log(variable);
console.log(typeof variable);

//tipo de datos de tipo arreglo en JavaScript
var autos = ["Mercedes Benz", "Volvo", "BMW"];
console.log(autos);
console.log(typeof autos);

//tipo de datos con cadenas vacias
var variable = "";
console.log(variable);
console.log(typeof variable);

//reglas de nombres de variables en JavaScript
let nombreCompleto;
let nombreCompleta;

//formas correctas de declarar una variable
var alNombreCompleto;
var _nombreCompleto;
var $nombreCompleto;

//formas correctas de declarar una variable
//var alNombreCompleto;
//var #nombreCompleto;
//var $nombreCompleto;
//no esta permitido ingresar estos tipos de variable

//operaciones aritmeticas
//suma
/*let x = 10;
let y = 8;
let z = x + y;
console.log(z);

//resta
let x = 10;
let y = 8;
let z = x - y;
console.log(z);


//multiplicacion
let x = 10;
let y = 8;
let z = x * y;
console.log(z);

//division
let x = 10;
let y = 8;
let z = x / y;
console.log(z);


//modulo
let x = 10;
let y = 8;
let z = x % y;
console.log(z);


// pre incremento
let d = 12;
let e = 4;
e = ++d;
console.log(d);
console.log(e);

//post incremento
let d = 12;
let e = 4;
e = d++;
console.log(d);
console.log(e);
*/

//decremento
let d = 12;
let e = 4;
e = d--;
console.log(d);
console.log(e);

//simbolos
var m = 10;
var n = 5;
var o = m == n;
var p = m != n;
var q = m > n;
var r = m < n;
var s = m >= n;
var t = m <= n;

let comparacion1 = 10;
let comparacion2 = "10";

let comparacion3 = comparacion1 == comparacion2;
console.log(comparacion3);

let comparacion4 = comparacion1 === comparacion2;
console.log(comparacion4);

console.log(o);
console.log(p);
console.log(q);
console.log(r);
console.log(s);
console.log(t);


//precedencia 
let a1 = 6; b1 = 7; c1 = 8;
let dato = (a1 + b1) * c1;
console.log(dato);

let a2 = 6; b2 = 7; c2 = 8; d2 = 9;
let dato2 = a2 * (b2 + c2);
console.log(dato2);


let dato3 = a2 * b2 + c2 / d2;
console.log(dato3);

//operadores de asignacion
let b = 3;
let valorD = 3;

b += 3;
console.log(b);

valorD -= 3;
console.log(valorD);

let numero = 10;
if (numero % 2 == 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}

//determinar si una persona es mayor o no de edad
let persona1 = 18;
if (persona1 >= 18) {
    console.log("La persona es mayor de edad");
} else {
    console.log("La persona es menor de edad");
}

let i = 10;

let valMin = 12; valorMax = 12;

//OPERADOR AND ==> &&
if (i >= valMin && i <= valorMax) {
    console.log("El valor esta dentro del rango");
} else {
    console.log("El valor esta fuera del rango");
}

//OPERADOR OR ==> ||
if (i >= valMin || i <= valorMax) {
    console.log("El valor esta dentro del rango");
} else {
    console.log("El valor esta fuera del rango");
}

//Operadores ternarios
let resultado = (i >= valMin && i <= valorMax) ? "El valor esta dentro del rango" : "El valor esta fuera del rango";


//conversion
let minumero = "7";

console.log(typeof minumero);

let edad1 = parseInt(minumero);
let edad2 = Number(minumero);

if (edad1 >= 18) {
    console.log("Puede votar");
}
else {
    console.log("No puede votar");
}

//parseInt convierte un valor en numero entero(sin decimales)
//Number convierte un valor en un numero (puede ser entero o flotante)

console.log(parseInt("42px")); //42 solo la parte numerica
console.log(parseInt(3.1415)); //convierte solo la parte entera
console.log(parseInt("hola")); // existe un valor numero para convertir

console.log(Number("42px")); //no se puede convertir toda la cadena
console.log(Number(3.1415)); //convierte el numero en un flotante
console.log(Number("hola")); // no hay numeros en la cadena

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));




/* ***************
*                ARREGLOS
****************/

//formas de declarar un arreglo
const array = [1, 2, 3, 4, 5]; //forma 1 la utilizada mas comun
const array1 = new Array(1, 2, 3, 4, 5);
const array2 = Array.of[1, 2, 3, 4, 5];

let numeros1 = [1, 2, 3, 4, 5];
let colores = ["Rojo", "Azul", "Verde", "Amarilo", "Negro"];
let vacio = [];
let conjunto = [{ nombre: "Ricardo", apellido: "Vargas" }, { color: "Rojo" }];

let videojuego = [
    "Super",
    "Super hero",
    "Donkey Kong",
];
console.log(videojuego[3]);

/*let arreglosCosas = [
    true,
    123,
    "Hola",
    1 + 2,
    function (),
    () => [],
    [a: 1],
    ["Hola", "mundo"],
];
console.log({ arreglosCosas });
console.log(arreglosCosas[3]);*/


//map
//transformar los elementos de un arreglo
let numeros = [1, 2, 3, 4, 5];
let cuadrados = numeros.map(num => num * num);
console.log((cuadrados));

//filter
//filtrar lo datos de un arreglo
let numerosPares = [1, 2, 3, 4, 5];
let pares = numerosPares.filter(num => num % 2 == 0);
console.log((pares));

//reduce
//reduce los datos de un arreglo
let numerosReduce = [1, 2, 3, 4, 15, 6, 7, 8, 9, 10];
let maximo = numerosReduce.reduce((acumulador, num) => (num > acumulador ? num : acumulador), numerosReduce[0]);
console.log((maximo));

//ventajas
//son idales para trabaar con transformaciones y manipulaciones complejas
//permiten un estilo de programacion funcional mas pimpio y facil de usar

//desventajas
//agregar nuevos elementos

//push() agregar uno o mas elementos dal final de un array
let agregar = [1, 2, 3];
agregar.push(4); //agrega el numero 4 al final del array
console.log(agregar);

let a = ['uno', 'dos', 'tres'];
a.push('cuarto');
console.log(a);

//unshift agrega uno o mas elementos al principio del array
let add = [1, 2, 3];
add.unshift(0); //agrega el 0 al principio del array
console.log(add);

//splice() puede agregar o eliminar elementos de cualquier parte dentro del array
//este metodo es muy versatil
let z = [1, 2, 3];
z.splice(1, 0, 4); //agrega el numero 4 en la posicion 1, sin eliminar los elementos, 0= no se alimina el dato
console.log(z);


//Modificar elementos dentro de un array

//se puede modificar los elementos directamente
//a traves de su indice y modificarlo

let m = [1, 2, 3];
m[1] = 5;
console.log(m);

//si deseamos modificar el arreglo de forma inmutable, se puede utilizar el metodo map()
//para crear un nuevo arreglo con los valores modificados.

let modificar = [1, 2, 3];
let nuevoModificardo = modificar.map(num => num === 2 ? 5 : num); //cambiar el valor 2 por 5
console.log(nuevoModificardo);


//Eliminar eleemntos dentro de un array

//pop() elimina el ultimo elemnto del array
let e = [1, 2, 3];
e.pop();
console.log(e);

//shift() elimina el primer elemento de un array
let num = [1, 2, 3];
num.shift();
console.log(num);

//splice() para poder eliminar elementos en cualquier posicion
let s = [1, 2, 3]
s.splice(1, 1);
console.log(s);











/***************
 *              FUNCIONES
 ***************/

//Funciones declaradas

function miFunction(a, b) {
    console.log("La suma es: " + (a + b))
}
miFunction(3, 4);

//utilizar return para funciones

function retornaValor(a, b) {
    return a + b;
}
let resultado = retornaValor(2, 4);

console.log(resultado);

//funciones de tipo expresion
//Declaracion de una funcion de tipo expresion

let sumar = function (a, b) { return (a + b) };

resultado = sumar(1, 2);

console.log(resultado);

//funciones de tipo self-invoking
//funciones que llaman a si mismos
//funciones anonimas
//Notas: se pueden utilizar estas funciones cuando se carga un programa
//no es muy comun, pero se puede utilizar en ciertos casos

(function (a, b) {
    console.log("Ejecutar la funcion: " + (a + b));
})(3, 4);

function total(x, y, z) {
    console.log(arguments.length); //cuenta los valores dentro de la funcion
    return x + y + z;
}
total(1, 2, 3);


//funciones tipo flecha en javascript (arrow function)

const multiplicar = (x, y) => x * y;
console.log(multiplicar(3, 6));

const cuadrado = x => x * x;
console.log(cuadrado(4));

//funciones anonimas
//es una funcion sin nombre, comunmente usado como argumentos para otras funciones

setTimeout(function () {
    console.log('Funcion anonima');
}, 1000);

//operaciones dentro de funciones flechas
const operaciones = { sumar: (a, b) => a + b };

console.log(operaciones.sumar?.(1, 2));
console.log(operaciones.restar?.(3, 2));

//