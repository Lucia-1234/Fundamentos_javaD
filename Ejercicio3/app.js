//  3 promedio de edad en un grupo

// se solicita la edad de 4 personas
let edad1 = parseInt(prompt("ingrese la edad de la persona 1: "));
let edad2 = parseInt(prompt("ingrese la edad de la persona 2: "));
let edad3 = parseInt(prompt("ingrese la edad de la persona 3: "));
let edad4 = parseInt(prompt("ingrese la edad de la persona 4: "));

// se calcula el promedio
let suma = edad1 + edad2 + edad3 + edad4;
let promedio = suma / 4;

// se muestran los resultados 
console.log("El promdio de las edades de las pesonas es de:" + promedio);
alert("El promdio de las edades de las pesonas es de:" + promedio);