// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('coleccionpeliculasDB');

db.peliculas.insertMany([
  {
    "titulo": "The Girl Who Leapt Through Time",
    "duracion": 98,
    "sinopsis": "Una joven descubre que tiene el poder de saltar en el tiempo.",
    "director_id": {
      "$oid": "67244abf68f116509795dc03"
    },
    "fecha_lanzamiento": {
      "$date": "2024-11-13T00:00:00Z"
    }
  },
  {
    "titulo": "Stand by Me Doraemon",
    "duracion": 90,
    "sinopsis": "Nobi Nobita y su amigo Doraemon luchan contra los problemas de la vida cotidiana.",
    "director_id": {
      "$oid": "67244abf68f116509795dc04"
    },
    "fecha_lanzamiento": {
      "$date": "2024-11-12T00:00:00Z"
    }
  },
  {
    "titulo": "The Boy and the Beast",
    "duracion": 119,
    "sinopsis": "Un niño se encuentra con una criatura y viaja a un mundo desconocido.",
    "director_id": {
      "$oid": "672d3a3be430b18af4b3d941"
    },
    "fecha_lanzamiento": {
      "$date": "2024-11-10T00:00:00Z"
    }
  },
  {
    "titulo": "Ringu",
    "duracion": 95,
    "sinopsis": "Una periodista investiga una misteriosa cinta de video que causa la muerte a quien la ve.",
    "director_id": {
      "$oid": "672d3a3be430b18af4b3d948"
    },
    "fecha_lanzamiento": {
      "$date": "2024-11-09T00:00:00Z"
    }
  },
  {
    "titulo": "Akira",
    "duracion": 124,
    "sinopsis": "Un adolescente con poderes psíquicos debe enfrentarse a una ciudad en ruinas.",
    "director_id": {
      "$oid": "672d3a3be430b18af4b3d945"
    },
    "fecha_lanzamiento": {
      "$date": "2024-11-08T00:00:00Z"
    }
  },
  {
    "titulo": "Spirited Away",
    "duracion": 125,
    "sinopsis": "Una niña debe salvar a sus padres atrapados en un misterioso mundo lleno de espíritus.",
    "director_id": {
      "$oid": "672d3a3be430b18af4b3d944"
    },
    "fecha_lanzamiento": {
      "$date": "2024-11-07T00:00:00Z"
    }
  },
  {
    "titulo": "Ichi the Killer",
    "duracion": 129,
    "sinopsis": "Un asesino con una sadística violencia busca venganza mientras el caos se desata en Tokio.",
    "director_id": {
      "$oid": "672d3a3be430b18af4b3d947"
    },
    "fecha_lanzamiento": {
      "$date": "2024-11-06T00:00:00Z"
    }
  },
  {
    "titulo": "Live",
    "duracion": 108,
    "sinopsis": "Un joven cineasta graba su primer proyecto en un mundo lleno de oscuras tragedias.",
    "director_id": {
      "$oid": "672d3a3be430b18af4b3d946"
    },
    "fecha_lanzamiento": {
      "$date": "2024-11-05T00:00:00Z"
    }
  },
  {
    "titulo": "Cure",
    "duracion": 111,
    "sinopsis": "Un detective investiga una serie de crímenes inexplicables que parecen estar relacionados con una extraña hipnosis.",
    "director_id": {
      "$oid": "672d3a3be430b18af4b3d947"
    },
    "fecha_lanzamiento": {
      "$date": "2024-11-04T00:00:00Z"
    }
  },
  {
    "titulo": "Ring",
    "duracion": 102,
    "sinopsis": "Una periodista investiga la leyenda de una cinta de video maldita que puede predecir la muerte.",
    "director_id": {
      "$oid": "672d3a3be430b18af4b3d949"
    },
    "fecha_lanzamiento": {
      "$date": "2024-11-03T00:00:00Z"
    }
  }
]);
