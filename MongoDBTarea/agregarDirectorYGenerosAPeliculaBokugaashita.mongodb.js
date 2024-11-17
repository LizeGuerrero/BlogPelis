// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('coleccionpeliculasDB');

db.peliculas.updateOne(
    { titulo: "Boku ga Aishita Subete no kime e" }, // Filtro para encontrar el documento existente
    {
        $set: {
            director_id: ObjectId("67244abf68f116509795dc04"), // ID de Yoshiyuki Momose
            generos: [
                ObjectId("67244a4594e90307f9813f2f"), // ID de Aventura
                ObjectId("67244a4594e90307f9813f30"), // ID de Fantástico
                ObjectId("67244a4594e90307f9813f31")  // ID de Animación
            ]
        }
    }
);
