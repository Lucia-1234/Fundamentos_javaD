// 7 solicita el precio de un producto

//se solicita que se ingrese el precio del producto
let precio_producto = parseFloat(prompt("ingrese el precio del producto"));

//se realiza el descuento del 10% al precio del producto
const descuento = precio_producto*0.10;
const total_final = precio_producto - descuento;

//se muestran los resultados 
console.log("El total a pagar con el 10% de descuento aplicado es de: "+total_final);
alert ("El total a pagar con el 10% de descuento aplicado es de: "+total_final);