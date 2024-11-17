// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('coleccionpeliculasDB');

db.directores.insertMany([
    { nombre_director: "Yoshiyuki Momose" },
    { nombre_director: "Takashi Yamazaki" }
]);
