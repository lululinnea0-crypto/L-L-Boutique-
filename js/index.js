// ===============================
// L&L Boutique
// index.js
// Solo la página principal
// ===============================

const contenedor = document.getElementById("contenedor-productos");
const destacados = document.getElementById("productos-destacados");

function crearTarjeta(producto){

    return `

    <div class="producto">

        ${
            producto.etiqueta
            ? `<div class="etiqueta-producto">${producto.etiqueta}</div>`
            : ""
        }

        <img
            src="${producto.imagen}"
            alt="${producto.nombre}"
        >

        <h3>${producto.nombre}</h3>

        <p class="precio">
            $${producto.precio.toLocaleString("es-AR")}
        </p>

        <a
            href="productos/producto.html?id=${producto.id}"
            class="btn-producto">

            Ver producto

        </a>

    </div>

    `;

}

function mostrarProductos(){

    if(!contenedor) return;

    contenedor.innerHTML = "";

    productos.forEach(producto=>{

        contenedor.innerHTML += crearTarjeta(producto);

    });

}

function mostrarDestacados(){

    if(!destacados) return;

    destacados.innerHTML = "";

    const lista = productos.filter(
        producto => producto.etiqueta
    );

    lista.forEach(producto=>{

        destacados.innerHTML += crearTarjeta(producto);

    });

}

mostrarProductos();

mostrarDestacados();
