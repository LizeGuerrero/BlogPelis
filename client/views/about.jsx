//import React from 'react';
import Header from './Header'; // Asegúrate de que la ruta sea correcta
import './About.css'; // Archivo CSS específico para los estilos de About

const About = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <div className="contenedor-texto">
        <div className="text-content">
          <h1 className="TituloAbout">Sobre Nosotros</h1>
          <br />
          <br />

          <h2>Misión</h2>
          <p>
            Nuestra misión es ofrecer el mejor contenido cinematográfico de alta
            calidad a nuestros usuarios, proporcionando una experiencia de
            visualización envolvente y accesible.
          </p>

          <h2>Visión</h2>
          <p>
            Convertirnos en la plataforma de referencia para los amantes del
            cine, donde puedan disfrutar de un catálogo extenso y variado,
            disponible desde cualquier lugar y en cualquier momento.
          </p>

          <h2>Historia</h2>
          <p>
            AK PelisHD nació con el objetivo de reunir a una comunidad
            apasionada por el séptimo arte. Desde nuestros inicios, hemos
            trabajado para ampliar nuestro catálogo, mejorando continuamente la
            calidad de nuestros servicios y adaptándonos a las nuevas tendencias
            y necesidades de nuestros usuarios.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;