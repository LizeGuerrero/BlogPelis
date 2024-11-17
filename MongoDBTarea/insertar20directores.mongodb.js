// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('coleccionpeliculasDB');

// Create a new document in the collection.
db.getCollection('directores').insertMany([
    { nombre_director: "Hayao Miyazaki" },
    { nombre_director: "Makoto Shinkai" },
    { nombre_director: "Satoshi Kon" },
    { nombre_director: "Mamoru Hosoda" },
    { nombre_director: "Yoshiyuki Tomino" },
    { nombre_director: "Tetsurō Araki" },
    { nombre_director: "Hideaki Anno" },
    { nombre_director: "Katsuhiro Otomo" },
    { nombre_director: "Yoshinori Kanada" },
    { nombre_director: "Isao Takahata" },
    { nombre_director: "Steven Spielberg" },
    { nombre_director: "Martin Scorsese" },
    { nombre_director: "Christopher Nolan" },
    { nombre_director: "Quentin Tarantino" },
    { nombre_director: "Ridley Scott" },
    { nombre_director: "James Cameron" },
    { nombre_director: "Francis Ford Coppola" },
    { nombre_director: "Alfred Hitchcock" },
    { nombre_director: "Stanley Kubrick" },
    { nombre_director: "Guillermo del Toro" }
]);
