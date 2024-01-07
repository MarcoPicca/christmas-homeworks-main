
/***
 * Completare il codice JavaScript successivo in modo che console.log() stampi in console
 * un array che contiene tutti gli elementi dell'array1 seguiti da tutti gli elementi
 * dell'array 2 
 */

const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [];

for (let i = 0; i < array1.length; i++) {
    array3.push(array1[i]);
}

for (let j = 0; j < array2.length; j++) {
    array3.push(array2[j]);
}

console.log('Esercizio 11:', array3);