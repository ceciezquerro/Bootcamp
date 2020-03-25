/*
var kodersMatrix = [
    [
        "Israel",
        "Salinas Martínez",
        "5543788096",
        "27-09-1989"
    ],
    [
        "David",
        "Cermeño Moranchel",
        "5512312345",
        "14-11-1995"
    ]
]

kodersMatrix.forEach (array) => {

}

getShortenedData => DCM-ddmmaa
output "DCM-141195"
*/

//algoritmo
//crear la estructura del objeto con el nombre de las propiedades
//correr un .forEach para que haga lo que queremos para cada array
//dentro del .forEach correr una función llamada nameInitial que tome el nombre en la posición 0 y extrae la inicial usando .charAt
//también crear una función llamada lastNameInitial que tome el apellido de la posición 1 y hacer un .split para dividirlo en 2 palabras y extraer la inicial usando .charAt
//también crear una función llamada birthdayShort que tome la fecha de la posición 4 y divida con base en "-" 
//crear un return que use .this para juntar inicial del nombre + inicial de las palabras del apellido


//Ejercicio 2
//pedir al usuario la cantidad de koders a registrar
//por cada koder, pedir nombre, apellidos, calificación en html, calificación en css, calificación en js,
//generar un objeto del tipo Koder por cada koder registrado
//guardarlo en una colección que se llame KodersList
//pt2:
//agregar a nuestro constructor un método que permita obtener el promedio del koder

var registerKoders = prompt("cantidad de koders a registar", "cantidad en número")
var cantKoders = parseInt(registerKoders)

function Koder (name, lastName, gradeHtml, gradeCss, gradeJs){
    this.name = name
    this.lastNames = lastName
    this.gradeHtml = gradeHtml
    this.gradeCss = gradeCss
    this.gradeJs = gradeJs
}

var i;
for (i=0; i < cantKoders; i++){
    let koderList = []
    prompt(Koder)
    return Koder
    Koder.push(koderList)
}

var someObject = new Koder (...cantKoders)

console.log(koderList)


//crear un libro de recetas de botanas, y después crear una botana por cada receta en nuestro libro


var snackRecipeBook = []; 

const askSnack = () =>{
    let howManySnacks = parseInt(prompt("¿cuántas recetas de snacks quieres crear?"));
    let i;
    for ( i = 0; i < howManySnacks; i++) {
        let name = prompt("name?");
        let flavor = prompt("flavor?");
        let type = prompt("type?");
        let recipe = [name, flavor, type];
        snackRecipeBook.push(recipe);
    }
    console.log(snackRecipeBook)
}


function Snack (name, flavor, type) {
    this.name = name,
    this.flavor = flavor,
    this.type = type
    this.slogan = function(){
        alert(`Nuestra botana ${this.name} es la más sabrosa!!`)
    }
}

var shippingBox = []; 

const createSnacks = (anySnackRecipeBook) => {
    anySnackRecipeBook.forEach((receta) => {
        let newSnack = new Snack(...receta)
        shippingBox.push(newSnack)
    })
    console.log(shippingBox)
}