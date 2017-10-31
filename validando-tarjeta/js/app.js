var cardNum = parseInt(prompt("Ingrese número de tarjeta"));
//Declarando una función que retorne si la tarjeta de crédito es válida.
function isValidCard(cardNumber){
var arrayNum = [];
var sum = 0;
var value = 0;
for(var i=0; i<=cardNumber.length; i++){
  arrayNum.push(cardNumber[i]);
//Con el método reverse, invertir el orden del arreglo
  reverse(cardNum);
 }
}
//Recorriendo la longitud del arreglo
for(var a=0; j< arrayNum.length; a++){
//Determinando qu+e números dentro del arreglo son pares y a los que lo sean
//multiplicarlos por 2
  if(a%2!==0){
    arrayNum[a] = arrayNum[a]*2
  }
}
//Sumar los números del arreglo nuevo y dividirlo entre 10
for(var sum=0; sum <arrayNum.length; sum++){
  if(arrayNum[sum]>=10){
    value = arrayNum[sum]/10
    
  }
}



}
