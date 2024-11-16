import { useState, useEffect } from "react";
import { getPeliculas } from "../services/PeliculaService";
import "./styles/Home.css";

const Home = () => {
  const [peliculas, setPeliculas] = useState([]);

  // Cargar las películas al montar el componente
  useEffect(() => {
    loadPeliculas();
  }, []);

  const loadPeliculas = async () => {
    try {
      const data = await getPeliculas();
      setPeliculas(data);
    } catch (error) {
      console.error("Error al cargar películas:", error);
    }
  };

  return (
    <div className="home-container">
      <h1>Películas Disponibles</h1>
      <div className="peliculas-grid">
        {peliculas.length === 0 ? (
          <p>No hay películas disponibles en este momento.</p>
        ) : (
          peliculas.map((pelicula) => (
            <div key={pelicula._id} className="pelicula-card">
              <h2>{pelicula.titulo}</h2>
              <p>
                <strong>Duración:</strong> {pelicula.duracion} minutos
              </p>
              <p>
                <strong>Sinopsis:</strong> {pelicula.sinopsis}
              </p>
              <p>
                <strong>Fecha de Lanzamiento:</strong>{" "}
                {new Date(pelicula.fecha_lanzamiento).toLocaleDateString()}
              </p>
              {/* Si hay imagen, mostrarla */}
              {pelicula.imagenes?.length > 0 && (
                <img
                  src={pelicula.imagenes[0].url} // Ajusta si la estructura del campo imagen es diferente
                  alt={`${pelicula.titulo} portada`}
                  className="pelicula-imagen"
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
