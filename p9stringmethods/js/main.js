// tener los valores de x y de y, y compararlos
// si x es mayor que y, mostrar un mensaje que lo indique
// si x es menor que y, mostrar un mensaje que lo indique

//Algoritmo:
//declarar los valores de x y y (var)
//preguntar si x es mayor que y (comparison operators)
//obtener la respuesta de la comparación (conditional operators)
//si x es mayor que y, mostrar el mensaje "x es mayor que y" (console methods)
//si x no es mayor que y, mostrar el mensaje "x es menor que y" (console methods)

/*if{
    //si algo se cumple
}

else if{
    //si lo anterior no se cumple, pero esto sí
}

else{
    //si nada de lo anterior se cumple
}

condition ? case
*/

var x = 5;
var y = 10;

if ( x > y ){
    console.log(x, "es mayor que", y);
} else if ( x < y ){
    console.log(x, "es menor que", y);
} else {
    console.log(x, "es igual a", y);
}


//ejercicio 2

//multiplicar 2 valores y verificar si el resultado de la multiplicación es par o non
//si es par indicarlo con un mensaje
//si es non indicarlo con un mensaje

//algoritmo:
//crear y declarar 2 variables
//multiplicar las variables
//obtener el resultado, denominarlo MultiplicationResult
//dividir MultiplicationResult entre 2
//obtener el residuo, denominarlo Modulus
//revisar si Modulus = 0, mostrar el mensaje "resultado es par"
//else, mostarr el mensaje "resultado es non"


var x = 5;
var y = 10;

var MultiplicationResult = ( x * y );
var Modulus = ( MultiplicationResult % 2 );

if ( Modulus === 0 ){
    console.log("el producto de x*y es par")
} else {
    console.log("el producto de x*y es non")
}



// ejercicio 3

//recibir un número de parte del usuario y calcular el área de un círculo cuyo radio sea igual al número proporcionado

//algoritmo
//crear la variable Radio y asignarle un prompt cuyo método pida "elegir el número del Radio" para que el usuario elija un "número" 
//cambiar el resultado del "número" elegido por el usuario de ser un string a ser un integer usando parseInt
//asignar una constante para el valor de Pi
//hacer el cálculo del área con Radio y Pi y asignarla a Area

var Radio = prompt("Elgie el número del Radio", "número");

var numericaInt = parseInt(String)

const pi = 3.1416;

var Area = pi*(Radio*Radio);

console.log("Área del círculo con el radio que elegiste es:", Area);


//práctica 4

//recibir del usuario los datos de 3 lados de un triangulo
//con base en esos datos, determinar el área del triangulo y mostrarla en un mensaje
//en otro mensaje, indicar si el traingulo es isoseles, equilatero o escaleno


//Algoritmo

//crear 3 variables distintas que representarán los 3 lados de un triangulo, llamadas "ladoA" "ladoB" "ladoC"
//asignar a cada una de estas variables un prompt cuyo método pida al usuario asignarle un valor, especificando que el valor debe ser un número del 1 al 10
//dado que el resultado del prompt arrojará un string, debemos convertirlo a un valor numérico usando el método parseInt(text, 10)
//para hacer esta conversión, nombraremos variables nuevas "A", "B", "C" para a ellas usar el método parseInt
//usaremos la fórmula Heron para obtener el área del triangulo
//para ello primero debemos calcular el semiperimetro, asignándole la variable "S" a la fórmula S = ( A + B + C ) / 2
//posteriormente, calcularemos una primera parte de la formula Heron, asignándole la variable "H" a la fórmula H = S * ( S - A ) * ( S - B ) * ( S - C )
//luego debemos obtener la raíz cuadrada del resultado de la variable "H", con la formula Math.sqrt(value), asignandola a la variable Area
//imprimir este resultado al usuario, indicando que representa "el área del triangulo"
//crearemos un segundo mensaje al usuario que le explica si el triangulo que construyó es "isoseles", "equilatero" o "escaleno"
//sabemos que un triangulo equilatero tiene los 3 lados iguales, un triangulo isóceles tiene 2 lados iguales y un escaleno no tiene ningún lado igual
//por ende, debemos revisar a través de un if si A==B && B==C (usando and)
//si arroja true, imprimir al usuario "el triangulo es equilátero"
//else if, revisar si A==B || B==C (usando or)
//si arroja true, imprimir al usuaro "el triangulo es isóceles"
//else, impriimir al usuario "el triangulo es escaleno"

var ladoA = prompt("asigna un valor para el lado A, debe ser un número del 1 al 10", "valor");
var ladoB = prompt("asigna un valor para el lado B, debe ser un número del 1 al 10", "valor");
var ladoC = prompt("asigna un valor para el lado C, debe ser un número del 1 al 10", "valor");

var A = parseInt(ladoA, 10);
var B = parseInt(ladoB, 10);
var C = parseInt(ladoC, 10);

var S = ( A + B + C ) / 2
var H = S * ( S - A ) * ( S - B ) * ( S - C )

var Area = Math.sqrt(H)
console.log("el área del triangulo es:", Area)

if ( A==B && B==C ){
    console.log("el triángulo es equilátero")
} else if ( A==B || B==C){
    console.log("el triángulo es isóceles")
} else {
    console.log("el triángulo es escaleno")
}

//práctica 5

//una vez lograda la práctica 4, determinar si el triángulo es un triángulo rectángulo

//Algoritmo
//podemos determinar si el triángulo es un triángulo rectángulo utilizando el teorema de pitágoras, el cual enuncia que: Todos los triángulos rectángulos cumplen que la hipotenusa al cuadrado es igual a la suma de los lados contiguos al ángulo recto (catetos) al cuadrado.
//Es decir, utilizando la fórmula C ** C = (A ** A) + ( B ** B ) si el resultado es true, el triangulo es rectángulo

if ( C * C == ( A * A ) + ( B * B ) ){
    console.log("el triangulo es rectángulo")
} else {
    console.log("el triangulo no es rectangulo")
}
