// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('coleccionpeliculasDB');

db.peliculas.updateOne(
    { titulo: "Ni No Kuni" }, // Filtro para encontrar el documento existente
    {
        $set: {
            director_id: ObjectId("67244abf68f116509795dc03"), // ID de Yoshiyuki Momose
            generos: [
                ObjectId("67244a4594e90307f9813f2c"), // ID de Aventura
                ObjectId("67244a4594e90307f9813f2d"), // ID de Fantástico
                ObjectId("67244a4594e90307f9813f2e")  // ID de Animación
            ]
        }
    }
);