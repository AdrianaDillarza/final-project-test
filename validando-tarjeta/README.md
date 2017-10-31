# Tarjeta de crédito válida
Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito
 y confirme su validez según el algoritmo de Luhn.

## Pseudocódigo
1. Pedir al usuario mediante un prompt() que ingrese número de tarjeta.
2. Definir una función: isValidCard, que validará los números de la tarjeta
   que el usuario ingresó.
3. Almacenar los números de la tarjeta en un arregl
4. Con el método reverse(), invertir el orden de los números en el arreglo,
   esto para poder aplicar la fórmula del algoritmo de Luhn.
   *El algoritmo de Luhn resulta de multiplicar por dos los números del arreglo
   que se encuentran en posiciones pares y si el doble de cada número es mayor
   o igual a 10; sumar los dígitos del resultado.*
5. Recorrer el arreglo hasta encontrar los números pares que hay dentro de él.
6. Si el doble de esos números es mayor o igual a 10; sumar los dígitos del
   resultado.
7. Si el número no es par, estos no se modificarán y conservarán su posición.
8. El resultado se guardará en un arregloNuevo.
9. Sumar los números de arregloNuevo.
10. Al resultado de la suma: Dividir entre 10 y obtener el residuo.
11. Si el residuo de la división es igual a 0: "La tarjeta es válida".
12. Si el residuo de la división es diferente a 0: "La tarjeta no es válida".
13. Retornar isValidCard.

### Diagrama de flujo
A continuación se incluye diagrama de flujo:
![tarjeta valida] (./assets/images/tarjeta-valida.jpg)
