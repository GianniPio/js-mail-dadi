// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// creare delle variabili che assumono il valore del numero generato a random


// numero dado per il giocatore

const userNum = Math.ceil(Math.random() * 6) + 1;
console.log(userNum);

// numero random per il computer

const pcNum = Math.ceil(Math.random() * 6) + 1;
console.log(pcNum);

// generare un if che fa il controllo per la vincita
