// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Il computer deve generare 16 numeri casuali tra 1 e 100.
// creo una variabile che tenga il risultato della funzione che mi crea i 16 numeri
var numRandomPc = randomNumbers(16);
console.log(numRandomPc);

// In seguito deve chiedere all’utente (100 - 16)volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// chiedo all'utente (n)volte di inserire un numero compreso tra 1 e 100

// creo una variabile che tenga il risultato della funzione che chiede gli input user
var numUserAsk = askNumbers(4);
console.log(numUserAsk);

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.



















////////// FUNZIONI //////////

// creo una funzione che mi fornisce x numeri random
function randomNumbers(x)
{
  // mi salvo i 16 numeri in un array
  var sediciNumRandom = [];
  while(sediciNumRandom.length < x)
  {
    var r = Math.floor(Math.random() * 100) + 1;
    //finchè r non esiste dentro all'array continuo a pushare un altro r per un massimo di x volte
    if(sediciNumRandom.indexOf(r) === -1) sediciNumRandom.push(r);
  }
  // console.log(sediciNumRandom);
  return sediciNumRandom;
}

// creo una funzione che chieda all'utente un numero da 1 a 100 (n)volte
function askNumbers(n) {
  // mi creo un array in cui salvare i numeri inseriti dall'utente
  var listaNumUser = [];
  while (listaNumUser.length < n)
  {
    var richiesta = parseInt(prompt("inserisci un numero da 1 a 100"));
    // L’utente non può inserire più volte lo stesso numero.
    if(listaNumUser.indexOf(richiesta) === -1) listaNumUser.push(richiesta);
  }
  // console.log(listaNumUser);
  return listaNumUser;
}
