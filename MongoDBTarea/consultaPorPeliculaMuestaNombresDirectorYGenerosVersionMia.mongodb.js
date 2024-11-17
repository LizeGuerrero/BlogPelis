use('coleccionpeliculasDB');

// Primero, obtenemos la película
const pelicula = db.peliculas.findOne({ _id: ObjectId("672446789c7f4f873cdf4b28") });

// Verificamos si la película fue encontrada y tiene un campo `director_id`
if (pelicula && pelicula.director_id) {
    // Ahora buscamos el director usando el `director_id` de la película
    const director = db.directores.findOne({ _id: ObjectId(pelicula.director_id) });

    // Verificamos si el director fue encontrado
    if (director) {
        // Imprimimos el nombre del director
        print(`El director de ${pelicula.titulo} es ${director.nombre_director}`);
    } else {
        print("Director no encontrado");
    }
} else {
    print("Película no encontrada o no tiene un director_id");
}