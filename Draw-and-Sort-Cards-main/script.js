// Valores de la Carta
let arrayNumeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];
let arrayPintas = ["♦", "♥", "♠", "♣"];
let arrayValores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// Div donde van las cartas Generadas
let divCartasTop = document.querySelector('.cartasRandomDiv');
// Definiendo Variables de la Carta
let carta = document.querySelector('.carta');
let pintaTop = document.querySelector('.pintaTop');
let pintaBot = document.querySelector('.pintaBot');
let numnero = document.querySelector('.numero');
let arrayDeCartas = [];

function crearCarta() {
    // Creando Parametros Random
    let pintaRandom = arrayPintas[Math.floor(Math.random() * 4)];
    let valorRandom = Math.floor(Math.random() * 13)
    let numeroRandom = arrayNumeros[valorRandom];
    let valorCarta = arrayValores[valorRandom]
    // Creando elementos HTML
    let cartaAleatoria = document.createElement('div');
    let pintaTopRandom = document.createElement('p');
    let numeroCenter = document.createElement('p');
    let pintaBotRandom = document.createElement('p');
    // Agregando Clases
    cartaAleatoria.classList.add('carta');
    pintaTopRandom.classList.add('pintaTop');
    numeroCenter.classList.add('numero');
    pintaBotRandom.classList.add('pintaBot');
    // Agregando Pinta
    pintaTopRandom.textContent = pintaRandom;
    pintaBotRandom.textContent = pintaRandom;
    // Agregando Numero Random
    numeroCenter.textContent = numeroRandom;
    // Agregando Estilos 
    if(pintaRandom == arrayPintas[0] || pintaRandom == arrayPintas[1]) {
        pintaTopRandom.style.color = 'red';
        pintaBotRandom.style.color = 'red';
        numeroCenter.style.color = 'red';
    } else {
        pintaTopRandom.style.color = 'black';
        pintaBotRandom.style.color = 'black';
        numeroCenter.style.color = 'black';
    }
    // Agregando Child
    
    cartaAleatoria.appendChild(pintaTopRandom);
    cartaAleatoria.appendChild(numeroCenter);
    cartaAleatoria.appendChild(pintaBotRandom);
    divCartasTop.appendChild(cartaAleatoria);

    // Agregando Cartas al Array 
    arrayDeCartas.push({numero:numeroRandom, pinta:pintaRandom, valor:valorCarta});

}
// Obteniendo Valor del Input

inputDraw = document.querySelector('.draw');
inputDraw.addEventListener('click', tenCards);

function tenCards() {
    divCartasTop.innerHTML = "";
    inputCarta = parseInt(document.querySelector('#inputCarta').value);
    arrayDeCartas = [];
    for(let i = 1; i <= inputCarta ; i++){
    crearCarta()};
    console.log(arrayDeCartas);
    
}

// Obteniendo el boton Sort

inputSort = document.querySelector('.sort');
inputSort.addEventListener('click', function() {
    sortedBoard.innerHTML = ""
    ordenar(arrayDeCartas)
});

// Obteniendo Div donde van las cartas ordenadas
let sortedBoard = document.querySelector('.sortedCardBoard')

// Función para ordenar Cartas

const ordenar = (arr) => {
    let min = 0;
    while (min < arr.length-1){
        for(let i = min+1; i < arr.length; i++) {
          if (arr[min].valor > arr[i].valor) {
            let aux = arr[min];
            arr[min] = arr[i];
            arr[i] = aux;
          }
        }   
    // Creando Divs para las Cartas Div Row y Div Col
        let divParaCartasRow = document.createElement('div')
        let divParaCartasCol = document.createElement('div')
        let numeroDeRow = document.createElement('h2')

    // Agregando Clases a los Div
        divParaCartasRow.classList.add('row')
        divParaCartasCol.classList.add('col-md-12', 'd-flex', 'mt-1', 'mb-3', 'columna')
        numeroDeRow.innerHTML = min
    // Agregando Childs del div sortedCardBoard
        sortedBoard.appendChild(divParaCartasRow)
        divParaCartasRow.appendChild(divParaCartasCol)
        divParaCartasCol.appendChild(numeroDeRow)
        


        // Agregando Cartas al div cartasOrdenadas, al final del ciclo while
        for(let i = 0; i < arr.length;i++) {
            let cartaAleatoria = document.createElement('div');
            let pintaTopRandom = document.createElement('p');
            let numeroCenter = document.createElement('p');
            let pintaBotRandom = document.createElement('p');
            
    
            // Agregando Clases
            cartaAleatoria.classList.add('carta');
            pintaTopRandom.classList.add('pintaTop');
            numeroCenter.classList.add('numero');
            pintaBotRandom.classList.add('pintaBot');
            // Agregando Pinta
            pintaTopRandom.textContent = arr[i].pinta;
            pintaBotRandom.textContent = arr[i].pinta;
            // Agregando Numero Random
            numeroCenter.textContent = arr[i].numero;
            // Agregando Estilos 
            if(arr[i].pinta == arrayPintas[0] || arr[i].pinta == arrayPintas[1]) {
                pintaTopRandom.style.color = 'red';
                pintaBotRandom.style.color = 'red';
                numeroCenter.style.color = 'red';
            } else {
                pintaTopRandom.style.color = 'black';
                pintaBotRandom.style.color = 'black';
                numeroCenter.style.color = 'black';
            }
            // Agregando Child
            
            cartaAleatoria.appendChild(pintaTopRandom);
            cartaAleatoria.appendChild(numeroCenter);
            cartaAleatoria.appendChild(pintaBotRandom);
            divParaCartasCol.appendChild(cartaAleatoria);
            
        
            console.log("Ciclo while terminado") }
    min++
    }
	;
}; 
