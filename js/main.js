// chiediamo all'utente la sua età;
// chiediamo all' utente il numero di chilometri che desidera percorrere;
// in base alle risposte fornite dall'utente devo calcolare il prezzo totale del biglietto;
// il prezzo del biglietto è definito in base al costo per km (0.26 € al km);
   // se l'utente è minorenne sarà applicato uno sconto del 15%;
   // se l'utente è ha un'età maggiore o uguale di 65 anni sarà applicato uno sconto del 35%;
// L'output del form andrà visualizzato in console con massimo due decimali



const generatorButton = document.querySelector('#generator-button');

generatorButton.addEventListener('click' , function(){
    console.log(document.getElementById('user-age').value);
    console.log(document.getElementById('user-path').value);

    const userAge = document.getElementById('user-age').value;
const userPath = document.getElementById('user-path').value;

console.log(userAge, userPath);

if (isNaN(userAge) == true ) {
    console.log('il formato della tua età non è stato accettato, ricarica la pagina e riprova');

} else if (isNaN(userPath) == true ) {
    console.log('il formato del numero di chilometri non è stato accettato, ricarica la pagina e riprova');
    
} else {
    let userCost = 0.26 * userPath;
    console.log(userCost);

    let userTotal;

    if (userAge >= 65) {
        userTotal = (userCost * 65) / 100;
    } else if (userAge <= 18) {
        userTotal = (userCost * 85) / 100;
    } else {
        userTotal = userCost;
    }

    console.log(userTotal.toFixed(2) + "€");
}

});
