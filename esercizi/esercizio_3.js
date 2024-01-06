
/***
 * Completare il codice JavaScript successivo in modo che console.log() stampi in console
 * il valore false
 */

const vetrina = ['pomodori', 'insalata', _, 'mele', 'pere'];
let missing = true;
for (let i = 0; i < vetrina.length; i++) {
    if (vetrina[i] === 'asparagi') {
        missing = false;
    }
}
console.log('Esercizio 3:', missing);