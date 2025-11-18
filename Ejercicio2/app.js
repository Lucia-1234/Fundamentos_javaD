// 2 Salario semanal

// se solicita el numero de horas trabajadas y el valor por hora
let horas_trabjadas = parseInt(prompt("Ingrese el total de horas trabajadas en la semana"));
let valor_hora = parseFloat(prompt("Ingrse el valor por hora trabajada"));

// se realiza el calculo
let calculo = horas_trabjadas * valor_hora;

// el muesra el resultado 
console.log("El total por las hora trabajadas es de:  " + calculo);
alert("El total por las hora trabajadas es de:  " + calculo);