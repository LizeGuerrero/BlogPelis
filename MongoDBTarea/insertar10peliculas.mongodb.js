// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('coleccionpeliculasDB');

// Create a new document in the collection.
db.getCollection('peliculas').insertMany([
    { 
        titulo: "Spirited Away", 
        duracion: 125, 
        sinopsis: "Una niña se encuentra atrapada en un mundo espiritual y debe encontrar la manera de salvar a sus padres.", 
        director_id: ObjectId("67395d56e260a71fda78ddf8"),  // Hayao Miyazaki
        generos: [
            ObjectId("67395c9b701a1c431bc4c56c"),  // Animación
            ObjectId("67395c9b701a1c431bc4c56d")   // Aventura
        ], 
        fecha_lanzamiento: new Date("2001-07-20")
    },
    { 
        titulo: "Your Name", 
        duracion: 106, 
        sinopsis: "Dos jóvenes se intercambian de cuerpo misteriosamente, mientras buscan resolver el misterio de sus conexiones.", 
        director_id: ObjectId("67395d56e260a71fda78ddf9"),  // Makoto Shinkai
        generos: [
            ObjectId("67395c9b701a1c431bc4c56c"),  // Animación
            ObjectId("67395c9b701a1c431bc4c56f")   // Romance
        ], 
        fecha_lanzamiento: new Date("2016-08-26")
    },
    { 
        titulo: "The Matrix", 
        duracion: 136, 
        sinopsis: "Un hacker descubre que el mundo real es una ilusión controlada por máquinas y decide unirse a un grupo de rebeldes.", 
        director_id: ObjectId("67395d56e260a71fda78ddfb"),  // Wachowski Sisters
        generos: [
            ObjectId("67395c9b701a1c431bc4c56e"),  // Ciencia Ficción
            ObjectId("67395c9b701a1c431bc4c56f")   // Acción
        ], 
        fecha_lanzamiento: new Date("1999-03-31")
    },
    { 
        titulo: "Inception", 
        duracion: 148, 
        sinopsis: "Un ladrón de sueños se embarca en una misión para implantar una idea en la mente de una persona.", 
        director_id: ObjectId("67395d56e260a71fda78de08"),  // Christopher Nolan
        generos: [
            ObjectId("67395c9b701a1c431bc4c56e"),  // Ciencia Ficción
            ObjectId("67395c9b701a1c431bc4c56f")   // Acción
        ], 
        fecha_lanzamiento: new Date("2010-07-16")
    },
    { 
        titulo: "Pulp Fiction", 
        duracion: 154, 
        sinopsis: "Varias historias entrelazadas de crimen y violencia en Los Ángeles.", 
        director_id: ObjectId("67395d56e260a71fda78de03"),  // Quentin Tarantino
        generos: [
            ObjectId("67395c9b701a1c431bc4c56f"),  // Acción
            ObjectId("67395c9b701a1c431bc4c56e")   // Crimen
        ], 
        fecha_lanzamiento: new Date("1994-10-14")
    },
    { 
        titulo: "The Dark Knight", 
        duracion: 152, 
        sinopsis: "Batman lucha contra el Joker, un criminal desquiciado que busca destruir la ciudad.", 
        director_id: ObjectId("67395d56e260a71fda78de08"),  // Christopher Nolan
        generos: [
            ObjectId("67395c9b701a1c431bc4c56e"),  // Ciencia Ficción
            ObjectId("67395c9b701a1c431bc4c56f")   // Acción
        ], 
        fecha_lanzamiento: new Date("2008-07-18")
    },
    { 
        titulo: "Akira", 
        duracion: 124, 
        sinopsis: "En una distópica Tokio, un joven con poderes psíquicos amenaza con destruir la ciudad.", 
        director_id: ObjectId("67395d56e260a71fda78ddfe"),  // Katsuhiro Otomo
        generos: [
            ObjectId("67395c9b701a1c431bc4c56c"),  // Animación
            ObjectId("67395c9b701a1c431bc4c56e")   // Ciencia Ficción
        ], 
        fecha_lanzamiento: new Date("1988-07-16")
    },
    { 
        titulo: "The Lion King", 
        duracion: 88, 
        sinopsis: "Un joven león príncipe debe asumir su destino y reclamar el trono tras la muerte de su padre.", 
        director_id: ObjectId("67395d56e260a71fda78ddf8"),  // Hayao Miyazaki
        generos: [
            ObjectId("67395c9b701a1c431bc4c56c"),  // Animación
            ObjectId("67395c9b701a1c431bc4c56d")   // Aventura
        ], 
        fecha_lanzamiento: new Date("1994-06-15")
    },
    { 
        titulo: "Interstellar", 
        duracion: 169, 
        sinopsis: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.", 
        director_id: ObjectId("67395d56e260a71fda78de08"),  // Christopher Nolan
        generos: [
            ObjectId("67395c9b701a1c431bc4c56e"),  // Ciencia Ficción
            ObjectId("67395c9b701a1c431bc4c56f")   // Aventura
        ], 
        fecha_lanzamiento: new Date("2014-11-07")
    },
    { 
        titulo: "Frozen", 
        duracion: 102, 
        sinopsis: "Una joven princesa emprende un viaje para encontrar a su hermana, cuyo poder ha sumido el reino en un invierno eterno.", 
        director_id: ObjectId("67395d56e260a71fda78ddf8"),  // Hayao Miyazaki
        generos: [
            ObjectId("67395c9b701a1c431bc4c56c"),  // Animación
            ObjectId("67395c9b701a1c431bc4c56d")   // Aventura
        ], 
        fecha_lanzamiento: new Date("2013-11-27")
    }
]);
