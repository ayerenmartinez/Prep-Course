// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  let obtenerMayor;
  if(x>y){
    obtenerMayor =x;
  }else{
    obtenerMayor=y;
  }
  return obtenerMayor;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  let mayoriaDeEdad;
  if(edad>=18){
    mayoriaDeEdad ="Allowed";
  }else{
    mayoriaDeEdad="Not allowed";
  }
  return mayoriaDeEdad;
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  let estadoConexion;
  switch(status){
    case 1:{
      estadoConexion ="Online";
      break;
    }
    case 2:{
      estadoConexion="Away";
      break;
    }
    default:{
      estadoConexion="Offline";
      break;
    }
  }
  return estadoConexion;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  let saludo;
    switch(idioma){
      case 'aleman':{
        saludo="Guten Tag!";
        break;
      }
      case 'mandarin':{
        saludo="Ni Hao!";
        break;
      }
      case 'ingles':{
        saludo="Hello!";
        break;
      }
      default:{
        saludo="Hola!";
        break;
      }
    }
  return saludo;
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  let colors;
  switch(color){
    case 'blue':{
      colors ="This is blue";
      break;
    }
    case 'red':{
      colors ="This is red";
      break;
    }
    case 'green':{
      colors="This is green";
      break;
    }
    case 'orange':{
      colors="This is orange";
      break;
    }
    default:{
      colors="Color not found";
      break;
    }
  }
  return colors;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  let esDiezOCinco;
  if(numero==10 || numero==5){
    esDiezOCinco =true;
  }else{
    esDiezOCinco =false;
  }
  return esDiezOCinco;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  let estaEnRango;
    if(numero<50 && numero>20){
      estaEnRango=true;
    }else{
      estaEnRango=false;
    }
  return estaEnRango;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false   
  // Ejemplo: 5.6 -> false 5.6 --> redondeando al menor posible seria 5 ->(num - numRedondeado) (5.6 - 5) =0.6 por lo que es false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  let esEntero;
  let numeroRedondeado;
  numeroRedondeado = Math.floor(numero);
    if(numero - numeroRedondeado==0){
      esEntero=true;
    }else{
      esEntero=false;
    }
  return esEntero;


  //otra forma
  /*
  function esEntero(numero){
    if (isNaN(numero)){//comprobar si es un numero
        alert ("Ups... " + numero + " no es un número.");
    } else {
        if (numero % 1 == 0) {
            alert ("Es un numero entero");
        } else {
            alert ("Es un numero decimal");
        }
    }
}
*/
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  let fizzBuzz;
  
  if(numero%3==0 && numero%5==0){
    fizzBuzz ="fizzbuzz";
  }else{
    if(numero%3==0){
      fizzBuzz="fizz";
    }else{
      if(numero%5==0){
        fizzBuzz="buzz";
      }else{
        fizzBuzz=numero;
      }
    }
  }
  
  
  return fizzBuzz;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

  if(num1==0 || num2==0 || num3==0){//Si algún numero es 0 retona "Error"
    resultado ="Error";
  }else{//En esta sección ningun numero es 0
    
    if(num1<0 || num2<0 || num3<0){//En esta sección ningun número es 0, si algun numero es negativo retorna "Hay negativos"
      resultado="Hay negativos";
    }else{//En esta sección no hay números negativos, por lo tanto los números son Positivos
      
        if(num1>num2){
          if(num1>num3){//En esta sección el numero1 es mayor que numero2 y mayor que numero3
            resultado="Número 1 es mayor y positivo";
          }else{//En esta sección numero3 es mayor que numero1 y mayor que numero2
            resultado = num3+1;
          }
        }else{
          if(num2>num3){//En esta sección el numero2 es mayor que numero1 y mayor que numero3
            resultado=false;
          }else{//En esta sección el numero2 es mayor que numero1 y mayor que numero2
            resultado = num3+1;
          }
        }
    }   
  }
 return resultado;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  let i;
  let esPrimo=true;
  if(numero<2){//Con esta validación descarto al 0 y al 1 (no Son Primos)
    esPrimo =false;
  }else{
    for(i=2;i<numero;i++){
      if(numero%i==0){
        esPrimo=false;
      }
    }
  }
  return esPrimo;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  let esVerdadero;
  if(valor){
    esVerdadero="Soy verdadero";
  }else{
    esVerdadero="Soy falso";
  }
  return esVerdadero;
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  let array=[];
  for(let i=0;i<11;i++){
    array.push(i*6);
  }
  return array;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  let tieneTresDigitos;
  if(numero>99 && numero<1000){
    tieneTresDigitos=true;
  }else{
    tieneTresDigitos=false;
  }
  return tieneTresDigitos;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let contador=8; //7
  let resultado=0; //+5
  do{
    resultado+=5;
    contador-=1;
  }while(contador!=0);
  return numero+resultado;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
