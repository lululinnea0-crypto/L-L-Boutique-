const params = new URLSearchParams(window.location.search);
const categoria = params.get("categoria");

const contenedor = document.getElementById("contenedor-productos");

const productosFiltrados = productos.filter(producto => 
    producto.categoria === categoria
);

productosFiltrados.forEach(producto => {

    contenedor.innerHTML += `
        <div class="producto">
            <img src="${producto.imagen}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <a href="productos/producto.html?id=${producto.id}">
                Ver producto
            </a>
        </div>
    `;

});
