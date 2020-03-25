//pedir al usuario la cantidad de koders a registar
//pedir tantos nombres de koder como el usuario haya indicado
//guardar cada nombre de cada koder en una colección
//de cada Koder imprimir únicamente el primer nombre

//Algoritmo
//a través de un método prompt, pedir al usuario que: "elige la cantidad de koders a registrar", "cantidad de koders"
//convertir esa respuesta en un valor numerico utilizando parseInt() y nombrarlo bajo otra variable
//utilizar el metodo for, crear un ciclo para que el usuario registre tantos nombres completo como cantidad de koders que eligió
//utilizando un array, guardar los nombres completos dentro del mismo
//utilizando un split, tomar unicamente el primer nombre de cada elemento del array e imprimirlo al usuario

var koders = prompt("elige la cantidad de koders a registrar", "cantidad de koders")
var cantKoders = parseInt(koders)

var i;
var names = []
for (i = 0; i < cantKoders; i++) {
    var koderName = prompt("nombre completo del Koder", "Juan Perez");
    names.push(koderName);
}

var firstNames = []
names.forEach((name) => {
    firstNames.push(name.split(" ", 1)[0])
})

firstNames.forEach((name) => {
    console.log(name)
})