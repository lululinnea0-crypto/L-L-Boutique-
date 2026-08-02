// ===============================
// L&L Boutique - script.js
// ===============================

const contenedor = document.getElementById("contenedor-productos");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ===============================
// MENÚ
// ===============================

function abrirMenu() {
    document.getElementById("menu-lateral").classList.add("abierto");
}

function cerrarMenu() {
    document.getElementById("menu-lateral").classList.remove("abierto");
}

function toggleCategorias() {
    document.getElementById("lista-categorias").classList.toggle("abierta");
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

            ${producto.etiqueta ? `<div class="etiqueta-producto">${producto.etiqueta}</div>` : ""}

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

// ===============================
// CARRITO
// ===============================

function actualizarCarrito() {

    const contador = document.getElementById("contador-carrito");
    const lista = document.getElementById("lista-carrito");
    const total = document.getElementById("total");

    if (contador) {
        contador.textContent = carrito.length;
    }

    if (!lista || !total) return;

    lista.innerHTML = "";

    if (carrito.length === 0) {

        lista.innerHTML = "<p>Tu carrito está vacío.</p>";
        total.textContent = "0";
        return;

    }

    let totalCompra = 0;

    carrito.forEach((producto, index) => {

        totalCompra += producto.precio;

        lista.innerHTML += `
            <div class="item-carrito">

                <p>${producto.nombre}</p>

                <strong>$${producto.precio.toLocaleString("es-AR")}</strong>

                <button onclick="eliminarDelCarrito(${index})">
                    ❌
                </button>

            </div>
        `;

    });

    total.textContent = totalCompra.toLocaleString("es-AR");

}

function agregarAlCarrito(id){

    const producto = productos.find(p => p.id == id);

    if(!producto) return;

    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarCarrito();

}

function eliminarDelCarrito(index){

    carrito.splice(index,1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarCarrito();

}

function abrirCarrito(){

    document.getElementById("carrito").classList.add("abierto");

    actualizarCarrito();

}

function cerrarCarrito(){

    document.getElementById("carrito").classList.remove("abierto");

}

actualizarCarrito();

function agregarAlCarrito(id) {

    const producto = productos.find(p => p.id === id);

    if (!producto) return;

    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarCarrito();

    alert("Producto agregado al carrito 🛒");
}

function finalizarCompra() {

    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let mensaje = "¡Hola! Quiero realizar este pedido:%0A%0A";
    let total = 0;

    carrito.forEach(producto => {
        mensaje += `• ${producto.nombre} - $${producto.precio.toLocaleString("es-AR")}%0A`;
        total += producto.precio;
    });

    mensaje += `%0A*Total:* $${total.toLocaleString("es-AR")}`;

    // Reemplazá este número por tu WhatsApp
    window.open(`https://wa.me/5493512901763?text=${mensaje}`, "_blank");
                    }
