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


// Stampa in DOM

function listGeneration(event){
    event.preventDefault();

    let userItem = document.getElementById('itemInput').value;

    document.getElementById("container-for-list").innerHTML += `
    <div class="flex border-bottom border-dark mt-3 mb-3 h-30 px-4">

        <div class="me-2">
            <p>${userItem}</p>
        </div>
    
        <div>
            <button class="border border-0 bg-white text-danger mb-3 fw-bold">X</button>
        </div>

    </div>
    `;
}