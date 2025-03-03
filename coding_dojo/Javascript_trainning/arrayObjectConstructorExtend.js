// Definimos la clase Persona
class Persona {
    constructor(nombre, edad, sexo, altura, favoriteStreaming) {
        this.nombre = nombre; 
        this.edad = edad;
        this.sexo = sexo;
        this.altura = altura;
        this.favoriteStreaming = favoriteStreaming;
    }

    // Método hablar
    hablar() {
        console.log(`Hola, soy ${this.nombre}, y tengo ${this.edad} años`);
    }
}

// Definimos la clase Estudiante que extiende de Persona
class Estudiante extends Persona {
    constructor(nombre, edad, sexo, altura, favoriteStreaming, carrera) {
        super(nombre, edad, sexo, altura, favoriteStreaming); // Llama al constructor de Persona
        this.carrera = carrera;
    }

    // Método estudiar
    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.carrera}.`);
    }
}


// Creamos una instancia de Estudiante
let maria = new Estudiante('Maria', 20, 'Female', 1.65, ['HBO', 'Amazon Prime'], 'Ingeniería');

// Usamos los métodos
maria.hablar(); // Heredado de Persona
maria.estudiar(); // Método propio de Estudiante
let atributos = Object.getOwnPropertyDescriptor(maria, 'favoriteStreaming');
console.log('atributos:',atributos);