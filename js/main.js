/*************/
/* Variables */
/*************/
let listaPalabras = ["ADORABLE", "BIBLIOTECA", "CANTIDAD", "DELICIOSO", "ESCRITORIO", "FANTASTICO", "GENEROSO", "HOSPITAL", "INVIERNO", "JARDIN", "KILOMETRO", "LUMINOSO", "MARAVILLA", "NAVEGADOR", "OPORTUNIDAD", "PASAPORTE", "QUERENCIA", "RESPLANDOR", "SINFONIA", "TERNURA", "UNICIDAD", "VAGABUNDO", "XILOFONO", "YACIMIENTO", "ZUMBIDO", "AGONIA", "BENDICION", "CAMPEONATO", "DIVERSION", "ESPERANZA", "FESTEJO", "GIGANTE", "HIMNARIO", "IMPROVISAR", "JUVENTUD", "KILOGRAMO", "LUMINARIA", "MARIPOSA", "NOSTALGIA", "OCASION", "PANTALLA", "QUIMICA", "RESPLENDOR", "SABADO", "TERNERO", "ULTIMO", "VAGANCIA", "XEROGRAFIA", "YERBATERO", "ZURCIR", "AGRACIADO", "BELLEZA", "CARAMELO", "DESTINO", "ELEGANTE", "FESTEJAR", "GITANO", "HERMOSO", "IMPACTO", "JOYERIA", "KILOVATIO", "LUMINOSIDAD", "MARAVILLOSO", "NOTICIA", "OCEANO", "PALABRA", "QUIROFANO", "RESTAURANTE", "SATISFACCION", "TERRITORIO", "UNIDAD", "VAGABUNDEAR", "XILOGRAFIA", "YACIMIENTO", "ZURDO", "AGRADECIDO", "BUSQUEDA", "CARAMELIZADO", "DESAFIO", "EUFORIA", "FELICIDAD", "GLORIOSO", "HECHIZO", "IMPRESIONANTE", "JUICIOSO", "KILOMETRO", "LUMINANCIA", "MARGARITA", "NUBES", "OCASIONAL", "PASION", "QUISQUILLOSO", "RESPLANDECIENTE", "SOBREMESA", "TRAVESIA", "ULTIMO", "VAGABUNDEO", "XILOFONO", "YACIMIENTO", "ZUMBIDO"];
let palabraElegida = ""; //Palabra a adivinar
let palabraAdivinada = []; //Palabra que se va a ir formando
let largoPalabra = 0; //Largo de la palabra
let vidas = 6; //Vidas en juego
let aciertos = 0; //Contador de letras acertadas
let letraIngresada = ""; //Letra ingresada en cada iteración
let letrasPedidas = []; //Letras que ya fueron ingresadas
let nombre = ""; //Nombre del jugador
let seguirJugando = true; //Booleano para volver a jugar

/*****************************************************/
/* Funcion que elige una palabra al azar de la lista */
/*****************************************************/
function elegirPalabra() {
  let indice = Math.floor(Math.random()*100);
  palabraElegida = listaPalabras[indice];
  largoPalabra = palabraElegida.length;
  for (let i = 0; i < largoPalabra; i += 1) {
    palabraAdivinada.push("_") 
  }
  return
}

/***************************************************************************/
/* Funcion que muestra la palabra que se va formando y las vidas restantes */
/***************************************************************************/
function mostrarTablero() {
  console.log(palabraAdivinada.join(" "))
  console.log("Te quedan " + vidas + " vidas")
  console.log("Letras ya pedidas: " + letrasPedidas.join(","))
}

/************************************************************************************/
/* Funcion que pida una letra y verifica que se ingrese un solo caracter alfabetico */
/************************************************************************************/
function pedirLetra() {
  let letraOk = true;
  do {
    letraOk = true
    letraIngresada = prompt("Ingresa una letra...");
    if (letraIngresada.length != 1) {
      console.warn("Ingresa una sola letra.");
      letraOk = false
    } else {
      if (letraIngresada >= "a" && letraIngresada <= "z" || letraIngresada >= "A" && letraIngresada <= "Z") {
        letraIngresada = letraIngresada.toUpperCase()
        for (letra in letrasPedidas) {
          if (letraIngresada == letrasPedidas[letra]) {
            console.warn("Ya ingresaste esa letra")
            letraOk = false
            break
          }
        }
      } else { 
        console.warn('Ingresaste "' + letraIngresada + '", no es una letra.')
        letraOk = false
      }
    }
  }while (!letraOk)
  console.clear()
  console.log('Ingresaste "' + letraIngresada + '"')
}

/*****************************************************************************************************/
/* Funcion que comprueba si la letra esta en la palabra y suma aciertos, o resta vidas si no lo esta */
/*****************************************************************************************************/
function comprobarLetra() {
  let conta = 0;
  letrasPedidas.push(letraIngresada);
  for (letra in palabraElegida) {
    if (letraIngresada == palabraElegida[letra]) {
      palabraAdivinada[letra] = letraIngresada;
      conta += 1;
    }
  }
  if (conta == 0) {
    vidas -= 1;
    console.error('La letra "' + letraIngresada + '" no esta en la palabra')
  } else {
    aciertos += conta;
    console.log('La letra "' + letraIngresada + '" esta en la palabra')
  }
}


/**********************/
/* Programa principal */
/**********************/

do {
  //Inicializo variables y borro consola en cada juego nuevo
  palabraElegida = "";
  palabraAdivinada = [];
  largoPalabra = 0;
  vidas = 6;
  aciertos = 0;
  letraIngresada = "";
  letrasPedidas = [];
  nombre = "";
  seguirJugando = true;
  console.clear();

  nombre = prompt("Ingrese su nombre").toUpperCase();
  alert("Bienvenido " + nombre + ". Vamos a jugar al ahorcado.");
  elegirPalabra()

  //Se piden letras hasta que adivine la palabra o se quede sin vidas
  while(true){
    mostrarTablero()
    pedirLetra()
    comprobarLetra()
    if (vidas == 0) {
      mostrarTablero()
      alert('Has perdido ' + nombre + '. La palabra era "' + palabraElegida + '".' )
      break
    }
    if (aciertos == largoPalabra) {
      mostrarTablero()
      alert('Felicitaciones ' + nombre + ', has ganado!!! La palabra es "' + palabraElegida + '".' )
      break
    }
  }
  //Pregunto si quiere iniciar un nuevo juego
  seguirJugando = confirm("¿Quieres volver a jugar?")
}while (seguirJugando)