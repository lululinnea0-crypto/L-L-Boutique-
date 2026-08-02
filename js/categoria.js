const contenedor = document.getElementById("contenedor-productos");
const titulo = document.getElementById("titulo-categoria");

const params = new URLSearchParams(window.location.search);
const categoria = params.get("categoria");

titulo.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);

const productosFiltrados = productos.filter(producto => producto.categoria === categoria);

contenedor.innerHTML = "";

if (productosFiltrados.length === 0) {

    contenedor.innerHTML = "<p>No hay productos en esta categoría.</p>";

} else {

    productosFiltrados.forEach(producto => {

        contenedor.innerHTML += `

        <div class="producto">

            <img src="../${producto.imagen}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            <p>$${producto.precio.toLocaleString("es-AR")}</p>

            <a href="../productos/producto.html?id=${producto.id}">
                Ver producto
            </a>

        </div>

        `;

    });

}
