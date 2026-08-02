// ===============================
// L&L Boutique - script.js
// ===============================


const contenedor = document.getElementById("contenedor-productos");


// ===============================
// MENÚ
// ===============================

function abrirMenu() {

    document.getElementById("menu-lateral")
    .classList.add("abierto");

}


function cerrarMenu() {

    document.getElementById("menu-lateral")
    .classList.remove("abierto");

}


function toggleCategorias() {

    document.getElementById("lista-categorias")
    .classList.toggle("abierta");

}



// ===============================
// MOSTRAR PRODUCTOS
// ===============================

function mostrarProductos(lista) {


    if (!contenedor) return;


    contenedor.innerHTML = "";


    lista.forEach(producto => {


        contenedor.innerHTML += `

        <div class="producto">


            ${producto.etiqueta ? 
            `<div class="etiqueta-producto">
            ${producto.etiqueta}
            </div>` 
            : ""}


            <img src="${producto.imagen}" 
            alt="${producto.nombre}">


            <h3>${producto.nombre}</h3>


            <p class="precio">
            $${producto.precio.toLocaleString("es-AR")}
            </p>


            <a href="productos/producto.html?id=${producto.id}" 
            class="btn-producto">
            Ver producto
            </a>


        </div>

        `;


    });


}


if (typeof productos !== "undefined") {

    mostrarProductos(productos);

}
