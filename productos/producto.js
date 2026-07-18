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
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
</select>

<h3>Color</h3>

<select id="color">
    <option value="Negro">Negro</option>
    <option value="Beige">Beige</option>
    <option value="Blanco">Blanco</option>
</select>

<h3>Forma de pago</h3>

<label>
    <input type="radio" name="pago" value="100" checked>
    Pagar el 100%
</label>

<br><br>

<label>
    <input type="radio" name="pago" value="50">
    Reservar con el 50%
</label>

<h3>Hoy pagás</h3>

<p id="pago-hoy">$42.000</p>

<button>Agregar al carrito</button>
  `;
} else {
  document.getElementById("producto").innerHTML =
    "<h2>Producto no encontrado</h2>";
}
<script>
</script>
