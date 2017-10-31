var cardNum = parseInt(prompt("Ingrese número de tarjeta"));
function isValidCard(cardNumber){
var arrayNum = [];
var sum = 0;
var value = 0;
for(var i=0; i<=cardNumber.length; i++){
  arrayNum.push(cardNumber[i]);
  cardNum.reverse();
}
for(var a=0; j< arrayNum.length; a++){
  if(a%2!==0){
    arrayNum[a] = arrayNum[a]*2
  }
}
for(var sum=0; sum <arrayNum.length; sum++){
  if(arrayNum[sum]>=10){
    value

  }
}



}



//Definiendo si los números son pares o impares
