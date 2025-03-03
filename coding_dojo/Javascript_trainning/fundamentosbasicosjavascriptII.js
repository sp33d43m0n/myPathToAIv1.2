// 1.	Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

// function thebigger(vector1){
//     for (var i=0; i<vector1.length; i++){
//         if (vector1[i] > 0){
//             vector1[i] = "Big";
//         }
//     }
// return vector1;
// }

// console.log(thebigger([-1,3,5,-5]));

// function replacePositiveWithBig(numbers){
//     return numbers.map(result => (result > 0 ? "big" : result));
// }
// console.log(replacePositiveWithBig([-1,3,5,-5]));

// 2.	Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 

// function printToSmallestAndReturntoBiggest(array){
//     let smallest = array[0];
//     let biggest = array[0];
//     let biggestindex = 0;
//     let smallestindex = 0;

//     for (let i = 0; i < array.length; i++){
//         if (array[i] > biggest){
//             biggest = array[i];
//             biggestindex = i;
//         }
//         else if (array[i] < smallest){
//             smallest = array[i];
//             smallestindex = i;
//         }
//     }
//     array[biggestindex] = "return";
//     array[smallestindex] = "print";
//     return array;
// }

// console.log(printToSmallestAndReturntoBiggest([-1,3,5,-5]));


// 3.	Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.


// 4.	Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

// let arr = [1,2,3];
// let result = arr.map(function(element){return element *element;});

// console.log(result);


// 5.	Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].

// function count_Positives(array2){
//     let count = 0;
//     for (let i=0; i<array2.length; i++){
//         if (array2[i] > 0){
//             count += 1;
//         }  
//     }
// array2[array2.length-1] = count;
// return array2;
// }

// console.log(count_Positives([-1,1,1,1]));

// 6.	Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡tres imparesl!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡tres pares!”.

// function oddAndEven(array) {
//     let oddCount = 0; // Contador de impares
//     let evenCount = 0; // Contador de pares
//     let messages = []; // Aquí guardaremos los mensajes en lugar de usar `console.log`

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) { // Es par
//             evenCount++; 
//             oddCount = 0; // Reiniciamos impares
//             if (evenCount === 3) {
//                 messages.push("¡tres pares!"); // Guardamos el mensaje
//                 evenCount = 0; // Reiniciamos pares
//             }
//         } else { // Es impar
//             oddCount++;
//             evenCount = 0; // Reiniciamos pares
//             if (oddCount === 3) {
//                 messages.push("¡tres impares!"); // Guardamos el mensaje
//                 oddCount = 0; // Reiniciamos impares
//             }
//         }
//     }

//     return messages; // Retornamos el arreglo con los mensajes
// }

// // Prueba
// console.log(oddAndEven([4, 2, 6, 7, -5, -1, 3, 10, 13, 11]));

// 7.	Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr. 



// let evens = [];
// function addSeconds(array2){
//     for (let i = 0; i < array2.length; i+=2){
//         let array3 = array2[i]+1;
//         evens.push(array3);
//     }
// return [array2, evens];
// }

// console.log(addSeconds([1,2,3,4,5,6]));


// 8.	Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?

// function longitudesPrevias(stringsArray) {
//     // Recorremos el arreglo desde la última posición hacia atrás para no alterar los datos originales
//    for (let i = stringArray.lenght -1 ;i>0;i--){
//    stringArray[i] = stringArray[i-1].length

// }

//     // Retornamos el arreglo modificado
//     return stringArray;
// }

// // Ejemplo de uso
// console.log(longitudesPrevias(["programar", "dojo", "genial"]));

// 9.	Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 

// function addSeven(array) {
//     for (let i = 0; i < array.length; i++){
//         array[i] = array[i] + 7;
//     }
// return array;
// }

// console.log(addSeven([1,2,3]));

// 10.	Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).

// function invert(array){
//     for (let i=0; i<array.length; i++){
//         lastValue=array.pop();
//         array.splice(i,0,lastValue)
//     }
// return array
// }

// console.log(invert([3,1,6,4,2]));

// 11.	Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

// function allNegative(array){
//     let array2 = [];
//     for (let i=0; i<array.length; i++){
//         if (array[i]>0){
//             array2[i] = array[i]*-1;
//         }
//         else{
//             array2[i] = array[i];
//         }
//     }
// return array2;
// }

// console.log(allNegative([1,-3,5]))

// 12.	Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 


// 13.	Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez.


function changeThrowCenter(array){
    size = array.length-1;
    for (let i = 0; i < array.length/2; i++){
        left = array[i];
        right = array[size-i];
        array[i] = right;
        array[size-i] = left; 
    }
    return array;
}

console.log(changeThrowCenter([1,2,3,4,5,6]));

// 14.	Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
