use("coleccionpeliculasDB");

db.peliculas.aggregate([
    {
        $match: { _id: ObjectId("672446789c7f4f873cdf4b28") },
    },
    {
        $lookup: {
            from: "directores",
            localField: "director_id",
            foreignField: "_id",
            as: "director",
        },
    },
    {
        $lookup: {
            from: "generos",
            localField: "generos", // Campo colección que tiene los IDs de los géneros
            foreignField: "_id",
            as: "generos",
        },
    },
    {
        $project: {
            _id: 1,
            titulo: 1,
            año_lanzamiento: 1,
            duracion: 1,
            sinopsis: 1,
            director: "$director.nombre_director", // Mostrar el nombre del director
            generos: {
                $map: {
                    // Mapeo para cambiar la estructura de los géneros
                    input: "$generos",
                    as: "genero",
                    in: "$$genero.nombre_genero", // Aquí seleccionamos el nombre de cada género
                },
            },
        },
    },
]);
