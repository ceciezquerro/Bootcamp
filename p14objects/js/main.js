//crear una función que pida al usuario las propiedades nombre {name}, apellido{lastName}, edad{age} y teléfono{phone} de un koder y crear un objeto {koderObject} con esos datos

const createKoderInf = () => {
    let name = prompt("nombre", "Juan");
    let lastName = prompt("apellido", "Pérez");
    let age = prompt("edad", "33");
    let phone = prompt("teléfono", "5541914296");
    let koderObject = {name, lastName, age, phone}
    console.log(koderObject)
    }

const createKoderInf = () => {
    let name = prompt("nombre", "Juan");
    let lastName = prompt("apellido", "Pérez");
    let age = prompt("edad", "33");
    let phone = prompt("teléfono", "5541914296");
    let koderObject = 
    koderObject.name = name;
    koderObject.lastName = lastName;
    koderObject.age = age;
    koderObject.phone = phone;
    console.log(koderObject)
    }