// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// creare delle variabili che assumono il valore del numero generato a random
// numero dado per il giocatore

const userNum = Math.ceil(Math.random() * 6) + 1;
console.log("Il dado uscito al giocatore è", userNum);

// numero random per il computer

const pcNum = Math.ceil(Math.random() * 6) + 1;
console.log("Il dado uscito al pc è", pcNum);

// generare un if che fa il controllo per la vincita

if (userNum > pcNum) {
    
    // Se il numero dell'utente è maggiore del numero del pc
    console.log("Il vincitore è l'utente");

} else if (userNum < pcNum) {
    
    // Se il numero dell'utente è minore del numero del pc
    console.log("Il vincitore è il pc");
} else {

    // Se i dadi sono uguali
    console.log("I dadi sono uguali quindi non c'è nessun vincitore --- PARITÀ")
};

