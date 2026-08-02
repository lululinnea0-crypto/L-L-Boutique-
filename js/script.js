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

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(producto){

    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarCarrito();

}

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

function abrirMenu(){
    document.getElementById("menu-lateral").classList.add("abierto");
}

function cerrarMenu(){
    document.getElementById("menu-lateral").classList.remove("abierto");
}

function toggleCategorias(){
    document.getElementById("lista-categorias").classList.toggle("abierta");
}

function abrirCatalogoNatura(){

    window.open(
        "https://short.natura.com/1cTOPxt",
        "_blank"
    );

}

function abrirCatalogoAvon(){

    alert("Próximamente catálogo Avon 💋");

}

function actualizarCarrito(){

    const contador = document.getElementById("contador-carrito");

    if(contador){
        contador.textContent = carrito.length;
    }

}

actualizarCarrito();


<script src="js/productos.js"></script>
<script src="js/categoria.js"></script>
