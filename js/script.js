const contenedor = document.getElementById("contenedor-productos");

function mostrarProductos(listaProductos){

    contenedor.innerHTML = "";

    listaProductos.forEach(producto => {

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

mostrarProductos(productos);

function filtrarCategoria(categoria){

    const filtrados = productos.filter(producto =>
        producto.categoria === categoria
    );

    mostrarProductos(filtrados);

    cerrarMenu();
}

function mostrarTodos(){

    mostrarProductos(productos);

    cerrarMenu();

}
