// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana"
// della lista in cui il nuovo utente si trova.

// creazione di un array contenente dei cognomi
var nameList = ["Simpson", "Van Houten", "Burns", "Nahasapeemapetilon", "Skinner", "Lovejoy", "Flanders", "Szyslak", "Prince", "Smithers", "Gumble", "Carlson", "Leonard", "Brockman"];

// chiedere all'utente il proprio cognome
var customerName = prompt("Inserire il proprio cognome");

// inserirlo all'interno dell'array precedentemente creata
nameList.push(customerName);

// stampare la lista dei cognomi in ordine alfabetico
// determinare posizione umana utente
nameList.sort();

var i = 0;
while (i < nameList.length) {
     document.getElementById("name_list").innerHTML += "<li>" + nameList[i] + "</li>";

     if (nameList[i] == customerName) {
          document.getElementById("position").innerHTML = i + 1;
     }
     
     i++;
}
