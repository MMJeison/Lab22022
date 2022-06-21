'use strict';

function plus(a, b){
    return a + b;
}
function minus(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    if(b == 0) return new Error('La division por cero no esta definida');
    return a / b;
}

module.exports={
    plus,
    minus,
    multiply,
    divide
}