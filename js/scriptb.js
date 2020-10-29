// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// genero le 16 bombe con numeri random
var bombe = [];
for (var i = 0; bombe.length < 16; i++) {
  var numero = Math.floor(Math.random() * 100) + 1;
  if (bombe.indexOf(numero) === -1) {
    bombe.push(numero);
  }
}
console.log(bombe);

// chiedo all'utente un numero tot. volte
var numeriInseriti = [];
for (var i = 0; numeriInseriti.length < 5; i++) {
  var numeroUser = parseInt(prompt("inserisci un numero da 1 a 100"));
  if (numeroUser > 100){
    alert("numero troppo grande");
  } else if (numeroUser <= 0) {
    alert("numero troppo piccolo");
  } else if(numeriInseriti.indexOf(numeroUser) === -1){
    numeriInseriti.push(numeroUser);
  } 
}
console.log(numeriInseriti);
