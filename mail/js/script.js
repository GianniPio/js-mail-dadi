// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.

// generare un array contenente una lista di mail

const listParty = ["leodavinci@gmail.com", "marcopolo@libero.it", "khaldrogo@westeros.dt", "walterwhiteww@gmail.com", "monkeydluffy@onepiece.com"];

console.log(listParty);


// l'utente scrive la propria mail

const userMail = prompt("Inserire la tua email...");

// inserire un if che controlla che la mail dell'utente è dentro la lista

for (let i = 0; i < listParty.length; i++) {

    // creo variabile che prende il valore i-esimo della lista
    var element = listParty[i];
    
    // se la mail dell'utente è uguale ad una della lista, può entrare
    if (userMail == element) {
        
        console.log("Perfetto, puoi entrare al party");
        break;

        // altrimenti non può entrare
    } else {

        console.log("Non sei sulla lista, non puoi entrare");
    }
};