// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array [0];
}


function devolverUltimoElemento(array) {
  return array [array.length - 1];
}


function obtenerLargoDelArray(array) {
  return array.length;
}


function incrementarPorUno(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray [i] = array [i] + 1;
  }
  return newArray

}


function agregarItemAlFinalDelArray(array, elemento) {
  array [array.length] = elemento;
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift (elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  return palabras.join (" ");
}


function arrayContiene(array, elemento) {
  for (var i = 0.length; i < array.length; i++) {
     if (array[i] === elemento) {
         return true;
     }
  }
  return false;
}


function agregarNumeros(numeros) {
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
      suma = suma + numeros [i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  
}


function numeroMasGrande(numeros) {
  var mayor = numeros [0]:
  for (var i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayor) {
          numeros [i] = mayor;
      }
  }
  return mayor;
}


function multiplicarArgumentos() {
  if (arguments.length < 1) {
    return 0;
  }
  var total = 1;
  for (var i = 0; i < arguments.length; i++) {
    total = total * arguments [i];
  }
  return total;
}


function cuentoElementos(arreglo){
  let conteo = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo [i] > 19) {
      conteo++;
    }
  } 
  return conteo;
}


function diaDeLaSemana(numeroDeDia) {
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  }   
  return "Es dia Laboral";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
}


function todosIguales(arreglo) {
  for (var i = 0; i < arreglo.length - 1; i++) {
    if (arreglo [i] === arreglo [i + 1]) {
       return true;
    }
  }
  return false;
}


function mesesDelAño(array) {
  var newArray = []
  for (let i = 0; i < array.length; i++) {
     if (array [i] "Enero" || array [i] "Marzo" || array [i] "Noviembre") {
      newArray.push (array [i]);
     }
  }
  if (newArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
    return newArray;
  }
}


function mayorACien(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
     if (array [i] > 100 && array [i] <= 200) {
      newArray.push (array [i]);
     }
  }
  return newArray;
}


function breakStatement(numero) {
  var newArray = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    suma === suma + 2;
    if (suma === 1) break;
    else {
      array.push (suma);
    }
  }
  if (i < 10) {
    return "Se interrumpió la ejecución"
  }
  return array;
}


function continueStatement(numero) {
  var newArray = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    suma = suma + 2
    if (if === 5) continue;
  }
  else {
    array.push (suma);
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
