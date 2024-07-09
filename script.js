// Selección de elementos
let texto_out = document.querySelector("#texto_out");
let placeholder = document.getElementById("placeholder");

// Función para encriptar texto
function encriptar() {
    document.querySelector("#advertencia").removeAttribute("style");
    let palabra = document.querySelector("#texto");
    let palabraIngresada = palabra.value.toLowerCase();
    
    if (palabraIngresada.trim() === "") {
        mostrarAdvertencia("Por favor, ingrese un texto válido.");
        mostrarPlaceholder();
        return;
    }

    if (!/^[a-z ]*$/.test(palabraIngresada)) {
        mostrarAdvertencia("El texto contiene caracteres no permitidos.");
        mostrarPlaceholder();
        return;
    }

    let palabraCodificada = palabraIngresada
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    mostrarResultado(palabraCodificada);
}

// Función para desencriptar texto
function desencriptar() {
    let palabra = document.querySelector("#texto");
    let palabraEncriptada = palabra.value.toLowerCase();

    let palabraDecodificada = palabraEncriptada
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e')
        .replace(/ai/g, 'a');

    if (palabraDecodificada.trim() === "") {
        mostrarAdvertencia("¡Error! Ingrese un texto válido.");
        mostrarPlaceholder();
        return;
    }

    mostrarResultado(palabraDecodificada);
}

// Función para copiar texto
function copy() {
    let resultado = document.getElementById("texto_out");
    resultado.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles");
}

// Función para mostrar advertencias
function mostrarAdvertencia(mensaje) {
    let advertencia = document.querySelector("#advertencia");
    advertencia.style.color = "red";
    advertencia.style.fontSize = "16px";
    advertencia.textContent = mensaje;
}

// Función para mostrar el resultado
function mostrarResultado(texto) {
    placeholder.style.display = 'none';
    texto_out.style.display = 'block';
    texto_out.innerHTML = texto;

    // Mostrar el botón "Copiar"
    document.getElementById("copiar").style.display = 'block';
}

// Función para mostrar el placeholder inicial
function mostrarPlaceholderInicial() {
    placeholder.style.display = 'flex';
    texto_out.style.display = 'none';
    texto_out.innerHTML = `
        <img src="image.png" alt="Placeholder" class="placeholder-image">
        <p>Ningún mensaje fue encontrado</p>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>
    `;

    // Ocultar el botón "Copiar"
    document.getElementById("copiar").style.display = 'none';
}


// Llamada inicial al placeholder
mostrarPlaceholderInicial();

// Eventos
document.getElementById("copiar").addEventListener("click", copy);
document.querySelector('#enc').addEventListener('click', encriptar);
document.querySelector("#des").addEventListener('click', desencriptar);
