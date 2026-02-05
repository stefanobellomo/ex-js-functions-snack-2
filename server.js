// SNACK 1

// forma base
function somma(primo, secondo) {
    return primo + secondo
}

console.log(somma(1, 2));

// funzione anonima assegnata a variabile
let sum = function (primo, secondo) {
    return primo + secondo
}

const tot = sum(2, 2)
console.log(tot);

// arrow function assegnata a variabile
let somm = (primo, secondo) => primo + secondo

const totale = somm(3, 3)
console.log(totale);

// SNACK 2

const quadrato = (numb) => numb * numb

console.log(quadrato(4));

// SNACK 3

let sottrazione = (a, b) => a - b
let divisione = (a, b) => a / b

const eseguiOperazione = (a, b, operazione) => operazione(a, b)

console.log(eseguiOperazione(2, 2, sottrazione));
console.log(eseguiOperazione(9, 3, divisione));

// SNACK 4

function creaTimer() {
    // console.log(('tempo scaduto'));
}

setTimeout(creaTimer, 4000)

// SNACK 5

function chiamami(messaggio) {
    return setInterval(() => {
        // console.log(messaggio);
    }, 1000)
}

const interval = chiamami('Ciao cane')

setTimeout(() => {
    clearInterval(interval)
    // console.log('fine messaggio')
}, 5000)

// SNACK 6

let count = 0

function creaContatoreAutomatico(tempo) {
    return function () {
        const id = setInterval(() => {
            count++
            console.log(count);
        }, tempo)
        return id
    }
}

const contatore = creaContatoreAutomatico(1000)
const id = contatore()

setTimeout(() => clearInterval(id), 6000)

// SNACK 7






