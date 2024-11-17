import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
    getPeliculas,
    addPelicula,
    updatePelicula,
    deletePelicula,
} from "../services/PeliculaService";
import { getDirectores } from "../services/DirectorService"; // Importa el servicio de directores exactamente el get
import { getGeneros } from "../services/GeneroService";
import "./styles/GestorDePeliculas.css";

function GestorPeliculas() {
    const [peliculas, setPeliculas] = useState([]);
    const [directores, setDirectores] = useState([]); // Estado para los directores
    const [generos, setGeneros] = useState([]); // Estado para los géneros
    const [form, setForm] = useState({
        titulo: "",
        duracion: "",
        sinopsis: "",
        director_id: "",
        fecha_lanzamiento: "",
        generos: [], // Inicializa los géneros
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadPeliculas();
        loadDirectores(); // Cargar los directores
        loadGeneros(); // Función para cargar los géneros
    }, []);

    const loadPeliculas = async () => {
        const data = await getPeliculas();
        setPeliculas(data);
    };

    const loadDirectores = async () => {
        const data = await getDirectores();
        setDirectores(data);
    };

    const loadGeneros = async () => {
        const data = await getGeneros(); // Función para obtener los géneros del backend
        setGeneros(data);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de datos
        if (!form.director_id || form.generos.length === 0) {
            Swal.fire(
                "Error",
                "Por favor, selecciona un director y al menos un género.",
                "error"
            );
            return;
        }

        try {
            if (editingId) {
                await updatePelicula(editingId, form);
                Swal.fire(
                    "Actualizado",
                    "Película actualizada con éxito",
                    "success"
                );
                setEditingId(null);
            } else {
                const response = await addPelicula(form);
                console.log(response); // Agrega esto para ver la respuesta del backend
                Swal.fire("Agregado", "Película agregada con éxito", "success");
            }
        } catch (error) {
            console.error("Error al agregar la película:", error);
            Swal.fire(
                "Error",
                "Hubo un error al agregar la película.",
                "error"
            );
        }

        // Limpiar el formulario
        setForm({
            titulo: "",
            duracion: "",
            sinopsis: "",
            director_id: "",
            generos: [],
            fecha_lanzamiento: "",
        });

        loadPeliculas();
    };

    const handleEdit = (pelicula) => {
        setForm({
            ...pelicula,
            director_id: pelicula.director_id._id,
            generos: pelicula.generos.map((genero) => genero._id), // Guardamos los IDs de los géneros seleccionados
            fecha_lanzamiento: pelicula.fecha_lanzamiento
                ? pelicula.fecha_lanzamiento.split("T")[0]
                : "",
        });
        setEditingId(pelicula._id);
        Swal.fire("Modo de edición", `Editando: ${pelicula.titulo}`, "info");
    };

    const handleGenerosChange = (e) => {
        const { value, checked } = e.target;

        setForm((prevState) => {
            const updatedGeneros = checked
                ? [...prevState.generos, value] // Si el checkbox está marcado, agregamos el género
                : prevState.generos.filter((generoId) => generoId !== value); // Si no está marcado, lo eliminamos
            return { ...prevState, generos: updatedGeneros };
        });
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        });

        if (result.isConfirmed) {
            await deletePelicula(id);
            Swal.fire("Eliminado", "La película ha sido eliminada.", "success");
            loadPeliculas();
        }
    };

    return (
        <div className="container">
            <h1>Gestión de Películas</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="titulo"
                    placeholder="Título"
                    value={form.titulo}
                    onChange={handleChange}
                />
                <input
                    name="duracion"
                    placeholder="Duración (minutos)"
                    value={form.duracion}
                    onChange={handleChange}
                />
                <input
                    name="sinopsis"
                    placeholder="Sinopsis"
                    value={form.sinopsis}
                    onChange={handleChange}
                />

                {/* Dropdown para seleccionar el director */}
                <select
                    name="director_id"
                    value={form.director_id}
                    onChange={handleChange}
                >
                    <option value="">Selecciona un director</option>
                    {directores.map((director) => (
                        <option key={director._id} value={director._id}>
                            {director.nombre_director}
                        </option>
                    ))}
                </select>
                <div>
                    <label>Selecciona los géneros:</label>
                    <div className="checkbox-group">
                        {generos.map((genero) => (
                            <div key={genero._id} className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id={genero._id}
                                    value={genero._id}
                                    checked={form.generos.includes(genero._id)}
                                    onChange={handleGenerosChange}
                                />
                                <label htmlFor={genero._id}>
                                    {genero.nombre_genero}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <input
                    type="date"
                    name="fecha_lanzamiento"
                    placeholder="Fecha de Lanzamiento"
                    value={
                        form.fecha_lanzamiento
                            ? form.fecha_lanzamiento.slice(0, 10)
                            : ""
                    }
                    onChange={handleChange}
                />

                <button type="submit">
                    {editingId ? "Actualizar" : "Agregar"}
                </button>
            </form>

            <div className="seccionPelicula">
  {peliculas.map((pelicula) => (
    <article key={pelicula._id} className="peliculaCard">
      <header className="pelicula-header">
        <h2>{pelicula.titulo}</h2>
        <p className="pelicula-fecha">
          {new Date(pelicula.fecha_lanzamiento).toLocaleDateString("es-ES", {
            timeZone: "UTC",
          })}
        </p>
      </header>

      <section className="pelicula-sinopsis">
        <p>{pelicula.sinopsis}</p>
      </section>

      <section className="pelicula-director">
        <p><strong>Director: </strong>{pelicula.director_id.nombre_director}</p>
      </section>

      <section className="pelicula-generos">
        <p><strong>Géneros: </strong>{pelicula.generos.map((genero) => genero.nombre_genero).join(", ")}</p>
      </section>

      <footer className="pelicula-actions">
        <button className="edit-btn" onClick={() => handleEdit(pelicula)}>
          Editar
        </button>
        <button className="delete-btn" onClick={() => handleDelete(pelicula._id)}>
          Eliminar
        </button>
      </footer>
    </article>
  ))}
</div>
        </div>
    );
}

export default GestorPeliculas;
