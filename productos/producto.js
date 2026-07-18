// Obtener el ID del producto desde la URL
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

document.getElementById("producto").innerHTML = `
    <h2>Producto ${id}</h2>
    <p>Esta página todavía está en construcción.</p>
`;
