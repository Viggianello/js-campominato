// JSnack 10: Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.

// Creo una funzione che crea un numero casuale da un valore minimo(min) ad uno massimo(max).
function numero_casuale(min,max) {
    return Math.floor(Math.random() * max) + min;
}

 // Creo una funzione per stampare in console.
function stampa(cosa_voglio_stampare) {
    console.log(cosa_voglio_stampare);
}

// Genero ,tramine la funzione numero_casuale, un numero casuale ,per il computer, tra 1 e 100.
var mine = numero_casuale(1,100);

//  Stampo il valore delle mine usando la funzione stampa
stampa(mine);

// Genero tramine la funzione numero_casuale n(in questo caso 16) numeri casuali ,per il compuper, tra 1 e 100, che saranno le "mine".
// Creo un contatore per accertare di creare n numeri casuali
var n = 1;
while (n <= 16) {
    var mine = numero_casuale(1,100);
    stampa(mine + " interazione numero n = " + n);// Visualizzo il numero_casuale.
    n++ // Condizione di incremento per uscire dal ciclo.
}

 // Genero una funzione che crea N numero casuale da un valore minimo(min) ad uno massimo(max).
 // function numeri_casuali(n,min,max) {
 //     var i = 1;
 //     while (i <= n) {
 //         var numeri = Math.floor(Math.random() * max) + min;
 //         return numeri;// restituisco il numero_casuale.
         // i++ // condizione di incremento per uscire dal ciclo.
 //     }
 // }

 // visualizzo i vari output della funzione numeri_casuali
 // stampa(numeri_casuali(16,1,100));


// Chiedo all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
    var numero_utente = parseInt(prompt("Inserisci un numero: "));
    // Verifico che il dato inserito sia idoneo
    if (!isNaN(numero_utente) && numero_utente >= 1 && numero_utente <= 100) {
        stampa(numero_utente);
    } else {
        stampa("il numero inserito non va bene");
    }

// (Brainstorming:do-while dove nel while come condizione mettero diverso dalle mine perchè se numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare )) e poi anche il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare

// visualizzo l output finale ove comunico il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito;
