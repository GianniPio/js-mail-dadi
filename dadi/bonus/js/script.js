// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// variabile per il bottone
const btnPlay = document.querySelector(".btn");

// variabili per il risultato dell'utente
const userDado = document.getElementById("user");
const dadoUser = document.createElement("span");
dadoUser.className = "fs-4";

// variabili per il risultato del pc
const pcDado = document.getElementById("pc");
const dadoPc = document.createElement("span");
dadoPc.className = "fs-4";

// variabili per il risultato
const risult = document.querySelector("footer > .row > .col");
let risultSpan = document.createElement("span");



btnPlay.addEventListener('click',

    function() {

        // numero dado per il giocatore

        const userNum = Math.floor(Math.random() * 6) + 1;
        dadoUser.append(userNum);
        userDado.append(dadoUser);

        // numero random per il computer

        const pcNum = Math.floor(Math.random() * 6) + 1;
        dadoPc.append(pcNum);
        pcDado.append(dadoPc);

        // generare un if che fa il controllo per la vincita

        if (userNum > pcNum) {
            
            // Se il numero dell'utente è maggiore del numero del pc
            risultSpan = "Il vincitore è l'utente";
            risult.append(risultSpan);

        } else if (userNum < pcNum) {
            
            // Se il numero dell'utente è minore del numero del pc
            risultSpan = "Il vincitore è il pc";
            risult.append(risultSpan);
        } else {

            // Se i dadi sono uguali
            risultSpan = "I dadi sono uguali";
            risult.append(risultSpan);
        };
    }
);



















