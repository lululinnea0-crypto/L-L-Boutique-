const contenedor = document.getElementById("contenedor-productos");

const params = new URLSearchParams(window.location.search);
const categoria = params.get("categoria");

const productosFiltrados = productos.filter(producto => producto.categoria === categoria);

contenedor.innerHTML = "";

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
