// 1 Factura de compra simple

// se solicita el nombre del producto, precio y cantidad 
let nombre = prompt("Ingrese el nombre del producto: ");
let precio = parseFloat(prompt("ingrese el preio del producto: "));
let cantidad = parseInt(prompt("ingrese la cantidad que desea llevar: "));

// se realiza el calculo 
let total = precio * cantidad;

// se muestran los resultados 
console.log("El total a pagar por " + cantidad + nombre + " es: " + total);
alert("El total a pagar por " + cantidad + nombre + " es: " + total); 