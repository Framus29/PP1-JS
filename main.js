// console.log("Hola")

// let nombre = "Francisco";
// var edad = 21;
// const dni = 46105457

// if (edad > 18) { 
//     let apellido = "Sbarra";
//     console.log(nombre);
//     console.log(apellido);
// }

let nombre = prompt("ingrese un nombre: ");
let edad = parseInt(prompt("ingrese su edad: "));
let contraseña = prompt("ingrese una contraseña: ")

console.log("datos ingresados:")
console.log(nombre, edad)

if (nombre.length == 0) {
    console.log("el nombre no puede estar vacio.");
} else if (edad < 18) {
    console.log("acceso denegado");
} else if (contraseña.length < 6) {
    console.log("contraeña invalida")
}
    else {
    console.log("contraseña valida")

  

let edadEnDiezAños = edad + 10;
console.log(`Hola ${nombre}!!, su contraseña es ${contraseña} y la edad que tendra en 10 años sera ${edadEnDiezAños} años.`)


}   