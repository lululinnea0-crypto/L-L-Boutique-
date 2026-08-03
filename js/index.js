// ===============================
// L&L Boutique - index.js
// ===============================

const contenedor = document.getElementById("contenedor-productos");
const destacados = document.getElementById("productos-destacados");

// Mostrar todos los productos
function mostrarProductos() {

    if (!contenedor) return;

    contenedor.innerHTML = "";

    productos.forEach(producto => {

        contenedor.innerHTML += `
        <div class="producto">

            ${producto.etiqueta ? `
            <div class="etiqueta-producto">
                ${producto.etiqueta}
            </div>
            ` : ""}

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            <p class="precio">
                $${producto.precio.toLocaleString("es-AR")}
            </p>

            <a href="productos/producto.html?id=${producto.id}" class="btn-producto">
                Ver producto
            </a>

        </div>
        `;

    });

}

// Mostrar destacados
function mostrarDestacados() {

    if (!destacados) return;

    destacados.innerHTML = "";

    const lista = productos.filter(p => p.etiqueta);

    lista.forEach(producto => {

        destacados.innerHTML += `
        <div class="producto">

            <div class="etiqueta-producto">
                ${producto.etiqueta}
            </div>

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            <p class="precio">
                $${producto.precio.toLocaleString("es-AR")}
            </p>

            <a href="productos/producto.html?id=${producto.id}" class="btn-producto">
                Ver producto
            </a>

        </div>
        `;

    });

}

mostrarProductos();
mostrarDestacados();
