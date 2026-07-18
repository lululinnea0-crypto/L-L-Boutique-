console.log("producto.js cargado");

const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

console.log("ID recibido:", id);

const producto = productos.find(p => p.id == id);

console.log("Producto encontrado:", producto);

if (producto) {

    document.getElementById("producto").innerHTML = `
        <img src="../${producto.imagen}" style="max-width:300px;width:100%">

        <h2>${producto.nombre}</h2>

        <p>Precio: $${producto.precio.toLocaleString("es-AR")}</p>

        <p>Producto cargado correctamente</p>
    `;

} else {

    document.getElementById("producto").innerHTML =
    "<h2>Producto no encontrado</h2>";

}
