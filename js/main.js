/*************/
/* Variables */
/*************/
const listaPalabras = ["ABANDONADO", "ABANDONAR", "ABASTECER", "ABATIDO", "ABDOMEN", "ABERTURA", "ABOGADO", "ABORTAR", "ABRASIVO", "ABSORBER", "ABSTENER", "ABUELA", "ACANTILADO", "ACELERAR", "ACENTUAR", "ACEPTAR", "ACERTIJO", "ACIERTO", "ACLARAR", "ACOMODAR", "ACONSEJAR", "ACORDEON", "ACOSTAR", "ACTIVIDAD", "ACTUALIZAR", "ADELANTE", "ADICTO", "ADIESTRAR", "ADOPCION", "ADORABLE", "ADORNAR", "ADUANA", "ADULTO", "AFECTAR", "AFICIONADO", "AFRICANO", "AGILIDAD", "AGONIA", "AGOTADO", "AGRACIADO", "AGRADECIDO", "AGREGAR", "AGRICULTOR", "AGUJERO", "AHOGADO", "AHORRAR", "AIREADO", "AJUSTAR", "ALCANZAR", "ALEGRIA", "ALENTAR", "ALMACENAR", "ALMOHADA", "ALQUILAR", "ALTERAR", "ALUMNO", "AMABLE", "AMARILLO", "AMBIENTAL", "AMISTAD", "AMOROSO", "ANALIZAR", "ANCIANO", "ANDAMIO", "ANFITRION", "ANGUSTIA", "ANIMAL", "ANOTAR", "ANSIEDAD", "ANTENA", "ANTIGUO", "ANUNCIAR", "APARECER", "APARIENCIA", "APASIONADO", "APLAUDIR", "APLICAR", "APODERADO", "APRENDER", "APROBAR", "APROVECHAR", "APROXIMAR", "AQUEJAR", "ARANDANO", "ARBOLADO", "ARCHIVO", "ARGENTINO", "ARMONIA", "ARQUITECTO", "ARREGLAR", "ARRIESGAR", "ARROJAR", "ARTISTICO", "ASAMBLEA", "ASCENDER", "ASESORAR", "ASFIXIAR", "ASIENTO", "ASOCIAR", "ASOMBRAR", "ASPIRAR", "ASUSTAR", "ATAQUE", "ATENDER", "ATERRIZAR", "ATLETA", "ATMOSFERA", "ATREVERSE", "AUMENTAR", "AUTORIDAD", "AVENTURA", "AVERGONZAR", "AYUDAR", "AZOTAR", "BACTERIA", "BAILARIN", "BANDERAS", "BARAJA", "BARRIGA", "BASTANTE", "BATERIA", "BELLEZA", "BENDICION", "BENEFICIO", "BIBLIOTECA", "BIENESTAR", "BIOLOGIA", "BOHEMIO", "BOLIGRAFO", "BOMBERO", "BOTELLA", "BOXEADOR", "BUSQUEDA", "CABALLERO", "CABALLO", "CABELLO", "CACEROLA", "CACHORRO", "CALCULAR", "CALIDAD", "CALORIA", "CALZADO", "CAMARA", "CAMBIAR", "CAMINO", "CAMPEONATO", "CANTIDAD", "CAPACIDAD", "CAPITULO", "CAPTURAR", "CARACTER", "CARAMELIZADO", "CARAMELO", "CARICIA", "CARPETA", "CARRETA", "CASTIGAR", "CATASTROFE", "CAUSAR", "CELEBRAR", "CELULA", "CEPILLO", "CEREBRO", "CERRAR", "CHAMAN", "CHAMARRA", "CHAPUZON", "CHIFLADO", "CHISME", "CHOCAR", "CHUPAR", "CICATRIZ", "CIENTIFICO", "CILINDRO", "CINEASTA", "CINTURA", "CIRCUITO", "CIUDAD", "CLAMAR", "CLINICA", "COCINAR", "COHETE", "COLINA", "COLLAR", "COLONIA", "COMANDO", "COMEDIA", "COMENZAR", "COMIDA", "COMODIDAD", "COMODO", "COMPRAR", "CONCEBIR", "CONCEPTO", "CONCIERTO", "CONCLUSION", "CONCURSO", "CONDICION", "CONECTAR", "CONFESAR", "CONFIANZA", "CONFLICTO", "CONFORT", "CONGELAR", "CONOCER", "CONQUISTA", "CONSEGUIR", "CONSENTIR", "CONSOLAR", "CONSTRUIR", "CONSUMIR", "CONTACTO", "CONTENER", "CONTINUAR", "CONTROLAR", "CONVENCER", "CORAZON", "COSTUMBRE", "CREPUSCULO", "CRIANZA", "CRISTAL", "CRUCERO", "CRUCIAL", "CRUELDAD", "CUADERNO", "CUADRO", "CUARTO", "CUATRO", "CUCHARA", "CUCHILLO", "CUERDA", "CUESTA", "CULTIVAR", "CULTURA", "CUMBRE", "CUMPLIR", "CUPULA", "CURIOSO", "CUSPIDE", "DECENTE", "DECIDIDO", "DECIDIR", "DECLARAR", "DECODIFICAR", "DECOLORAR", "DECORAR", "DECORO", "DECRETO", "DEFENSA", "DEFINIR", "DEFRAUDAR", "DEGRADAR", "DELANTE", "DELANTERO", "DELEITE", "DELGADO", "DELICIOSO", "DEMANDAR", "DEMOCRACIA", "DEMORAR", "DENTRO", "DENUNCIAR", "DEPENDER", "DEPORTAR", "DEPORTISTA", "DERECHO", "DERIVAR", "DERRAMAR", "DERRETIR", "DESAFIO", "DESFILE", "DESGARRAR", "DESGASTE", "DESGLOSAR", "DESHACER", "DESIERTO", "DESLIZAR", "DESMAYAR", "DESNUDO", "DESPERTAR", "DESTACAR", "DESTINO", "DESVELAR", "DETALLE", "DETECTAR", "DEVOLVER", "DEVORAR", "DIBUJAR", "DIFICIL", "DIFUNDIR", "DIGITAL", "DILIGENTE", "DIMENSION", "DINERO", "DIRIGIR", "DISCUTIR", "DISFRUTAR", "DISOLVER", "DISPARAR", "DISPONER", "DISTANCIA", "DISTINTO", "DIVERSION", "DIVERSO", "DIVERTIDO", "DIVIDIR", "DOBLAR", "DOLOROSO", "DOMINAR", "DORADO", "DURADERO", "DURAZNO", "EFECTIVO", "EFECTO", "EGOISTA", "EJECUTAR", "EJEMPLO", "ELECCION", "ELEFANTE", "ELEGANTE", "ELIMINAR", "ELUDIR", "EMBARCAR", "EMBARGO", "EMOCION", "EMPACAR", "EMPAPAR", "EMPATAR", "EMPRENDER", "ENAMORADO", "ENAMORAR", "ENCENDER", "ENCOMENDAR", "ENCONTRAR", "ENCUESTA", "ENDULZAR", "ENDURECER", "ENEMIGO", "ENERGIA", "ENFOCAR", "ENIGMA", "ENJUAGAR", "ENLOQUECER", "ENORME", "ENREDAR", "ENSUCIAR", "ENTENDER", "ENTREGAR", "ENTRENAR", "ENVOLVER", "ENZARZAR", "ERRORES", "ERUPCION", "ESCALERA", "ESCAPAR", "ESCONDER", "ESCRIBIR", "ESCRITOR", "ESCRITORIO", "ESCUCHAR", "ESFERA", "ESGRIMA", "ESPEJO", "ESPERANZA", "ESQUINA", "ESTACION", "ESTADO", "ESTATURA", "ESTILO", "ESTIRAR", "ESTOMAGO", "ESTUDIAR", "ETIQUETA", "EUFORIA", "EUROPA", "EVALUACION", "EVENTO", "EXACTO", "EXAMEN", "EXCESO", "EXCUSA", "EXHALAR", "EXIGENTE", "EXISTIR", "EXOTICO", "EXPERIMENTO", "EXPLICAR", "EXPLORAR", "EXPONER", "EXTENDER", "EXTRAER", "EXTRAVIAR", "FABRICAR", "FABULA", "FACTOR", "FALLECER", "FAMILIA", "FANTASMA", "FANTASTICO", "FARAON", "FASCINANTE", "FAVORITO", "FELICIDAD", "FESTEJAR", "FESTEJO", "FILTRAR", "FINALIZAR", "FINANCIAR", "FLAMENCO", "FOMENTAR", "FORJAR", "FORMAR", "FORTALEZA", "FOTOGRAFIA", "FRAGANCIA", "FRASCO", "FRENTE", "FRUNCIR", "FUNCIONAR", "FUNDAR", "FURIOSO", "FUTBOL", "FUTURO", "GABARDINA", "GALAXIA", "GALERIA", "GANADOR", "GARANTIA", "GARGANTA", "GASTAR", "GENERAR", "GENEROSO", "GIGANTE", "GIRASOL", "GITANO", "GLORIOSO", "GOBERNAR", "GOBIERNO", "GOLPEAR", "GORGOTEO", "GOURMET", "GRADUAR", "GRANIZO", "GRISACEO", "GRUESO", "GUARDAR", "GUERRA", "GUITARRA", "GUSTAR", "HABILIDAD", "HABITAR", "HABITO", "HABLAR", "HALCON", "HALLAZGO", "HAMBRE", "HARINA", "HECHIZO", "HERMOSO", "HERRAMIENTA", "HIGIENE", "HISTORIA", "HOCICO", "HOLGADO", "HOMBRE", "HONESTO", "HORMIGA", "HORROR", "HOSPITAL", "HUELGA", "HUELLA", "HUERTO", "HUMANIDAD", "HUMEDAD", "HUMILDE", "HUNDIR", "HURACAN", "HURGAR", "IDENTIFICAR", "IDIOMA", "IGNORAR", "ILUSION", "IMAGEN", "IMAGINAR", "IMITAR", "IMPACTO", "IMPEDIR", "IMPERIO", "IMPLORAR", "IMPONER", "IMPORTAR", "IMPRESIONANTE", "IMPRIMIR", "IMPROVISAR", "IMPULSAR", "IMPULSO", "INCENDIO", "INCLUIR", "INDICAR", "INDIVIDUO", "INFANCIA", "INFLUIR", "INFORMAR", "INGENIO", "INGRESAR", "INICIAR", "INMENSIDAD", "INMIGRAR", "INMORTAL", "INQUIETO", "INSISTIR", "INSOMNIO", "INSTANTE", "INSTRUIR", "INTEGRAR", "INTEGRO", "INTENSO", "INTENTAR", "INTERCAMBIAR", "INTERES", "INTERNO", "INTIMAR", "INTUIR", "INUNDAR", "INVENTAR", "INVERTIR", "INVESTIGAR", "INVIERNO", "INVITAR", "IRONICO", "ITALIANO", "JARDIN", "JIRAFA", "JOYERIA", "JUEVES", "JUGADOR", "JUICIOSO", "JUNTOS", "JURADO", "JUSTICIA", "JUVENTUD", "KILOGRAMO", "KILOMETRO", "KILOVATIO", "LABERINTO", "LADRON", "LAGRIMA", "LAGUNA", "LAMENTAR", "LAMPARA", "LANZAR", "LAPICERO", "LAVABO", "LEALTAD", "LECTOR", "LEGADO", "LEGUMBRE", "LENGUA", "LEYENDA", "LIBERTAD", "LIBRERIA", "LICENCIA", "LIMITE", "LIMPIAR", "LINTERNA", "LIQUIDO", "LLEGADA", "LLUVIA", "LOGICA", "LONCHERA", "LONGITUD", "LUCHAR", "LUMINARIA", "LUMINOSIDAD", "LUMINOSO", "MADERA", "MALDAD", "MALVADO", "MAQUINA", "MARAVILLA", "MARAVILLOSO", "MARCAR", "MARCHA", "MARGARITA", "MARGEN", "MARIDO", "MARIPOSA", "MARTILLO", "MASAJE", "MASCAR", "MASCOTA", "MATERIA", "MATRIMONIO", "MAXIMO", "MECEDORA", "MEDICINA", "MEJILLA", "MEJORAR", "MELENA", "MELODIA", "MEMORIA", "MENTIR", "MERIENDA", "MERMELADA", "METEORITO", "MIGRAR", "MILAGRO", "MINIMO", "MIRADA", "MISTERIO", "MOCHILA", "MODULO", "MOLESTAR", "MOLINO", "MOMENTO", "MONEDA", "MORADA", "MOROSO", "MOSAICO", "MOTIVO", "MOVIMIENTO", "MUCHACHO", "MULTIPLE", "MURALLA", "MURMULLO", "MUSCULO", "MUSICA", "NACION", "NARANJA", "NATACION", "NATURALEZA", "NAVEGADOR", "NAVEGAR", "NECESITAR", "NERVIOSO", "NITIDO", "NOBLEZA", "NOCIVO", "NOMADA", "NOSTALGIA", "NOTICIA", "NOVATO", "NOVELA", "NUCLEO", "NUMERO", "NUTRIR", "OBEDECER", "OBISPO", "OBJETO", "OBLIGAR", "OBSERVAR", "OCASION", "OCASIONAL", "OCEANO", "OCULTAR", "OCUPAR", "OFENDER", "OFERTA", "OFICINA", "OMITIR", "ONEROSO", "OPINAR", "OPONER", "OPORTUNIDAD", "OPUESTO", "ORACION", "ORGULLO", "ORIENTE", "ORQUESTA", "OSCURO", "OVACION", "PAJARO", "PALABRA", "PALIDO", "PALOMA", "PALPITAR", "PANADERIA", "PANCARTA", "PANICO", "PANTALLA", "PANTALON", "PAQUETE", "PARACAIDAS", "PARAGUAS", "PAREJA", "PARIENTE", "PARQUE", "PARTIR", "PASAPORTE", "PASILLO", "PASION", "PASTOR", "PATENTE", "PATINAR", "PATRIA", "PATRON", "PEATON", "PECADO", "PEGAJOSO", "PEINADO", "PELICULA", "PELIGRO", "PELOTA", "PENOSO", "PENSAR", "PERDER", "PERFORAR", "PERICO", "PERMISO", "PERSONAL", "PERTENECER", "PESADO", "PETALO", "PETROLEO", "PIERNA", "PIJAMA", "PIMIENTA", "PINTURA", "PIRATA", "PIZARRA", "PLANTA", "PLURAL", "PODRIDO", "POESIA", "POLITICA", "POLIZA", "POMADA", "POMELO", "PORCION", "PORDIOSERO", "PORQUE", "PORTON", "POSIBLE", "POSTAL", "POSTRE", "POTENCIA", "PRACTICA", "PRACTICO", "PRADERA", "PREGUNTA", "PRESENTAR", "PRESION", "PREVENIR", "PRINCESA", "PRISION", "PRIVADO", "PROBLEMA", "PROCESO", "PRODUCTO", "PROFESOR", "PROGRAMA", "PROGRESO", "PROHIBIR", "PROMESA", "PRONUNCIAR", "PROPIO", "PROTEGER", "PROYECTO", "PRUEBA", "PUBLICAR", "PUEBLO", "PUERRO", "PUERTA", "PUESTO", "PUPILA", "PUREZA", "PURGAR", "PURIFICAR", "QUEBRAR", "QUEMAR", "QUERIDO", "QUIETO", "QUIMICA", "QUINCE", "QUINTO", "QUIROFANO", "QUISIERA", "QUISQUILLOSO", "RAPIDO", "RASTRO", "RECETA", "RECOGER", "RECUERDO", "REDONDO", "REEMPLAZAR", "REFLEJAR", "REFUGIO", "REGALAR", "REGRESO", "RELEVAR", "REMEDIO", "REMOLQUE", "RENOVAR", "REPARAR", "REPETIR", "REPOSAR", "REPUGNANTE", "RESCATE", "RESERVAR", "RESFRIADO", "RESIDIR", "RESPETO", "RESPLANDECIENTE", "RESPLANDOR", "RESTAURANTE", "RESULTAR", "RETIRAR", "RIESGO", "RIQUEZA", "RODEAR", "ROSQUILLA", "ROSTRO", "RUBORIZAR", "SABADO", "SACERDOTE", "SAGRADO", "SALADO", "SALIDA", "SALIVA", "SALMON", "SALTAR", "SALUDAR", "SALUDO", "SALVAJE", "SANDWICH", "SANGRE", "SANIDAD", "SATISFACCION", "SECRETARIO", "SECTOR", "SECUELA", "SEDUCIR", "SEDUCTOR", "SENSIBLE", "SENTIDO", "SEPARAR", "SEPTIEMBRE", "SERAFIN", "SERPIENTE", "SERRAR", "SIMBOLO", "SINCERIDAD", "SINFONIA", "SINTOMA", "SINTONIZAR", "SISTEMA", "SOBERANO", "SOBERBIO", "SOBORNO", "SOBRADO", "SOBREMESA", "SOBREVENIR", "SOBREVIVIR", "SOBRINA", "SOCIEDAD", "SOCORRO", "SODOMIA", "SOLAMENTE", "SOLDADO", "SOLEDAD", "SOLICITAR", "SOLIDARIO", "SOLIDO", "SOLITARIO", "SOLUCION", "SOMBRA", "SOMBRERO", "SOMETER", "SONAMBULO", "SONDAR", "SONIDO", "SONRIENTE", "SONRISA", "SOPLAR", "SOPRANO", "SORDERA", "SORPRENDENTE", "SORPRENDIDO", "SORPRESA", "SORTEAR", "SOSPECHA", "SOSTENIBLE", "SOTANO", "SUAVIZAR", "SUBIDA", "SUBLIME", "SUBRAYAR", "SUCEDER", "SUFICIENTE", "SUFRIMIENTO", "SUJETAR", "SUMERGIR", "SUNTUOSO", "SUPERAR", "SUPERVIVENCIA", "SUPONER", "SUPUESTO", "SURCAR", "SURTIDO", "SUSPENSO", "SUSPIRAR", "SUSTANCIA", "SUSTENTO", "SUSTITUIR", "SUTILIDAD", "TABACO", "TACITURNO", "TALENTO", "TALLER", "TANQUE", "TARDANZA", "TARJETA", "TATUAJE", "TEATRO", "TECNOLOGIA", "TEDIOSO", "TEMBLOR", "TEMPORAL", "TENTACION", "TERNERO", "TERNURA", "TERRIBLE", "TERRITORIO", "TESTIGO", "TIERNO", "TIJERAS", "TIMIDO", "TIPICO", "TIRANO", "TOLERAR", "TOMATE", "TORCER", "TORTUGA", "TOTALIDAD", "TOXICO", "TRABAJO", "TRAGEDIA", "TRAMITE", "TRAMPA", "TRANCE", "TRANQUILO", "TRANSPORTE", "TRASCENDER", "TRASLADAR", "TRATADO", "TRAUMA", "TRAVESIA", "TREINTA", "TRIANGULO", "TRISTEZA", "TRIVIAL", "TRONCO", "TROPIEZO", "TRUENO", "TUERTO", "TURISMO", "ULTIMO", "UNICIDAD", "UNIDAD", "VACACION", "VAGABUNDO", "VAGANCIA", "VALIENTE", "VALORAR", "VASTAGO", "VEGETAL", "VELERO", "VENCER", "VENDEDOR", "VENTAJA", "VERANO", "VERDAD", "VERIFICAR", "VERTIGO", "VESTIDO", "VETERANO", "VICTIMA", "VIDRIO", "VIENTO", "VIGILAR", "VINCULO", "VIOLIN", "VIRGEN", "VIRTUD", "VISUAL", "VITALIDAD", "VIVIENDA", "VOLCAN", "VOLUMEN", "VOLVER", "VOMITO", "VULNERABLE", "XILOFONO", "YACIMIENTO", "ZAFIRO", "ZAPATO", "ZODIACO", "ZOOLOGICO", "ZUMBIDO", "ZURDOS"];
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
let palabraElegida; //Palabra a adivinar
let palabraAdivinada = []; //Palabra que se va a ir formando
let largoPalabra = 0; //Largo de la palabra
let vidas = 6; //Vidas en juego
let aciertos = 0; //Contador de letras acertadas
let letrasPedidas = []; //Letras que ya fueron ingresadas
let letraIngresada = ""; //Letra ingresada en cada iteración

let cantidadJugadores; // Cantidad de jugadores que van a jugar
class jugador {
  constructor (name) {
    this.nombre = name;
    this.jugadas = 0;
    this.puntaje = 0;
  }  
} // Clase para crear cada jugador
let jugadores =[]; // Array con los jugadores 
let turno = 0; // Turno actual de jugador
let finTurno = false; // Booleano indicando fin de turno por acierto o sin vidas

const main = document.querySelector("main")
const rules = document.querySelector("#rules");
const players = document.querySelector("#players");
const names = document.querySelector("#names");
const numberOfPlayers = document.querySelector("#numberofplayers");
const posiciones = document.querySelector("#puntajes tbody");

document.addEventListener('DOMContentLoaded', () => {
  players.select();
  players.focus();
  localStorage.length && juegoGuardado();
});

numberOfPlayers.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const start = document.querySelector("#start");
  players.setAttribute("disabled", "");
  start.setAttribute("disabled", "");
  cantidadJugadores = Number(players.value);
  for (let i=1; i<=cantidadJugadores; i+=1) {
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
  document.querySelector("#player1").select();
  document.querySelector("#player1").focus();
});

// Crea cada jugador dentro del array de jugadores
names.addEventListener("submit", (ev) => {
  ev.preventDefault();
  for (let i=1; i<=cantidadJugadores; i+=1) {
    const player = document.querySelector("#player" + i);
    jugadores[i-1] = new jugador(player.value.toUpperCase());
  }
  juego();
});


function juego() {
  actualizarPosiciones();

  if (cantidadJugadores == 1) {
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

/*****************************************************/
/* Funcion que elige una palabra al azar de la lista */
/*****************************************************/
function elegirPalabra(aleatoria) {
  if (aleatoria) {
    let indice = Math.floor(Math.random()*listaPalabras.length);
    palabraElegida = listaPalabras[indice];
  }
  palabraElegida = palabraElegida.split("");
  largoPalabra = palabraElegida.length;
  palabraElegida.forEach(() => palabraAdivinada.push("-")); // Crea la palabra que se va formando con un guion por cada letra de la palabra elegida
  console.log(palabraElegida)
  tablero();
}


function tablero () {
  document.querySelectorAll("button").forEach(el => el.classList.remove("d-none"));
  borrarHtml(main);
  main.innerHTML = /*html*/
  `
  <h2 id="title">TURNO DE ${jugadores[turno].nombre}</h2>
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
  main.setAttribute("id", "tablero");
  letras = document.querySelector("#letters");
  letras.addEventListener("click", clickLetra);
  document.addEventListener("keyup", teclado);
  render();
}

function borrarHtml (elemento) {
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  } 
}



function clickLetra(evt){
  if(evt.target.classList.contains("letter")) {
    letraIngresada = evt.target.innerHTML;
    comprobarLetra(evt.target);
  }
}


function teclado (tecla){
  letraIngresada = tecla.key.toUpperCase();
  const letrasAbecedario = document.querySelectorAll(".letter");
  letrasAbecedario.forEach(letra => {
    if (letra.innerHTML ==  letraIngresada){  
      comprobarLetra(letra);
    }
  });
}


/*****************************************************************************************************/
/* Funcion que comprueba si la letra esta en la palabra y suma aciertos, o resta vidas si no lo esta */
/*****************************************************************************************************/
function comprobarLetra (boton) {
  boton.setAttribute("disabled","");
  if (!letrasPedidas.some(letraPedida => letraPedida == letraIngresada)) {
    letrasPedidas.push(letraIngresada);
    let conta = 0;
    for (let letra in palabraElegida) {
      if (letraIngresada == palabraElegida[letra]) {
        palabraAdivinada[letra] = letraIngresada;
        conta += 1;
      }
    }
    if (conta == 0) {
      vidas -= 1;
      boton.classList.add("fallo");
      Toastify({
        text: "Letra incorrecta",
        duration: 1000,
        position: "center",
        gravity: "top",
        offset: {
          y: "100%",
        },
        style: {
          background: "linear-gradient(to right, rgb(255, 10, 31), rgb(255, 195, 113))",
        }
      }).showToast();

      } else {
      aciertos += conta;
      boton.classList.add("acierto");
      Toastify({
        text: "Letra correcta",
        duration: 1000,
        position: "center",
        gravity: "top",
        offset: {
          y: "100%",
        },
        style: {
          background: "linear-gradient(to right, rgb(34, 159, 0), rgb(150, 201, 61))",
        }
      }).showToast();
    }
  }
  comprobarEstado();
}


function render () {
  const lifes = document.querySelector("#lifes");
  const imagen = document.querySelector("#imagen");
  const wordInGame = document.querySelector("#word-in-game");
  lifes.innerHTML = `<p>Vidas restantes: ${vidas}</p>`;
  imagen.innerHTML = personaje[vidas];
  wordInGame.innerHTML = "";
  for (let letra in palabraAdivinada) {
    wordInGame.innerHTML += /*html*/
    `
    <div class="letras">${palabraAdivinada[letra]}</div>
    `;
  }
}

function comprobarEstado () {
  let resultado;
  let mensaje;
  let icono;
  if (vidas == 0) {
    palabraAdivinada = palabraElegida;
    document.querySelector("#word-in-game").classList.add("no-ok");
    resultado = `Has fallado ${jugadores[turno].nombre}`;
    mensaje = `La palabra era ${palabraElegida.join("")}. No has sumado puntos.`;
    icono = "error";
    finTurno = true;
  } else if (aciertos == largoPalabra) {
    jugadores[turno].puntaje += vidas;
    document.querySelector("#word-in-game").classList.add("ok");
    resultado = `Felicitaciones ${jugadores[turno].nombre}, has acertado!!!`;
    mensaje = `La palabra es ${palabraElegida.join("")}. Sumaste ${vidas} punto/s.`;
    icono = "success";
    finTurno = true;
  }
  if (finTurno) {
    jugadores[turno].jugadas += 1;
    finTurno = false;
    document.removeEventListener("keyup", teclado);
    document.querySelector("#letters").removeEventListener("click", clickLetra);
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
    letraIngresada = "";
    letrasPedidas = [];  
    actualizarPosiciones();
    elegir(resultado, mensaje, icono);
  }
  render();
}

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


function elegir (resultado, mensaje, icono) {
  Swal.fire({
    icon: icono,
    title: resultado,
    text: mensaje,
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
    } else if (result.isDenied) {
      guardarJuego();
    } else {
      finalizarJuego();
    }
  });
}

function guardarJuego () {
  localStorage.setItem('palabraElegida', palabraElegida);
  localStorage.setItem('palabraAdivinada', palabraAdivinada);
  localStorage.setItem('vidas', vidas);
  localStorage.setItem('aciertos', aciertos);
  localStorage.setItem('letrasPedidas', letrasPedidas);
  localStorage.setItem('jugadores', JSON.stringify(jugadores));
  localStorage.setItem('turno',turno);
  return false
}

function finalizarJuego () {
  localStorage.clear();
  const tabla = document.querySelector('table')

  Swal.fire({
    icon: 'info',
    title: 'Tabla de posiciones',
    html: tabla,
    confirmButtonText: 'Juego nuevo',
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload()
    }
  });
}

function juegoGuardado () {
  jugadores = JSON.parse(localStorage.getItem('jugadores'))
  cantidadJugadores = jugadores.length
  actualizarPosiciones();
  const tabla = document.querySelector('table').cloneNode(true)
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
      cargarJuego();
    } else if (result.isDenied) {
      localStorage.clear()
    }
  })
}

function cargarJuego () {
  turno = Number(localStorage.getItem('turno'))
  console.log(!localStorage.getItem('palabraElegida'))
  if (localStorage.getItem('palabraElegida')) {
    palabraElegida = localStorage.getItem('palabraElegida').split(',')
    largoPalabra = palabraElegida.length
    palabraAdivinada = localStorage.getItem('palabraAdivinada').split(',')
    vidas = Number(localStorage.getItem('vidas'))
    aciertos = Number(localStorage.getItem('aciertos'))
    letrasPedidas = localStorage.getItem('letrasPedidas').split(',')
    console.log("prueba")
    tablero()
    letrasPedidas.forEach(letraPedida => {
      const boton = document.querySelector(`#${letraPedida}`)
      boton.setAttribute('disabled','')
      if (palabraElegida.some((letra) => letra == letraPedida)) {  
        boton.classList.add('acierto')
      } else {
        boton.classList.add('fallo')
      }
    });
  
  } else {
    juego()
  }

}