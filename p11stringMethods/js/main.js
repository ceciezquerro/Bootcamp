//String Methods

//Práctica 1

//obtener el nombre completo del usuario e indicarle cuántos caractéres tiene su nombre

//Algoritmo 1
//definir el nombre del usuario con una variable nombrada "name"
//con un método prompt, pedirle al usuario que indique su nombre completo
//usar el objeto string length para imprimirle al usuario cuántos carácteres tiene su nombre

/*
var Name = prompt("escribe tu nombre completo", "nombre y apellido");
var n = Name.length;
console.log(`tu nombre tiene esta ${n} caracteres`)
*/

//Práctica 2

//obtener el nombre completo del usuario
//contar cuántos caractéres tiene
//si su nombre tiene menos de 15 caractéres, indicarle mediante un mensaje que su nombre es muy corto
//si tiene más o igual a 15 caractéres, indicarle que su nombre es muy largo

//Algoritmo 2
//con base en el algoritmo 1, utilizar el operador condicional if para revisar si la cantidad de carácteres es menor a 15 carácteres, en cuyo caso imprimirle al usuario "tu nombre es muy corto"
//si la cantidad de carácteres es mayor o igual a 15 carácteres, imprimirle al usuario "nu nombre es muy largo"

/*
if ( n < 15 ){
    console.log("tu nombre es muy corto :(")
} else if ( n >= 15 ){
    console.log("tu nombre es muy largo :(")
}
*/

//Práctica 3
//obtener el nombre completo del usuario
//contar cuantas vocales tiene

//con base en el algoritmo 1, crea una variable de conteo denominada count e inicializarla en 0
//compara cada caracter en el enunciado con las vocales "a, e, i, o, u", y si hace match, aumenta el conteo del count por 1

/*
var fullName = prompt("Ingresa tu nombre completo", "nombre y apellido")
var numberOfVocal;
numberOfVocal = fullName.match(/[aeiou]/gi).length
console.log(numberOfVocal)
*/

//Práctica 4
//Recibir una palabra del usuario, y formar una nueva palabra usando las dos primeras y las dos últimas letras de esa palabra. 
//Si la palabra tiene menos de 5 caracteres, enviar un mensaje de error al usuario indicándoselo

//Algoritmo 4
//con un prompt, pedirle una palabra a un usuario y nombrarla con la variable Palabra
//si la palabra tiene menos de 5 carácteres, enviar un mensaje de error al usuario indicándoselo
//usar .slice(0, 2) para obtener los primeros dos carácteres de la palabra y asignarles la variable "str1"
//usar .slice(0, -2) para obtener los últimos dos carácteres de la palabra y asignarles la variable "str2"
//asignar una vocal "a" a la variable str3
//concatenar la variables str1, str2 y str3, usando string.concat(str1, str2, str3)
//imprimir este resultado para el usuario


var Palabra = prompt("escribe una palabra mayor a 5 carácteres", "palabra")
if (Palabra.length < 5){
    console.error("error, tu palabra tiene menos de 5 letras")
}

var str1 = Palabra.slice(0, 2)
var str2 = Palabra.slice(-2)
var str3 = "a"

var NewWord = str1.concat(str3,str2)
console.log(NewWord)

//Práctica 5
//pedir al usuario nombre y edad, y mostar un mensaje que diga "hola, soy {nombre} y tengo {edad} años"

//Algoritmo 5
//con un prompt, pedirle al usuario su nombre
//con un prompt, pedirle al usuario su edad
//imprimir un mensaje que diga "hola, soy {nombre} y tengo {edad} años"

var Nombre = prompt("¿cuál es tu nombre?", "nombre")
var Edad = prompt("¿cuál es tu edad?", "edad")

console.log(`hola, soy ${Nombre} y tengo ${Edad} años`)


//Práctica 6
//Del texto "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
//Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias por la palabra "Koder", y mostrar el mensaje de nuevo al usuario */

//Algoritmo 6
//definir todo el texto con la variable texto
//utilizar .replace para reemplazar todas palabras "estudainte" con "Koder" y guardarlo bajo una nueva variable llamada "NewMessage"
//imprimir el "NewMessage" al usuario

var texto = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
var NewMessage = texto.replace(/estudiante/g, "Koder!");
console.log(NewMessage)
