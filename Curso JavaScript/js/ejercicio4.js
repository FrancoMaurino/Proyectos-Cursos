'use strict'

/* mostrar todos los numeros impares que hay entre dos numeros 
introducidos por el usuario */

var num1 = parseInt(prompt("introduce el primer numero"));
var num2 = parseInt(prompt("introduce el segundo numero"));

while (num1<num2) {
    num1++
    if (num1%2 != 0) {
        console.log("el "+ num1 +" es impar");
    }
}