let edad = 18;

if(edad === 18) {
    console.log("Puedes votar por primera vez");
} else if (edad > 18) {
    console.log("Puedes votar como antes");
} else {
    console.log("No puedes votar");
}


let cantidad = 0;
let numeros = "15346811";
let verificar = numeros.includes("1");

if (verificar = true) {
    cantidad++;
    console.log(cantidad);
} else{
    console.log("adios");
}
/*
if (true) {
    console.log("hola");
} else {
    console.log("adios");
}

if (true) {
    console.log("hola");
} else if {
    console.log("adios");
} else {
    console.log("nunca");
}
*/

let piedra = 1;
let papel = 2;
let tijera = 3;

//papel consola
if (papel > piedra ) {
    console.log("perdiste");
} else {
    console.log("ganaste");
}

//tijera consola
if (tijera < piedra) {
    console.log("ganaste");
} else {
    console.log("perdiste");
}

//piedra consola
if (tijera) {
    console.log("perdiste");
} else {
    console.log("ganaste");
}
