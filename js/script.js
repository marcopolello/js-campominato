// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Il computer deve generare 16 numeri casuali tra 1 e 100.
// creo una variabile che tenga il risultato della funzione che mi crea i 16 numeri
var bombe = randomNumbers(16);
console.log(bombe);

// In seguito deve chiedere all’utente (100 - 16)volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.



// variabile che contiene il punteggio
var numUserAsk = askNumbers(4);
console.log("il tuo punteggio è: ", numUserAsk);
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// creo una funzione che chieda all'utente un numero da 1 a 100, (n)volte
function askNumbers(n)
{
  var conteggio = 0;
  for (var a = 0; (a < n && a != n); a++)
  {
    var numUser = parseInt(prompt("scrivi un numero compreso tra 1 e 100"));
    console.log(numUser);
    var verifica = false;
    // ciclo che mi controlla se il numeroUtente è uguale ad uno di quelli Random
      for (var i = 0; i < bombe.length; i++)
      {
        var item = bombe[i]
        // console.log(item);
        if (item == numUser)
        {
          verifica = true;
        }
      }
      if (verifica == true)
      {
        console.log("il tuo numero ha preso una bomba");
        a = n; //per farlo uscire subito dal ciclo
      } else
      {
        console.log("non hai colpito nessuna bomba");
        conteggio = conteggio + 10;
      }
  }
  console.log(conteggio, "10 punti ogni numero esatto");
  return conteggio;
}


















////////// FUNZIONI //////////

// creo una funzione che mi fornisce (x) numeri random
function randomNumbers(x)
{
  // mi salvo i 16 numeri in un array
  var numeriRandom = [];
  while(numeriRandom.length < x)
  {
    var r = Math.floor(Math.random() * 100) + 1;
    //finchè r non esiste dentro all'array continuo a pushare un altro r per un massimo di x volte
    if(numeriRandom.indexOf(r) === -1) numeriRandom.push(r);
  }
  // console.log(numeriRandom);
  return numeriRandom;
}


// var listaNumUser = userNumberCheck(2)
// console.log(listaNumUser);
// creo una funzione che mi salva i numeri dell'utente a patto che siano > 0 e minori di 100
function userNumberCheck(x)
{
  // mi salvo i numeri dati dall'utente in un array
  var numeriUser = [];
  while(numeriUser.length < x)
  {
    var numUser = parseInt(prompt("scrivi un numero compreso tra 1 e 100"));
    //finchè r non esiste dentro all'array continuo a pushare un altro r per un massimo di x volte
    if((numeriUser.indexOf(numUser) === -1) && (numUser <= 100) && (numUser > 0) && (numUser != ""))
    {
      numeriUser.push(numUser);
    }
  }
  // console.log(numeriUser);
  return numeriUser;
}
