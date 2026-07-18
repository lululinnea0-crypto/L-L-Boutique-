// Obtener el ID del producto desde la URL
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

// Base de datos de productos
const productos = {
  1: {
    nombre: "Cardigan Largo",
    precio: 42000,
    descripcion: "Cardigan largo, cómodo y elegante. Ideal para cualquier ocasión.",
    imagen: "../img/productos/cardigan.jpg",
    talles: ["S", "M", "L"],
    colores: ["Negro", "Beige", "Blanco"]
  }
};

const producto = productos[id];

if (producto) {
  document.getElementById("producto").innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" style="max-width:300px;width:100%;">

    <h2>${producto.nombre}</h2>

    <p><strong>Precio:</strong> $${producto.precio.toLocaleString("es-AR")}</p>

    <p>${producto.descripcion}</p>

<h3>Talle</h3>

<select id="talle">
    <h3>Talle</h3>

<p>✔ S</p>
<p>✔ M</p>
<p>✔ L</p>

  `;
} else {
  document.getElementById("producto").innerHTML =
    "<h2>Producto no encontrado</h2>";
}
