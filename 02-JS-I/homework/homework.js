// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 10;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  str ="Henry";
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let suma;
  suma =x+y;
  return suma;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let resta;
  resta=x-y;
  return resta;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let producto;
  producto=x*y;
  return producto;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let cociente;
  cociente =x/y;
  return cociente;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  let sonIguales;
  if(x==y){
    sonIguales=true;
  }else{
    sonIguales=false;
  }
  return sonIguales;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  let tienenMismaLongitud;
  let longitudStr1;
  let longitudStr2;
  longitudStr1=str1.length;
  longitudStr2=str2.length;
  if(longitudStr1==longitudStr2){
    tienenMismaLongitud=true;
  }else{
    tienenMismaLongitud=false;
  }
  return tienenMismaLongitud;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  let menosQueNoventa;
  if(num<90){
    menosQueNoventa=true;
  }else{
    menosQueNoventa=false;
  }
  return menosQueNoventa;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  let mayorQueCincuenta;
  if(num>50){
    mayorQueCincuenta=true;
  }else{
    mayorQueCincuenta=false;
  }
  return mayorQueCincuenta;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let obtenerResto;
  obtenerResto = x%y;
  return obtenerResto;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  let esPar;
   if(num%2==0){
    esPar=true;
   }else{
    esPar=false;
   }
  return esPar;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  let esImpar;
  if(num%2!=0){
    esImpar=true;
  }else{
    esImpar=false;
  }
  return esImpar;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let potenciaAlCuadrado;
    potenciaAlCuadrado =Math.pow(num,2);
  return potenciaAlCuadrado;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let potenciaAlCubo;
  potenciaAlCubo =Math.pow(num,3);
  return potenciaAlCubo;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let potencia;
  potencia=Math.pow(num,exponent);
  return potencia;
  
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let redondearNumero;
  redondearNumero = Math.round(num);
  return redondearNumero;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  let redondearHaciaArriba;
  redondearHaciaArriba = Math.ceil(num);
  return redondearHaciaArriba;
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  let numeroRamdom;
  numeroRamdom =Math.random();
  return numeroRamdom;
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  let resultado;
    if(numero==0){
      resultado =false;
    }else{
      if(numero>0){
        resultado="Es positivo";
      }else{
        resultado="Es negativo";
      }
    }
  return resultado;
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  let agregarSimboloExclamacion;
    agregarSimboloExclamacion = str +"!";
  return agregarSimboloExclamacion;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let nombreApellido;
  nombreApellido = nombre+" "+apellido;
  return nombreApellido;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let obtenerSaludo;
  obtenerSaludo = "Hola "+nombre+"!";
  return obtenerSaludo;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  let areaDelRectangulo;
  areaDelRectangulo = alto*ancho;
  return areaDelRectangulo;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  let retornarPerimetro;
  retornarPerimetro = lado * 4;
  return retornarPerimetro;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un (triángulo rectángulo).
  //Escribe tu código aquí
  let areaDelTriangulo;
  areaDelTriangulo = (base*altura)/2;
  return areaDelTriangulo;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  /*
    REGLA DE TRES SIMPLE
    1 euro => 1.20 dolares 
    euro   =>   x
  */
  let deEuroAdolar;
  deEuroAdolar = euro * 1.20;
  return deEuroAdolar;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  let tamanioLetra;
  tamanioLetra = letra.length;
  if(tamanioLetra>1){
    esVocal ="Dato incorrecto";
  }else{
    switch(letra){
      case 'a':{
        esVocal ="Es vocal";
        break;
      }
      case 'e':{
        esVocal ="Es vocal";
        break;
      }
      case 'i':{
        esVocal ="Es vocal";
        break;
      }
      case 'o':{
        esVocal ="Es vocal";
        break;
      }
      case 'u':{
        esVocal ="Es vocal";
        break;
      }
      default:{
        esVocal="Dato incorrecto";
        break;
      }
    }
  }
  return esVocal;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
