// 1.	Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

// var z = [];
// function numbers1_255() {
//     for(var i=1; i<256; i++){
//         console.log(i);
//         z.push(i);
//     }
//     return z;
// }

// rpta = numbers1_255();
// console.log(rpta);

// 2.	Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

// var z = [];
// function pares2_1000() {
//     for(var i=2; i<1001; i=i+2){
//         console.log(i);
//         z.push(i);
//     }
//     return z;
// }

// rpta = pares2_1000();
// console.log(rpta);


// 3.	Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

// var suma = 0;
// function sum1_5000() {
//     for(var i=1; i<5001; i++){
//         suma = suma + i;
//     }
//     return suma;
// }

// rpta = sum1_5000();
// console.log(rpta);

// 4.	Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

// sumavector = 0;
// function suma_array(vector){
//     for (var i=0; i<vector.length; i++){
//         sumavector = sumavector + vector[i];
//         console.log(sumavector);
//     }
//     return sumavector;
// }

// console.log('la suma es', suma_array([-2,3,1,4,6]))

// 5.	Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

// var mayor = 0;
// function elmayor(vector){
//     for (var i=0; i<vector.length; i++){
//         if (vector[i]>mayor){
//             mayor = vector[i];        
//         }   
// }
// return mayor;
// }

// console.log(elmayor([-3,15,5,7]));

// 6.	Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).


// sumavector = 0;
// function suma_array(vector){
//     for (var i=0; i<vector.length; i++){
//         sumavector = sumavector + vector[i];
//         console.log(sumavector);
//     }
//     return sumavector/vector.length;
// }

// console.log('el promedio es', suma_array([1,3,5,7,20]))


// 7.	Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.}

// var vector2 = [];
// function impares(){
//     for(var i=1; i<51; i=i+2){
//         vector2.push(i);
//     }
// return vector2;
// }

// console.log(impares());


// 8.	Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7)

// var vector2 = [];
// function elmayor(mayor,vector){
//     for (var i=0; i<vector.length; i++){
//         if (mayor<vector[i]){
//             vector2.push(vector[i]);        
//         }   
// }
// return vector2;
// }

// console.log(elmayor(-5,[-3,15,5,7]));

// 9.	Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

// var vector3 = [];
// var vectorcuadrado = [];
// function cuadrado(vector3){
//     for(var i=0; i<vector3.length; i++){
//         vectorcuadrado.push(vector3[i] ** 2);
//     }
//     return vectorcuadrado;
// }

// console.log(cuadrado([1,2,3,4,5]));

// 10.	Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).


// function quien_negativo(vector4){
//     for(var i=0; i<vector4.length; i++){
//         if (vector4[i]<0){
//             vector4[i] = 0;
//         }
//     }
//     return vector4;    
// }

// console.log(quien_negativo([1,-5,10,-2]))


// 11.	Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).


// var max = 0;
// var min = 0;
// var avg = 0;
// var Vector5_rpta = [];
// function max_min_avg(vector5){
// for (var i=0; i<vector5.length; i++){
//     if (vector5[i]>max){
//         max = vector5[i]; 
//     }
//     else if (vector5[i]<min){
//         min = vector5[i];
//     }
// avg = avg + vector5[i];
// }
// Vector5_rpta = [max, min, avg/vector5.length]
// return Vector5_rpta ;
// }

// console.log(max_min_avg([1,5,10,-2]));

// 12.	Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).

// var First_Value = [];
// var Last_Value = [];

// function Change_Value(Vector6){
//     Last_Value = Vector6.pop();
//     First_Value =Vector6.shift();
//     Vector6.unshift(Last_Value);
//     Vector6.push(First_Value);
//     return Vector6;
// }
// console.log(Change_Value([1,5,10,-2]));


// 13.	De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

function Change_Dojo(Vector7){
    for (var i=0; i<Vector7.length; i++){
        if (Vector7[i]<0){
            Vector7[i] = "Dojo";
        }     
    }
return Vector7;
}

console.log(Change_Dojo([-1,-3,2]))
