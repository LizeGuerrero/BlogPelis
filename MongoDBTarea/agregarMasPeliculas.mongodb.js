use('coleccionpeliculasDB');

// Insertar las películas
db.peliculas.insertMany([
    {
        "titulo": "Your Name",
        "año_lanzamiento": 2016,
        "duracion": 106,
        "sinopsis": "Taki, un joven de Tokio, y Mitsuha, una chica de un pueblo rural, intercambian cuerpos sin explicación. A lo largo de su viaje, tratan de encontrar una manera de encontrarse.",
        "director_id": ObjectId("672d3a3be430b18af4b3d942"), // Makoto Shinkai
        "generos": [
            ObjectId("672d3a9387a372beb0640818"), // Animación
            ObjectId("672d3a9387a372beb064081b")  // Romance
        ]
    },
    {
        "titulo": "Spirited Away",
        "año_lanzamiento": 2001,
        "duracion": 125,
        "sinopsis": "Chihiro, una niña, se encuentra atrapada en un mundo espiritual. Deberá encontrar una manera de escapar mientras enfrenta varios desafíos.",
        "director_id": ObjectId("672d3a3be430b18af4b3d944"), // Hayao Miyazaki
        "generos": [
            ObjectId("672d3a9387a372beb0640818"), // Animación
            ObjectId("672d3a9387a372beb064081d")  // Aventura
        ]
    },
    {
        "titulo": "Perfect Blue",
        "año_lanzamiento": 1997,
        "duracion": 81,
        "sinopsis": "Una ex cantante pop se convierte en actriz, pero comienza a perder la distinción entre la realidad y la ficción cuando es perseguida por un fanático.",
        "director_id": ObjectId("672d3a3be430b18af4b3d943"), // Satoshi Kon
        "generos": [
            ObjectId("672d3a9387a372beb0640819"), // Suspenso
            ObjectId("672d3a9387a372beb064081a")  // Misterio
        ]
    },
    {
        "titulo": "Paprika",
        "año_lanzamiento": 2006,
        "duracion": 90,
        "sinopsis": "Una psiquiatra se infiltra en los sueños de sus pacientes utilizando una máquina experimental, pero pronto se da cuenta de que sus propios sueños están siendo invadidos.",
        "director_id": ObjectId("672d3a3be430b18af4b3d943"), // Satoshi Kon
        "generos": [
            ObjectId("672d3a9387a372beb0640819"), // Suspenso
            ObjectId("672d3a9387a372beb064081a")  // Misterio
        ]
    },
    {
        "titulo": "Akira",
        "año_lanzamiento": 1988,
        "duracion": 124,
        "sinopsis": "En un futuro distópico, un joven llamado Kaneda debe detener a su amigo Tetsuo, quien se convierte en un ser con poderes descontrolados tras un accidente.",
        "director_id": ObjectId("672d3a3be430b18af4b3d945"), // Katsuhiro Otomo
        "generos": [
            ObjectId("672d3a9387a372beb0640819"), // Suspenso
            ObjectId("672d3a9387a372beb064081c")  // Ciencia Ficción
        ]
    },
    {
        "titulo": "The Ring",
        "año_lanzamiento": 1998,
        "duracion": 95,
        "sinopsis": "Una periodista investiga un video maldito que causa la muerte de quien lo ve después de siete días.",
        "director_id": ObjectId("672d3a3be430b18af4b3d947"), // Hideo Nakata
        "generos": [
            ObjectId("672d3a9387a372beb0640819"), // Suspenso
            ObjectId("672d3a9387a372beb0640819")  // Terror Psicológico
        ]
    },
    {
        "titulo": "Ringu",
        "año_lanzamiento": 1998,
        "duracion": 96,
        "sinopsis": "Una periodista investiga una cinta de video misteriosa que mata a la persona que la ve después de siete días.",
        "director_id": ObjectId("672d3a3be430b18af4b3d947"), // Hideo Nakata
        "generos": [
            ObjectId("672d3a9387a372beb0640819"), // Suspenso
            ObjectId("672d3a9387a372beb0640819")  // Terror Psicológico
        ]
    },
    {
        "titulo": "A Silent Voice",
        "año_lanzamiento": 2016,
        "duracion": 130,
        "sinopsis": "Shoya Ishida, un joven que acosó a una niña con discapacidad auditiva en la primaria, busca redimirse al encontrarse con ella años después.",
        "director_id": ObjectId("672d3a3be430b18af4b3d942"), // Makoto Shinkai
        "generos": [
            ObjectId("672d3a9387a372beb0640818"), // Animación
            ObjectId("672d3a9387a372beb064081d")  // Drama
        ]
    },
    {
        "titulo": "The Grudge",
        "año_lanzamiento": 2004,
        "duracion": 92,
        "sinopsis": "Una joven enfermera se convierte en víctima de una maldición mortal tras entrar a una casa en la que ocurrieron eventos horribles.",
        "director_id": ObjectId("672d3a3be430b18af4b3d947"), // Hideo Nakata
        "generos": [
            ObjectId("672d3a9387a372beb0640819"), // Suspenso
            ObjectId("672d3a9387a372beb0640819")  // Terror Psicológico
        ]
    },
    {
        "titulo": "Mirai",
        "año_lanzamiento": 2018,
        "duracion": 98,
        "sinopsis": "Un niño celoso de la llegada de su hermana pequeña viaja al futuro para aprender más sobre su familia y su propio crecimiento.",
        "director_id": ObjectId("672d3a3be430b18af4b3d942"), // Mamoru Hosoda
        "generos": [
            ObjectId("672d3a9387a372beb0640818"), // Animación
            ObjectId("672d3a9387a372beb064081b")  // Aventura
        ]
    },
    {
        "titulo": "Howl's Moving Castle",
        "año_lanzamiento": 2004,
        "duracion": 119,
        "sinopsis": "Sophie, una joven que ha sido transformada en una anciana, se une a un mago llamado Howl en su castillo móvil mientras enfrentan un conflicto de guerra.",
        "director_id": ObjectId("672d3a3be430b18af4b3d944"), // Hayao Miyazaki
        "generos": [
            ObjectId("672d3a9387a372beb0640818"), // Animación
            ObjectId("672d3a9387a372beb064081b")  // Aventura
        ]
    },
    {
        "titulo": "The Girl Who Leapt Through Time",
        "año_lanzamiento": 2006,
        "duracion": 98,
        "sinopsis": "Una joven descubre que tiene la capacidad de saltar en el tiempo, lo que le lleva a experimentar las consecuencias de sus decisiones.",
        "director_id": ObjectId("672d3a3be430b18af4b3d942"), // Mamoru Hosoda
        "generos": [
            ObjectId("672d3a9387a372beb0640818"), // Animación
            ObjectId("672d3a9387a372beb064081b")  // Aventura
        ]
    },
    {
        "titulo": "Ghost in the Shell",
        "año_lanzamiento": 1995,
        "duracion": 83,
        "sinopsis": "En un futuro cibernético, una cyborg policía debe atrapar a un misterioso hacker conocido como el 'Puppet Master'.",
        "director_id": ObjectId("672d3a3be430b18af4b3d945"), // Katsuhiro Otomo
        "generos": [
            ObjectId("672d3a9387a372beb0640818"), // Animación
            ObjectId("672d3a9387a372beb064081c")  // Ciencia Ficción
        ]
    },
    {
        "titulo": "Shutter Island",
        "año_lanzamiento": 2010,
        "duracion": 138,
        "sinopsis": "Un U.S. Marshal investiga la desaparición de una prisionera en un hospital psiquiátrico en una isla aislada, pero pronto descubre secretos oscuros.",
        "director_id": ObjectId("672d3a3be430b18af4b3d947"), // Martin Scorsese
        "generos": [
            ObjectId("672d3a9387a372beb0640819"), // Suspenso
            ObjectId("672d3a9387a372beb064081a")  // Misterio
        ]
    },
    {
        "titulo": "The Sixth Sense",
        "año_lanzamiento": 1999,
        "duracion": 107,
        "sinopsis": "Un niño que puede ver y comunicarse con los muertos busca la ayuda de un psicólogo para comprender sus habilidades.",
        "director_id": ObjectId("672d3a3be430b18af4b3d943"), // M. Night Shyamalan
        "generos": [
            ObjectId("672d3a9387a372beb0640819"), // Suspenso
            ObjectId("672d3a9387a372beb064081a")  // Misterio
        ]
    },
    {
        "titulo": "The Ring 2",
        "año_lanzamiento": 2005,
        "duracion": 105,
        "sinopsis": "Una periodista intenta proteger a su hijo de la maldición que ha seguido a su familia después de ver el video mortal.",
        "director_id": ObjectId("672d3a3be430b18af4b3d947"), // Hideo Nakata
        "generos": [
            ObjectId("672d3a9387a372beb0640819"), // Suspenso
            ObjectId("672d3a9387a372beb0640819")  // Terror Psicológico
        ]
    },
    {
        "titulo": "The Others",
        "año_lanzamiento": 2001,
        "duracion": 104,
        "sinopsis": "Una mujer que vive con sus dos hijos en una mansión aislada empieza a sospechar que la casa está siendo invadida por espíritus.",
        "director_id": ObjectId("672d3a3be430b18af4b3d947"), // Alejandro Amenábar
        "generos": [
            ObjectId("672d3a9387a372beb0640819"), // Suspenso
            ObjectId("672d3a9387a372beb0640819")  // Terror Psicológico
        ]
    },
    {
        "titulo": "Paprika",
        "año_lanzamiento": 2006,
        "duracion": 90,
        "sinopsis": "Una psiquiatra se infiltra en los sueños de sus pacientes utilizando una máquina experimental, pero pronto se da cuenta de que sus propios sueños están siendo invadidos.",
        "director_id": ObjectId("672d3a3be430b18af4b3d943"), // Satoshi Kon
        "generos": [
            ObjectId("672d3a9387a372beb0640818"), // Animación
            ObjectId("672d3a9387a372beb064081a")  // Misterio
        ]
    },
    {
        "titulo": "The Conjuring",
        "año_lanzamiento": 2013,
        "duracion": 112,
        "sinopsis": "Un par de investigadores paranormales ayudan a una familia aterrorizada por una presencia maligna en su hogar.",
        "director_id": ObjectId("672d3a3be430b18af4b3d947"), // James Wan
        "generos": [
            ObjectId("672d3a9387a372beb0640819"), // Suspenso
            ObjectId("672d3a9387a372beb0640819")  // Terror Psicológico
        ]
    },
    {
        "titulo": "Tetsuo: The Iron Man",
        "año_lanzamiento": 1989,
        "duracion": 67,
        "sinopsis": "Un hombre se convierte en una máquina cuando una misteriosa fuerza lo transforma lentamente en un cyborg de hierro.",
        "director_id": ObjectId("672d3a3be430b18af4b3d945"), // Shinya Tsukamoto
        "generos": [
            ObjectId("672d3a9387a372beb0640819"), // Suspenso
            ObjectId("672d3a9387a372beb064081c")  // Ciencia Ficción
        ]
    }

]);