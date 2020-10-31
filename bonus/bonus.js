// funzione per generare le bombe
function numeriBomba(x, y) { // x = quante bombe ci sono e y determina il numero max da cui genero la bombe
  var bombe = [];
  while (bombe.length < x) { //finchè l'array non è lungo quanto voglio
    var nBomba = Math.floor(Math.random() * y) + 1;
    if (!bombe.includes(nBomba)) { //controllo che numero non ci sia nell'array
      bombe.push(nBomba); //se non c'è lo pusho
    }
  }
  return bombe;
}

// selezione del livello
var listaBombe;
var livello = prompt("seleziona la difficoltà: facile, medio, difficile, estremo")
switch (livello) {
  case "facile":
    listaBombe = numeriBomba(16, 100);
    console.log(listaBombe);
    break;
  case "medio":
    listaBombe = numeriBomba(16, 80);
    console.log(listaBombe);
    break;
  case "difficile":
    listaBombe = numeriBomba(16, 50);
    console.log(listaBombe);
    break;
  default:
  alert("inserisci una difficoltà")
}


// GIOCO CAMPOMINATO

// variabili GIOCO
var inputInseriti = [];
var esplosione = false, punteggio = 0, tentativi = 84, input;

// logica del GIOCO
while (esplosione === false && tentativi <= 84) {
  input = parseInt(prompt("inserisci un numero da 1 a 100"))
  if (listaBombe.includes(input)) {
    esplosione = true;
    console.log("numero bomba: ", input);
  } else if (inputInseriti.includes(input)) {
    alert("numero già inserito, scegline un altro");
  } else {
    inputInseriti.push(input);
    punteggio++;
  }
}

console.log(inputInseriti, "numeri inseriti");
console.log(punteggio, "<-- punti totalizzati");
