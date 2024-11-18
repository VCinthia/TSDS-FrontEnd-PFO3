// 1. Calcular el área de un rectángulo

function calcularAreaRectangulo(long, ancho) {
    let area = 0;
    let err = 'Error: Los valores de ancho y largo deben ser diferentes para ser un rectángulo.';

    if (long != ancho) {
        area = long * ancho;
        return `Resultado: ${area}`;
    } else {
        return err;
    }
}

/////////////////////////////

// 2. Contar palabras en una cadena

function contarPalabras(frase) {
    let contador = 0;
    let array = [];

    array = frase.split(" ");
    contador = array.length;
    return `Resultado: ${contador}`;
}

/////////////////////////////

// 3. Invertir una cadena

function invertirCadena(cadena) {
    let nuevaCadena = "";
    nuevaCadena = cadena.split("").reverse().join("");

    return `Resultado: ${nuevaCadena}`;
}

/////////////////////////////

// 4. Encontrar el palíndromo

function esPalindromo(cadena) {
    let nuevaCadena = [];
    let esPalindromo = false;

    nuevaCadena = cadena.split("").reverse().join("");

    if (nuevaCadena === cadena) {
        esPalindromo = true;
    }
    return `Resultado: ${esPalindromo}`;
}

/////////////////////////////

// 5. Crear un programa para convertir la edad de un perro a años humanos

function edadCanina() {
    let edadPerruna = prompt('Ingrese edad del can: ', 0);
    const equal = 7;
    let añosHumanos = 0;

    añosHumanos = edadPerruna * equal;
    
    window.alert(`Tu perro tiene ${añosHumanos} años humanos`)
    return `Tu perro tiene ${añosHumanos} años humanos`
}

//LLAMADA A LAS FUNCIONES

function runOne() {
    const r1 = calcularAreaRectangulo(5, 3); // 15
    const r2 = calcularAreaRectangulo(3, 3); // 'Los valores de ancho y largo deben ser diferentes para ser un rectángulo.'
    const r3 = calcularAreaRectangulo(9, 3); // 27
    console.log(` ${r1}\n\ ${r2}\n\ ${r3}`)
    printResult(r1, r2, r3, 'p1');
}

function runTwo() {
    const r1 = contarPalabras("Humahuaca es un lugar copado"); // Resultado: 5
    const r2 = contarPalabras("Los bizcochitos Don Satur son los más ricos"); // Resultado: 8
    const r3 = contarPalabras("Por cada taza de arroz son dos de agua"); // Resultado: 9
    console.log(` ${r1}\n\ ${r2}\n\ ${r3}`)
    printResult(r1, r2, r3, 'p2');
}

function runThree() {
    const r1 = invertirCadena("hola"); // Resultado: "aloh"
    const r2 = invertirCadena("taza"); // Resultado: "azat"
    const r3 = invertirCadena("papitas"); // Resultado: "satipap"
    console.log(` ${r1}\n\ ${r2}\n\ ${r3}`)
    printResult(r1, r2, r3, 'p3');
}

function runFour() {
    const r1 = esPalindromo("neuquen"); // true
    const r2 = esPalindromo("perro"); // false
    const r3 = esPalindromo("rallar"); // true
    console.log(` ${r1}\n\ ${r2}\n\ ${r3}`)
    printResult(r1, r2, r3, 'p4');
}

function runFive() {
    const r1 = edadCanina();
    console.log(` ${r1}`)
    printResult(r1, '', '', 'p5');
}

//PRINT EN HTML

function printResult(r1, r2, r3, pn) {
    const resultsContainer = document.querySelector(`.${pn}`);
    const playButton = document.querySelector(`.p-${pn}`);
    
    if (playButton) {
        playButton.style.display = "none";
    }
    
    resultsContainer.innerHTML = "";
    
    const results = [r1, r2, r3];
    results.forEach((result) => {
        const resultElement = document.createElement("p");
        resultElement.textContent = result;
        resultsContainer.appendChild(resultElement);
    });
    
    const clearButton = document.createElement("button");
    clearButton.classList.add("play", `clear-${pn}`);
    clearButton.innerHTML = `<i class="fa-solid fa-trash"> Borrar contenido</i>`;
    
    clearButton.addEventListener("click", () => {
        resultsContainer.innerHTML = "";
        
        if (playButton) {
            playButton.style.display = "block";
        }
    });

    resultsContainer.appendChild(clearButton);
}

