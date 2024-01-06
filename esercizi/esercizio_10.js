
/***
 * Completare il codice JavaScript successivo in modo che console.log() stampi
 * in console il valore true
 */

function first(a, x) {
    if (x === 0) {
        return a * a;
    } else {
        return second(a / 2, x - 1);
    }
}
function second(a, x) {
    if (x === 0) {
        return a;
    } else {
        return first(a / 2, x);
    }
}
console.log('Esercizio 10:', second(6, 1) === _);