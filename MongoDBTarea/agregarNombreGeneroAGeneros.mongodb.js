// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('coleccionpeliculasDB');

// Create a new document in the collection.
db.generos.insertMany([
    { nombre_genero: "Aventura" },
    { nombre_genero: "Fantástico" },
    { nombre_genero: "Animación" },
    { nombre_genero: "Romance" },
    { nombre_genero: "Ciencia Ficción" },
    { nombre_genero: "Drama" }
]);
