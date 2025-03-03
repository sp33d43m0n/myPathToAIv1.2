// 1.	Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).

// function sigma(value){
//     let suma=0;
//     for (let i=1; i<=value; i++){
//         suma = suma + i;   
//     }
//     return suma;
// }



// console.log(sigma(5));
// console.log(sigma(3));
// 2.	Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).

// function factorial(value){
//     let facto=1;
//     for (let i=1; i<=value; i++){
//         facto = facto * i;   
//     }
//     return facto;
// }



// console.log(factorial(5));
// console.log(factorial(3));
// 3.	Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. 

// function fibonna(index){
//     serie=[0,1];
//     for (let i=1; i<index; i++){
//         lastValue=serie[i-1];
//         currentValue=serie[i];
//         newValue=lastValue+currentValue;
//         serie.push(newValue);
//     }
// return serie; 
// }

// console.log(fibonna(7));

// 4.	Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null.  

// function beforeLast(values){
//     if (values.length == 1) return null;
//     else {
//         answer = values[values.length-2];
//     }
// return answer;
// }

// console.log(beforeLast([42,true,4,"Liam", 7]));

// 5.	Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. Si el array es muy pequeño, devuelve null. 
// function comeBackIndex(values,index){
//     if (values.length == 1) return null;
//     else {
//         answer=values[index];
//     }
// return answer;
// }


// console.log(comeBackIndex([5,2,3,6,4,9,7],3));

// 6.	Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.
// function indexLastbefore(values){
//     let valuesAsk=[values[0]];
//     if (values.length == 1) return null;
    
//     for (let i=1; i<values.length; i++){
//         for (let n=0; n<valuesAsk.length; n++){
//             if (values[i] < valuesAsk[n]){
//                 valuesAsk.splice(n, 0, values[i]);
//                 n = valuesAsk.length;
//             }
//         }
//     }
// return valuesAsk[1];
// }


// console.log(indexLastbefore([15,20,4,3,14.3,7]));

function secondLargest(values) {
    if (values.length < 2) return null; // Si hay menos de 2 elementos, devolvemos null

    let largest = -Infinity; // Mayor valor encontrado
    let secondLargest = -Infinity; // Segundo mayor valor encontrado

    for (let i = 0; i < values.length; i++) {
        if (values[i] > largest) {
            // Actualizamos el segundo mayor antes de actualizar el mayor
            secondLargest = largest;
            largest = values[i];
        } else if (values[i] > secondLargest && values[i] < largest) {
            // Si no es el mayor pero es más grande que el segundo mayor
            secondLargest = values[i];
        }
    }

    // Si el segundo mayor nunca se actualizó, significa que no hay suficientes valores distintos
    return secondLargest === -Infinity ? null : secondLargest;
}

// Pruebas
console.log(secondLargest([15, 20, 4, 3, 14.3, 7])); // 15
console.log(secondLargest([42, 1, 4, 3.14, 7]));    // 7
console.log(secondLargest([1]));                   // null

// 7.	Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
