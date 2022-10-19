
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// chiedere il numero di chilometri
// chiedere l'eta
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let chilometri = prompt("Quanti chilometri vuoi percorrere?");


let età = prompt("Quanti anni hai?");


const tariffaChilometro = 0.21;


let prezzoBiglietto = chilometri * tariffaChilometro;
console.log(prezzoBiglietto)

let sconto20 = ( prezzoBiglietto / 100 ) * 20;
console.log(sconto20)

let sconto40 = (prezzoBiglietto / 100) * 40;
console.log(sconto40)



if (età < 18 ){
 
    prezzoBiglietto = chilometri * tariffaChilometro - sconto20;

} else if( età > 65){

    prezzoBiglietto = chilometri * tariffaChilometro - sconto40;
}

document.getElementById("ticket").innerHTML = (prezzoBiglietto);

console.log(document.getElementById("ticket").innerHTML)