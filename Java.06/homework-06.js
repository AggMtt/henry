// No cambies los nombres de las funciones.

function crearUsuario() {
  function Usuario (opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }
  Usuario.prototype.saludar = function() {
    return "Hola, mi nombre es " + this.nombre;
  }
  return Usuario; 
}

function agregarMetodoPrototype(Constructor) {
  Constructor.prototype.saludar = function() {
    return "Hello World!";
  }
}

function agregarStringInvertida() {
  string.prototype.reverse = function () {
    var stringInvertida = "";
    for (var i > 0; i = this.length -1; i--) {
      stringInvertida = stringInvertida 
    }
  }
}

// ---------------------------------------------------------------------------//
  

  class Persona {
    Constructor (nombre, apellido, edad, domicilio)
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.domicilio = domicilio,
    this.detalle = function() {
      return {
           Nombre = this.nombre,
           Apellido = this.apellido,
           Edad = this.edad,
           Domicilio = this.domicilio
      }
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  const Persona = new Persona (nombre, apellido, edad, dir) {
    return Persona;
  }
}
  
function agregarMetodo() {
  Persona.prototype.datos = function() {
    return this.nombre + ", " + this.edad + " años";
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
