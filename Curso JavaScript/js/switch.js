'use strict'

//SWITCH

var edad = 18;
var imprime = "";

switch(edad)  {  
    case 18: 
        imprime= "acabas de cumplir la mayoria de edad"
    break;
    case 25: 
        imprime= "ya eres un adulto"
    break;
    case 40: 
        imprime= "crisis de los 40"
    break;
    case 75: 
        imprime= "eres un anciano"
    break;
    default:
        imprime="tienes edad neutra"
    break;
}
console.log(imprime)