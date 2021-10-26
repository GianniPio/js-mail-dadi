// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


const btnPlay = document.querySelector(".btn");



btnPlay.addEventListener('click',

    function() {

        // creare delle variabili che assumono il valore del numero generato a random
        // numero dado per il giocatore

            const userNum = Math.floor(Math.random() * 6) + 1;
        console.log("Il dado uscito al giocatore è", userNum);

        // numero random per il computer

        const pcNum = Math.floor(Math.random() * 6) + 1;
        console.log("Il dado uscito al pc è", pcNum);

        // generare un if che fa il controllo per la vincita
        const risult = document.querySelector("footer > .row > .col");
        let risultSpan = document.createElement("span");

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



















