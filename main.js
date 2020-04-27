// JSnack 10: Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.

// Genero 16 numeri casuali ,per il compuper, tra 1 e 100, che saranno le "mine".
var mine = Math.floor(Math.random() * 100) + 1;
// chiedo all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.

// (Brainstorming:do-while dove nel while come condizione mettero diverso dalle mine perchè se numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare )) e poi anche il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare

// visualizzo l output finale ove comunico il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito;
