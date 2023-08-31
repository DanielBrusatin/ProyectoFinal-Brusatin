/*************/
/* Variables */
/*************/
const personaje = [
  `<svg viewBox="0 0 155 190">
    <line class="gallows" x1="5" x2="115" y1="10" y2="10"/>
    <line class="gallows" x1="115" x2="115" y1="10" y2="35"/>
    <line class="gallows" x1="105" x2="125" y1="35" y2="35"/>
    <line class="gallows" x1="20" x2="20" y1="180" y2="10"/>
    <line class="gallows" x1="50" x2="20" y1="10" y2="40"/>
    <line class="gallows" x1="5" x2="35" y1="180" y2="180"/>
    <line class="gallows" x1="10" x2="20" y1="180" y2="170"/>
    <line class="gallows" x1="20" x2="30" y1="170" y2="180"/>
    <circle id="head" cx="115" cy="55" r="15" fill="none"/>
    <line id="body" x1="115" x2="115" y1="125" y2="70"/>
    <line id="left-arm" x1="115" x2="80" y1="85" y2="75"/>
    <line id="right-arm" x1="115" x2="150" y1="85" y2="75"/>
    <line id="left-leg" x1="115" x2="85" y1="125" y2="160"/>
    <line id="right-leg" x1="145" x2="115" y1="160" y2="125"/>
  </svg>`,
  `<svg viewBox="0 0 155 190">
    <line class="gallows" x1="5" x2="115" y1="10" y2="10"/>
    <line class="gallows" x1="115" x2="115" y1="10" y2="35"/>
    <line class="gallows" x1="105" x2="125" y1="35" y2="35"/>
    <line class="gallows" x1="20" x2="20" y1="180" y2="10"/>
    <line class="gallows" x1="50" x2="20" y1="10" y2="40"/>
    <line class="gallows" x1="5" x2="35" y1="180" y2="180"/>
    <line class="gallows" x1="10" x2="20" y1="180" y2="170"/>
    <line class="gallows" x1="20" x2="30" y1="170" y2="180"/>
    <circle id="head" cx="115" cy="55" r="15" fill="none"/>
    <line id="body" x1="115" x2="115" y1="125" y2="70"/>
    <line id="left-arm" x1="115" x2="80" y1="85" y2="75"/>
    <line id="right-arm" x1="115" x2="150" y1="85" y2="75"/>
    <line id="left-leg" x1="115" x2="85" y1="125" y2="160"/>
  </svg>`,
  `<svg viewBox="0 0 155 190">
    <line class="gallows" x1="5" x2="115" y1="10" y2="10"/>
    <line class="gallows" x1="115" x2="115" y1="10" y2="35"/>
    <line class="gallows" x1="105" x2="125" y1="35" y2="35"/>
    <line class="gallows" x1="20" x2="20" y1="180" y2="10"/>
    <line class="gallows" x1="50" x2="20" y1="10" y2="40"/>
    <line class="gallows" x1="5" x2="35" y1="180" y2="180"/>
    <line class="gallows" x1="10" x2="20" y1="180" y2="170"/>
    <line class="gallows" x1="20" x2="30" y1="170" y2="180"/>
    <circle id="head" cx="115" cy="55" r="15" fill="none"/>
    <line id="body" x1="115" x2="115" y1="125" y2="70"/>
    <line id="left-arm" x1="115" x2="80" y1="85" y2="75"/>
    <line id="right-arm" x1="115" x2="150" y1="85" y2="75"/>
  </svg>`,
  `<svg viewBox="0 0 155 190">
    <line class="gallows" x1="5" x2="115" y1="10" y2="10"/>
    <line class="gallows" x1="115" x2="115" y1="10" y2="35"/>
    <line class="gallows" x1="105" x2="125" y1="35" y2="35"/>
    <line class="gallows" x1="20" x2="20" y1="180" y2="10"/>
    <line class="gallows" x1="50" x2="20" y1="10" y2="40"/>
    <line class="gallows" x1="5" x2="35" y1="180" y2="180"/>
    <line class="gallows" x1="10" x2="20" y1="180" y2="170"/>
    <line class="gallows" x1="20" x2="30" y1="170" y2="180"/>
    <circle id="head" cx="115" cy="55" r="15" fill="none"/>
    <line id="body" x1="115" x2="115" y1="125" y2="70"/>
    <line id="left-arm" x1="115" x2="80" y1="85" y2="75"/>
  </svg>`,
  `<svg viewBox="0 0 155 190">
    <line class="gallows" x1="5" x2="115" y1="10" y2="10"/>
    <line class="gallows" x1="115" x2="115" y1="10" y2="35"/>
    <line class="gallows" x1="105" x2="125" y1="35" y2="35"/>
    <line class="gallows" x1="20" x2="20" y1="180" y2="10"/>
    <line class="gallows" x1="50" x2="20" y1="10" y2="40"/>
    <line class="gallows" x1="5" x2="35" y1="180" y2="180"/>
    <line class="gallows" x1="10" x2="20" y1="180" y2="170"/>
    <line class="gallows" x1="20" x2="30" y1="170" y2="180"/>
    <circle id="head" cx="115" cy="55" r="15" fill="none"/>
    <line id="body" x1="115" x2="115" y1="125" y2="70"/>
  </svg>`,
  `<svg viewBox="0 0 155 190">
    <line class="gallows" x1="5" x2="115" y1="10" y2="10"/>
    <line class="gallows" x1="115" x2="115" y1="10" y2="35"/>
    <line class="gallows" x1="105" x2="125" y1="35" y2="35"/>
    <line class="gallows" x1="20" x2="20" y1="180" y2="10"/>
    <line class="gallows" x1="50" x2="20" y1="10" y2="40"/>
    <line class="gallows" x1="5" x2="35" y1="180" y2="180"/>
    <line class="gallows" x1="10" x2="20" y1="180" y2="170"/>
    <line class="gallows" x1="20" x2="30" y1="170" y2="180"/>
    <circle id="head" cx="115" cy="55" r="15" fill="none"/>
  </svg>`,
  `<svg viewBox="0 0 155 190">
    <line class="gallows" x1="5" x2="115" y1="10" y2="10"/>
    <line class="gallows" x1="115" x2="115" y1="10" y2="35"/>
    <line class="gallows" x1="105" x2="125" y1="35" y2="35"/>
    <line class="gallows" x1="20" x2="20" y1="180" y2="10"/>
    <line class="gallows" x1="50" x2="20" y1="10" y2="40"/>
    <line class="gallows" x1="5" x2="35" y1="180" y2="180"/>
    <line class="gallows" x1="10" x2="20" y1="180" y2="170"/>
    <line class="gallows" x1="20" x2="30" y1="170" y2="180"/>
  </svg>`
]; // Array con los dibujos segun la vida restante
let categoria; //Categoria del juego
let data; //Datos traidos de los archivos locales y de la API
let listaPalabras; //Listado de palabras para el juego
let palabraElegida; //Palabra a adivinar
let palabraAdivinada = []; //Palabra que se va a ir formando
let largoPalabra = 0; //Largo de la palabra
let indice; //Indice de la palabra elegida
let vidas = 6; //Vidas en juego
let aciertos = 0; //Contador de letras acertadas
let letrasPedidas = []; //Letras que ya fueron ingresadas
let letraIngresada = ""; //Letra ingresada en cada iteración
class jugador {
  constructor (name) {
    this.nombre = name;
    this.jugadas = 0;
    this.puntaje = 0;
  }  
} // Clase para crear cada jugador
let jugadores =[]; // Array con los jugadores 
let cantidadJugadores; // Cantidad de jugadores que van a jugar
let turno = 0; // Indice de jugador en turno
let finTurno = false; // Booleano indicando fin de turno por acierto o sin vidas

const main = document.querySelector('main');
const rules = document.querySelector('#rules ul');
const players = document.querySelector('#players');
const names = document.querySelector('#names');
const numberOfPlayers = document.querySelector('#numberofplayers');
const posiciones = document.querySelector('#puntajes tbody');
const botonesCategoria = document.querySelectorAll('#select button');

botonesCategoria.forEach(boton => boton.addEventListener('click', () => traerPalabras(boton.dataset.url, boton.id)));
document.addEventListener('DOMContentLoaded', () => localStorage.getItem('juegoGuardado') && juegoGuardado()); // Si hay un juego guardado llama a funcion para cargarlo
document.querySelector('#guardar').addEventListener('click', guardarJuego);
document.querySelector('#finalizar').addEventListener('click', finalizarJuego);

/*************************************************/
/* Carga las palabras segun la categoria elegida */
/*************************************************/
async function traerPalabras (url, eleccion) {
  try {
    categoria = eleccion;
    const res = await fetch(url);
    data = await res.json();
    const palabras = data.results || data;
    listaPalabras = palabras.map((el) => el.name?.toUpperCase() || el);
    botonesCategoria.forEach(boton => boton.setAttribute('disabled',''));
    numberOfPlayers.classList.remove('d-none');
    players.select();
    players.focus();
  } 
  catch (error) {
    Swal.fire({
      icon: 'warning',
      title: 'Error al cargar las palabras',
      text: '',
      confirmButtonText: 'Elegir otra categoria',
      showDenyButton: true,
      denyButtonText: 'Reintentar',
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.isDenied) {
        traerPalabras (url, eleccion);
      }
    });
  }
}

/*******************************************************************************************/
/* Cuando se ingresa la cantidad de jugadores se arman los inputs para colocar los nombres */
/*******************************************************************************************/
numberOfPlayers.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const start = document.querySelector('#start');
  players.setAttribute('disabled', '');
  start.setAttribute('disabled', '');
  cantidadJugadores = Number(players.value);
  for (let i = 1; i <= cantidadJugadores; i += 1) {
    names.innerHTML += /*html*/
    `
    <div>
      <label for="player${i}">Nombre Jugador ${i}:</label>
      <input type="text" name="player${i}" id="player${i}" required size = 10>
    </div>
    `;
  }
  names.innerHTML += /*html*/
  `
  <div id="saveNames">
    <button>Guardar nombre/s</button>
  </div>
  `;
  document.querySelector('#player1').select();
  document.querySelector('#player1').focus();
});

/***************************************************/
/* Crea cada jugador dentro del array de jugadores */
/***************************************************/
names.addEventListener('submit', (ev) => {
  ev.preventDefault();
  for (let i = 1; i <= cantidadJugadores; i += 1) {
    const player = document.querySelector('#player' + i);
    jugadores[i-1] = new jugador(player.value.toUpperCase());
  }
  juego();
});

/********************/
/* Inicio del juego */
/********************/
function juego() {
  actualizarPosiciones();
  if (cantidadJugadores == 1 || categoria != 'clasico') {
    elegirPalabra(true);
  } else {
    Swal.fire({
      icon: 'question',
      title: `Turno de ${jugadores[turno].nombre}`,
      text: '¿Quieres usar una palabra aleatoria o que un contrincante ingrese una nueva?',
      input: 'text',
      inputPlaceholder: 'Ingrese palabra',
      showDenyButton: true,
      denyButtonText: 'Palabra aleatoria',
      confirmButtonText: 'Palabra ingresada',
      allowOutsideClick: false,
      allowEscapeKey: false,
      inputValidator: (value) => {
        if (!value) {
          return 'Ingresa una palabra';
        } else if (/[^a-zñ]/i.test(value)) {
          return 'Ingresa solo letras'
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        palabraElegida = result.value.toUpperCase();
        elegirPalabra(false);
      } else if (result.isDenied) {
        elegirPalabra(true);
      }
    })
  }
}

/**********************************************************************************************/
/* Si se envia un true elige una palabra al azar de la lista sino juega con la que se ingreso */
/**********************************************************************************************/
function elegirPalabra(aleatoria) {
  if (aleatoria) {
    indice = Math.floor(Math.random()*listaPalabras.length);
    palabraElegida = listaPalabras[indice];
  }
  palabraElegida = palabraElegida.split('');
  largoPalabra = palabraElegida.length;
  palabraElegida.forEach(() => palabraAdivinada.push('-')); // Crea la palabra que se va formando con un guion por cada letra de la palabra elegida
  tablero();
}

/****************************/
/* Arma el tablero de juego */
/****************************/
function tablero () {
  document.querySelector('#piePagina').classList.remove('d-none');
  document.querySelector('header button').classList.remove('d-none');
  rules.classList.add('dropdown-menu');
  document.querySelector('#rulesButton').appendChild(rules);
  borrarHtml(main);
  main.innerHTML = /*html*/
  `
  <h3 id="category">Categoria: ${categoria.toUpperCase()}</h3>
  <h5 id="title">TURNO DE ${jugadores[turno].nombre}</h5>
  <div id="lifes"></div>
  <div id="imagen"></div>
  <div id="word-in-game"></div>
  <div id="letters">
    <div class="fila">
      <button class="letter" id="Q">Q</button>
      <button class="letter" id="W">W</button>
      <button class="letter" id="E">E</button>
      <button class="letter" id="R">R</button>
      <button class="letter" id="T">T</button>
      <button class="letter" id="Y">Y</button>
      <button class="letter" id="U">U</button>
      <button class="letter" id="I">I</button>
      <button class="letter" id="O">O</button>
      <button class="letter" id="P">P</button>
    </div>
    <div class="fila">
      <button class="letter" id="A">A</button>
      <button class="letter" id="S">S</button>
      <button class="letter" id="D">D</button>
      <button class="letter" id="F">F</button>
      <button class="letter" id="G">G</button>
      <button class="letter" id="H">H</button>
      <button class="letter" id="J">J</button>
      <button class="letter" id="K">K</button>
      <button class="letter" id="L">L</button>
      <button class="letter" id="Ñ">Ñ</button>
    </div>
    <div class="fila">
      <button class="letter" id="Z">Z</button>
      <button class="letter" id="X">X</button>
      <button class="letter" id="C">C</button>
      <button class="letter" id="V">V</button>
      <button class="letter" id="B">B</button>
      <button class="letter" id="N">N</button>
      <button class="letter" id="M">M</button>
    </div>
  </div>
  `;
  main.setAttribute('id', 'tablero');
  letras = document.querySelector('#letters');
  letras.addEventListener('click', clickLetra);
  document.addEventListener('keyup', teclado);
  render();
}

/************************/
/* Actualiza el tablero */
/************************/
function render () {
  const lifes = document.querySelector('#lifes');
  const imagen = document.querySelector('#imagen');
  const wordInGame = document.querySelector('#word-in-game');
  lifes.innerHTML = `<p>Vidas restantes: ${vidas}</p>`;
  imagen.innerHTML = personaje[vidas];
  wordInGame.innerHTML = '';
  for (let letra in palabraAdivinada) {
    wordInGame.innerHTML += /*html*/
    `
    <div class="letras">${palabraAdivinada[letra]}</div>
    `;
  }
}

/********************************************************** */
/* Borra el html interno del elemento pasado como parametro */
/********************************************************** */
function borrarHtml (elemento) {
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  } 
}

/*********************************************************/
/* Eventos para ingresos de letras por botones o teclado */
/*********************************************************/
function clickLetra (evt) {
  if(evt.target.classList.contains('letter')) {
    letraIngresada = evt.target.innerHTML;
    comprobarLetra(evt.target);
  }
}
function teclado (tecla) {
  letraIngresada = tecla.key.toUpperCase();
  const letrasAbecedario = document.querySelectorAll('.letter');
  letrasAbecedario.forEach(letra => {
    if (letra.innerHTML ==  letraIngresada){  
      comprobarLetra(letra);
    }
  });
}

/*****************************************************************************************/
/* Comprueba si la letra esta en la palabra y suma aciertos, o resta vidas si no lo esta */
/*****************************************************************************************/
function comprobarLetra (boton) {
  boton.setAttribute('disabled', '');
  if (!letrasPedidas.some(letraPedida => letraPedida == letraIngresada)) {
    letrasPedidas.push(letraIngresada);
    let conta = 0;
    for (let letra in palabraElegida) {
      if (letraIngresada == palabraElegida[letra]) {
        palabraAdivinada[letra] = letraIngresada;
        conta += 1;
      }
    }
    let texto;
    let colorFondo;
    if (conta == 0) {
      vidas -= 1;
      boton.classList.add('fallo');
      texto = 'Letra incorrecta';
      colorFondo = 'rgb(255, 10, 31), rgb(255, 195, 113)';
    } else {
      aciertos += conta;
      boton.classList.add('acierto');
      texto = 'Letra correcta';
      colorFondo = 'rgb(34, 159, 0), rgb(150, 201, 61)';
    }
    Toastify({
      text: texto,
      duration: 1000,
      position: 'center',
      gravity: 'top',
      offset: {
        y: '100%',
      },
      style: {
        background: `linear-gradient(to right, ${colorFondo})`,
      }
    }).showToast();
  }
  comprobarEstado();
}

/*****************************************************************/
/* Comprueba si se acabaron las vidas o si se adivino la palabra */
/*****************************************************************/
async function comprobarEstado () {
  let resultado;
  let mensaje;
  let icono;
  if (vidas == 0) {
    palabraAdivinada = palabraElegida;
    document.querySelector('#word-in-game').classList.add('no-ok');
    resultado = `Has fallado ${jugadores[turno].nombre}`;
    mensaje = `La palabra era ${palabraElegida.join('')}. No has sumado puntos.`;
    icono = 'error';
    finTurno = true;
  } else if (aciertos == largoPalabra) {
    jugadores[turno].puntaje += vidas;
    document.querySelector('#word-in-game').classList.add('ok');
    resultado = `Felicitaciones ${jugadores[turno].nombre}, has acertado!!!`;
    mensaje = `La palabra es ${palabraElegida.join('')}. Sumaste ${vidas} punto/s.`;
    icono = 'success';
    finTurno = true;
  }
  if (finTurno) {
    jugadores[turno].jugadas += 1;
    finTurno = false;
    document.removeEventListener('keyup', teclado);
    document.querySelector('#letters').removeEventListener('click', clickLetra);
    if (turno + 1 == cantidadJugadores) {
      turno = 0;
    } else {
      turno += 1;
    }
    palabraElegida = [];
    palabraAdivinada = [];
    largoPalabra = 0;
    vidas = 6;
    aciertos = 0;
    letraIngresada = '';
    letrasPedidas = [];  
    actualizarPosiciones();
    switch (categoria) {
      case 'pokemons':
        mensaje += `<br><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indice+1}.png" alt="">`;
        break;
      case 'paises':
        mensaje += `<br><div id="bandera"><img src="https://flagcdn.com/w80/${data[indice].id}.jpg" alt=""></div>`;
      default:
        break;
    }
    elegir(resultado, mensaje, icono);
  }
  render();
}

/*********************************************************/
/* Actualiza la tabla de posiciones en orden descendente */
/*********************************************************/
function actualizarPosiciones () {
  const jugadoresOrdenados = jugadores.map(jugador => jugador);
  jugadoresOrdenados.sort((a, b) => b.puntaje - a.puntaje);
  borrarHtml(posiciones);
  for (let i = 0; i < cantidadJugadores; i += 1) {
    posiciones.innerHTML += /*html*/
    `
    <tr>
      <th>${i + 1}</th>
      <td class="name">${jugadoresOrdenados[i].nombre}</td>
      <td>${jugadoresOrdenados[i].jugadas}</td>
      <td>${jugadoresOrdenados[i].puntaje}</td>
    </tr>
    `;
  }
}

/********************************************************************/
/* Permite elegir si seguir jugando, guardar el juego o finalizarlo */
/********************************************************************/
function elegir (resultado, mensaje, icono) {
  Swal.fire({
    icon: icono,
    title: resultado,
    html: mensaje,
    confirmButtonText: 'Siguiente turno',
    showDenyButton: true,
    denyButtonText: 'Guardar juego',
    showCancelButton: true,
    cancelButtonText: 'Finalizar juego',
    allowOutsideClick: false,
    allowEscapeKey: false,
    preDeny: guardarJuego,
  }).then((result) => {
    if (result.isConfirmed) {
      juego();
    } else {
      finalizarJuego();
    }
  });
}

/********************************************/
/* Guarda las variables en el local storage */
/********************************************/
function guardarJuego () {
  const juegoGuardado = {
    palabraElegida_g: palabraElegida,
    palabraAdivinada_g: palabraAdivinada,
    vidas_g: vidas,
    aciertos_g: aciertos,
    letrasPedidas_g: letrasPedidas,
    jugadores_g: jugadores,
    turno_g: turno,
    categoria_g: categoria,
    indice_g: indice
  }
  localStorage.setItem('juegoGuardado', JSON.stringify(juegoGuardado));
  return false;
}

/************************************************************************/
/* Muestra el juego guardado y pregunta si cargarlo o empezar uno nuevo */
/************************************************************************/
function juegoGuardado () {
  const juegoCargado = JSON.parse(localStorage.getItem('juegoGuardado'));
  jugadores = juegoCargado.jugadores_g;
  cantidadJugadores = jugadores.length;
  actualizarPosiciones();
  const tabla = document.querySelector('table').cloneNode(true);
  Swal.fire({
    icon: 'question',
    title: 'Hay un juego guardado',
    html: tabla,
    showDenyButton: true,
    denyButtonText: 'Juego nuevo',
    confirmButtonText: 'Continuar juego',
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      cargarJuego(juegoCargado);
    } else if (result.isDenied) {
      localStorage.clear();
    }
  });
}

/************************************************************/
/* Carga el juego guardado desde el estado en que se guardo */
/************************************************************/
async function cargarJuego ({palabraElegida_g, palabraAdivinada_g, vidas_g, aciertos_g, letrasPedidas_g, turno_g, categoria_g, indice_g}) {
  turno = turno_g;
  categoria = categoria_g;
  let categoriaElegida = document.querySelector(`#${categoria}`);
  await traerPalabras(categoriaElegida.dataset.url, categoria);
  if (palabraElegida_g.length != 0) {
    palabraElegida = palabraElegida_g;
    largoPalabra = palabraElegida.length;
    palabraAdivinada = palabraAdivinada_g;
    vidas = vidas_g;
    aciertos =aciertos_g;
    letrasPedidas = letrasPedidas_g;
    indice = indice_g;
    tablero();
    letrasPedidas.forEach(letraPedida => {
      const boton = document.querySelector(`#${letraPedida}`);
      boton.setAttribute('disabled', '');
      if (palabraElegida.some((letra) => letra == letraPedida)) {  
        boton.classList.add('acierto');
      } else {
        boton.classList.add('fallo');
      }
    });
  } else {
    juego();
  }
}

/*******************************************************************/
/* Muestra las posiciones finales y permite iniciar un nuevo juego */
/*******************************************************************/
function finalizarJuego () {
  localStorage.clear();
  const tabla = document.querySelector('table');
  Swal.fire({
    icon: 'info',
    title: 'Tabla de posiciones',
    html: tabla,
    confirmButtonText: 'Juego nuevo',
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    }
  });
}

