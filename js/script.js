// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// Rivediamo l’esercizio visto insieme, 

// ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.

//selezioniamo gli elementi del DOM
const shoppingList = document.querySelector(".shopping-list");// selezione il mio ul
console.log(shoppingList);
//creiamo la lista della spesa
const shoppingItemList = ["croccantini cani", "latte", "affettati", "frutta", "pasta", "acqua", "pane",];
console.log(shoppingItemList);

//andiamo a creare un ciclo per visionare la lista

let i = 0;
while (i < shoppingItemList.length){
    console.log(shoppingItemList[i]);
    shoppingList.innerHTML += `<li>${shoppingItemList[i]}</li>`;
    i++;
}