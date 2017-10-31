//Pidiendo al usuario ingresar un mensaje a cifrar
var message = prompt("Introduce un mensaje para descifrar");
//Declarando función "cipher" donde por medio de un for se va a recorrer el
//mensaje ingresado, devolviendo un resultado cifrado.
var cipher = function(letters){
var letters = 0;
  for(var i=0; i < message.length; i++){
  cipherWord =   letters.charCodeAt(i)-65+33)%26)+65;
  cipher(message);
     return cipherWord;
  }
}
//Declarando función "decipher" donde por medio de un for que recorra el mensaje
//ya cifrado, nos devuelva un resultado descifrado.
var decipher = function(letters){
  for(var i=0; i < cipher.length; i++){
  decipherWord = String.fromCharCode(cipher);
  decipher(cipher);
     return decipherWord;
  }
}
//Imprimiendo mensaje descifrado
document.write("Tu mensaje descifrado es " + decipher);
if(message===0){
}
//En caso de que el usuario no ingrese un mensaje, se le notificará con un alert
alert("Tu mensaje no puede ser descifrado");
