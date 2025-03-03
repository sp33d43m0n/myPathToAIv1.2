class Persona {
    constructor(nombre, edad, sexo, altura, favoriteStreaming) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.altura = altura;
        this.favoriteStreaming = favoriteStreaming;
    }

    // Este método se asigna automáticamente al prototipo de la clase
    hablar() {
        console.log(`Hola, soy ${this.nombre}, y tengo ${this.edad} años`);
    }
}

let camilo = new Persona('camilo', 22, 'Male', 1.8,  ['netflix', 'disney']);

console.log(camilo); // Muestra el objeto camilo en la consola
camilo.hablar(); // Ejecuta la función hablar y muestra el mensaje en la consola
camilo.hablar = null;
// console.log(camilo.hablar); 
console.log(camilo.edad);