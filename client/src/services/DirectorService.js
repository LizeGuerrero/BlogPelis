// Crear la URL base de la API
const API_URL = import.meta.env.VITE_API_URL + "/admin/directores"; // URL base para la API de directores

// Función para obtener todos los directores
export const getDirectores = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

// Función para agregar un nuevo director
export const addDirector = async (director) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(director),
    });
    return await response.json();
};

// Función para actualizar un director
export const updateDirector = async (id, director) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(director),
    });
    return await response.json();
};

// Función para eliminar un director
export const deleteDirector = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
};
