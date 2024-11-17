use('coleccionpeliculasDB');
// Actualizar las fechas de lanzamiento para cada película
db.peliculas.updateOne(
    { "titulo": "Ni No Kuni" },
    { $set: { "fecha_lanzamiento": new Date("2011-11-17") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Howl's Moving Castle" },
    { $set: { "fecha_lanzamiento": new Date("2004-11-20") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "The Girl Who Leapt Through Time" },
    { $set: { "fecha_lanzamiento": new Date("2006-07-15") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Ghost in the Shell" },
    { $set: { "fecha_lanzamiento": new Date("1995-11-18") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Shutter Island" },
    { $set: { "fecha_lanzamiento": new Date("2010-02-19") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "The Sixth Sense" },
    { $set: { "fecha_lanzamiento": new Date("1999-08-06") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "The Ring 2" },
    { $set: { "fecha_lanzamiento": new Date("2005-03-18") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "The Others" },
    { $set: { "fecha_lanzamiento": new Date("2001-08-10") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Paprika" },
    { $set: { "fecha_lanzamiento": new Date("2006-11-25") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "The Conjuring" },
    { $set: { "fecha_lanzamiento": new Date("2013-07-19") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Tetsuo: The Iron Man" },
    { $set: { "fecha_lanzamiento": new Date("1989-07-01") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Spirited Away" },
    { $set: { "fecha_lanzamiento": new Date("2001-07-20") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Perfect Blue" },
    { $set: { "fecha_lanzamiento": new Date("1997-07-16") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Akira" },
    { $set: { "fecha_lanzamiento": new Date("1988-07-16") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "The Shining" },
    { $set: { "fecha_lanzamiento": new Date("1980-05-23") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Coraline" },
    { $set: { "fecha_lanzamiento": new Date("2009-02-06") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Princess Mononoke" },
    { $set: { "fecha_lanzamiento": new Date("1997-07-12") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Paranoia Agent" },
    { $set: { "fecha_lanzamiento": new Date("2004-02-02") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Psycho-Pass" },
    { $set: { "fecha_lanzamiento": new Date("2012-10-12") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Inception" },
    { $set: { "fecha_lanzamiento": new Date("2010-07-16") } }
  );
  
  db.peliculas.updateOne(
    { "titulo": "Your Name" },
    { $set: { "fecha_lanzamiento": new Date("2016-08-26") } }
  );