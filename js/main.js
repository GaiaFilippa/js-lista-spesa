// Stampa in console gli elementi della lista individualmente,
// prima con un ciclo for, poi con un ciclo while.

// Ciclo For

console.log("Lista della spesa con ciclo for:");
let listaDellaSpesa = ["Pane", "Latte", "Uova", "Farina", "Yogurt", "Frutta"];

for(let i=0; i<listaDellaSpesa.length; i++){
    console.log((i+1) + ". " + listaDellaSpesa[i]);
}


// Ciclo While

console.log("Lista della spesa con ciclo while:");

let contatore = 0;

while(contatore < listaDellaSpesa.length){
    console.log((contatore+1) + ". " + listaDellaSpesa[contatore]);
    contatore++;
}
