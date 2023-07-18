/* 
.lenght devuelve la longitud del array.
.push() agrega elementos al final de array.
.pop() elimina el ultimo elemento del array.
.unshift() agrega un elemento al array, pero lo agrega en primer lugar.
**.shift() **elimina el elemento que está en el inicio del array.
**.indexOf ** devuelve la posición de un elemento del array.
*/
var frutas = ["banano", "platano", "cereza", "fresa"];
console.log(frutas); // todos

console.log(frutas[0]); //banano
console.log(frutas[2]); //cereza
console.table(frutas);

frutas.length; //4

frutas.push("manzana"); //agregar manzana al final
frutas.push("manzana","pera"); //agregar manzana y pera al final
frutas.push(1,2); //agregar 1 y 2 al final
articulos.push({ nombre: 'mouse', stock: 100, costo: 180});//agregar a arrays con objetos

frutas.pop(); //eliminar el ultimo elemento de un array

frutas.unshift("uva"); //agregar uva al inicio

frutas.shift(); //eliminar el primer elemento de un array

frutas.splice//(Posicion, Numero de elementos a eliminar desde la posicion de partida hacia la derecha)
frutas.splice(2,1)

frutas.indexOf("platano"); //1