// creo una función 
function obtenerFechaTexto() {
    // Creo un objeto fecha
    let fecha = new Date();

    // Creo un array con los días de la semana en texto
    let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let diaSemanaTexto = diasSemana[fecha.getDay()];

    // Creo otro array con los meses en texto
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let mesTexto = meses[fecha.getMonth()];

    // Obtengo el día
    let dia = fecha.getDate();

    // Obtengo el año
    let año = fecha.getFullYear();

    // Creo la cadena de texto con la fecha
    let fechaTexto = diaSemanaTexto + ', ' + dia + ' de ' + mesTexto + ' de ' + año;

    // Devuelvo la fecha en formato de texto
    return fechaTexto;
}

// Obtengo el elemento <p> por su ID
let footerFecha = document.getElementById("fechaTexto");

// Llamo a la función y le asigno el resultado al elemento <p>
footerFecha.textContent = obtenerFechaTexto();




// para lograr el efecto de la tarjeta 1

const image = document.getElementById('img1');
const card = document.getElementById('card1');

img1.addEventListener('mouseenter', () => {
img1.style.display = 'none';
card1.style.display = 'block';
});

img1.addEventListener('mouseleave', () => {
img1.style.display = 'block';
card1.style.display = 'none';
});

// para lograr el efecto de la tarjeta 2

const image01 = document.getElementById('img2');
const card01 = document.getElementById('card2');

img2.addEventListener('mouseenter', () => {
img2.style.display = 'none';
card2.style.display = 'block';
});

img2.addEventListener('mouseleave', () => {
img2.style.display = 'block';
card2.style.display = 'none';
});


// para lograr el efecto de la tarjeta 3


const image02 = document.getElementById('img3');
const card02 = document.getElementById('card3');

img3.addEventListener('mouseenter', () => {
img3.style.display = 'none';
card3.style.display = 'block';
});

img3.addEventListener('mouseleave', () => {
img3.style.display = 'block';
card3.style.display = 'none';
});