//Esto es coercion

var a = 4 + "7";
typeof a;

// String

var b = 4 * "7";
typeof b;

// Numero

// Esto es coercion implicita donde el lenguage nos ayuda a cambiar la variable

var a = 20
var b = a + "";
console.log(b);
typeof b;

// Esto es coercion explicita donde obligamos a la variable a cambiar

var c = Number(a);
console.log(c);
typeof c;

// Cambiar un dato a numero

var d = String(a);
console.log(d);
typeof d;

// Cambiar un dato a string