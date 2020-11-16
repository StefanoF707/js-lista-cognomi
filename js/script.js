// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana"
// della lista in cui il nuovo utente si trova.

// creazione di un array contenente dei cognomi
var nameList = ["Simpson", "Van Houten", "Burns", "Nahasapeemapetilon"];
console.log(nameList);

// chiedere all'utente il proprio cognome
var customerName = prompt("Inserire il proprio cognome");
console.log(customerName);

// inserirlo all'interno dell'array precedentemente creata
nameList.push(customerName);
console.log(nameList);

// stampare la lista dei cognomi in ordine alfabetico

// scrivere la posizione "umana" della lista in cui l'utente si trova: array.length + 1?
