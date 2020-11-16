// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana"
// della lista in cui il nuovo utente si trova.

// creazione di un array contenente dei cognomi
var nameList = ["Simpson", "Van Houten", "Burns", "Nahasapeemapetilon"];
console.log("La lista iniziale è composta da:", nameList);

// chiedere all'utente il proprio cognome
var customerName = prompt("Inserire il proprio cognome");
console.log("Il tuo cognome è:", customerName);

// inserirlo all'interno dell'array precedentemente creata
nameList.push(customerName);
console.log("La nuova lista è composta da:", nameList);

// stampare la lista dei cognomi in ordine alfabetico
nameList.sort();
for (var i = 0; i < nameList.length; i++) {
     console.log(nameList[i]);
}

// console.log("Il tuo cognome si trova in posizione:", nameList.length);
