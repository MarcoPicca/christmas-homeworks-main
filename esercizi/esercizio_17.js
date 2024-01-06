
/***
 * Completare il codice in modo che console.log() stampi il numero di valori distinti
 * contenuti nell'array (riempito dall'utente)
 */

const valori = [];
let valore;
do {
    valore = prompt("Inserisci qualcosa nell'array (zero per terminare)");
    if (valore != 0) {
        valori.push(valore);
    }
} while (valore != 0);
let numeriDistinti = 0;
_
console.log(numeriDistinti);