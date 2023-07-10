let listaPalabras = ["adorable", "biblioteca", "cantidad", "delicioso", "escritorio", "fantastico", "generoso", "hospital", "invierno", "jardin", "kilometro", "luminoso", "maravilla", "navegador", "oportunidad", "pasaporte", "querencia", "resplandor", "sinfonia", "ternura", "unicidad", "vagabundo", "xilofono", "yacimiento", "zumbido", "agonia", "bendicion", "campeonato", "diversion", "esperanza", "festejo", "gigante", "himnario", "improvisar", "juventud", "kilogramo", "luminaria", "mariposa", "nostalgia", "ocasion", "pantalla", "quimica", "resplendor", "sabado", "ternero", "ultimo", "vagancia", "xerografia", "yerbatero", "zurcir", "agraciado", "belleza", "caramelo", "destino", "elegante", "festejar", "gitano", "hermoso", "impacto", "joyeria", "kilovatio", "luminosidad", "maravilloso", "noticia", "oceano", "palabra", "quirofano", "restaurante", "satisfaccion", "territorio", "unidad", "vagabundear", "xilografia", "yacimiento", "zurdo", "agradecido", "busqueda", "caramelizado", "desafio", "euforia", "felicidad", "glorioso", "hechizo", "impresionante", "juicioso", "kilometro", "luminancia", "margarita", "nubes", "ocasional", "pasion", "quisquilloso", "resplandeciente", "sobremesa", "travesia", "ultimo", "vagabundeo", "xilofono", "yacimiento", "zumbido"];
let palabraElegida = "";
let palabraAdivinada = [];
let largoPalabra = 0;
let vidas = 6;
let aciertos = 0;
let letraIngresada = "";
let letrasPedidas = [""];
let nombre = "";
let seguirJugando = true;

function elegirPalabra() {
  let indice = Math.floor(Math.random()*100);
  palabraElegida = listaPalabras[indice];
  largoPalabra = palabraElegida.length;
  for (let i = 0; i < largoPalabra; i += 1) {
    palabraAdivinada.push("_") 
  }
  return
}

function mostrarTablero() {
  console.log("Te quedan " + vidas + " vidas")
  console.log(palabraAdivinada.join(" "))
}

function pedirLetra() {
  let letraOk = false;
  while (!letraOk){
    letraIngresada = prompt("Ingresa una letra...");
    if (letraIngresada.length != 1) {
      console.log("Ingresa una sola letra.");
    } else {
      if (letraIngresada >= "a" && letraIngresada <= "z" || letraIngresada >= "A" && letraIngresada <= "Z") {
        letraIngresada = letraIngresada.toLocaleLowerCase()
        for (letra in letrasPedidas) {
          if (letraIngresada == letrasPedidas[letra]) {
            console.log("Ya ingresaste esa letra")
            letraOk = false
            break
          } else {
            letraOk = true
          }
        }
      } else { 
        console.log('Ingresaste "' + letraIngresada + '", no es una letra.')
      }
    }
  }
  console.log('Ingresaste "' + letraIngresada + '"')
}

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
    console.log('La letra "' + letraIngresada + '" no esta en la palabra')
  } else {
    aciertos += conta;
    console.log('La letra "' + letraIngresada + '" esta en la palabra')

  }
}


do {
  palabraElegida = "";
  palabraAdivinada = [];
  largoPalabra = 0;
  vidas = 6;
  aciertos = 0;
  letraIngresada = "";
  letrasPedidas = [""];
  nombre = "";
  seguirJugando = true;
  console.clear();
  nombre = prompt("Ingrese su nombre");
  alert("Bienvenido " + nombre + ". Vamos a jugar al ahorcado.");
  elegirPalabra()
  while(true){
    mostrarTablero()
    pedirLetra()
    comprobarLetra()
    if (vidas == 0) {
      alert('Has perdido. La palabra era "' + palabraElegida + '".' )
      break
    }
    if (aciertos == largoPalabra) {
      alert('Felicitaciones, has ganado. La palabra es "' + palabraElegida + '".' )
      break
    }
    console.log("----------------------------------")
  }
  seguirJugando = confirm("¿Quieres volver a jugar?")
}while (seguirJugando)






//

