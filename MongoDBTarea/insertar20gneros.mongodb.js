// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('coleccionpeliculasDB');

db.getCollection('generos').insertMany([
    { nombre_genero: "Acción" },
    { nombre_genero: "Aventura" },
    { nombre_genero: "Comedia" },
    { nombre_genero: "Drama" },
    { nombre_genero: "Fantasía" },
    { nombre_genero: "Ciencia Ficción" },
    { nombre_genero: "Terror" },
    { nombre_genero: "Suspenso" },
    { nombre_genero: "Romance" },
    { nombre_genero: "Misterio" },
    { nombre_genero: "Animación" },
    { nombre_genero: "Documental" },
    { nombre_genero: "Biografía" },
    { nombre_genero: "Histórico" },
    { nombre_genero: "Musical" },
    { nombre_genero: "Guerra" },
    { nombre_genero: "Crimen" },
    { nombre_genero: "Western" },
    { nombre_genero: "Deportes" },
    { nombre_genero: "Familia" }
]);