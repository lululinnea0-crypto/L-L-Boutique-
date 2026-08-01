const contenedor = document.getElementById("contenedor-productos");

function mostrarProductos(listaProductos) {

    contenedor.innerHTML = "";

    listaProductos.forEach(producto => {

        let coloresHTML = "";

        for (let color in producto.colores) {

            let colorCSS = "#ccc";

            if (color.includes("Negro")) colorCSS = "#000";
            if (color.includes("Blanco")) colorCSS = "#fff";
            if (color.includes("Gris")) colorCSS = "#999";
            if (color.includes("Marrón")) colorCSS = "#8B5A2B";
            if (color.includes("Beige")) colorCSS = "#E8D6B3";

            coloresHTML += `
                <span class="color-producto"
                    style="background:${colorCSS}">
                </span>
            `;
        }

        contenedor.innerHTML += `
            <div class="producto">

                <div class="favorito" onclick="toggleFavorito(this)">
                    ♡
                </div>

                ${producto.etiqueta ? `
                    <div class="etiqueta-producto">
                        ${producto.etiqueta}
                    </div>
                ` : ""}

                <img src="${producto.imagen}" alt="${producto.nombre}">

                <h3>💌 ${producto.nombre}</h3>

                <p class="precio">
                    $${producto.precio.toLocaleString("es-AR")}
                </p>

                <div class="estrellas">
                    ★★★★★
                </div>

                <div class="colores-producto">
                    ${coloresHTML}
                </div>

                <a href="productos/producto.html?id=${producto.id}" class="btn-producto">
                    Ver producto
                </a>

            </div>
        `;
    });

}

function filtrarCategoria(categoria){

    alert("Categoría: " + categoria);

    const filtrados = productos.filter(producto =>
        producto.categoria === categoria
    );

    alert("Encontrados: " + filtrados.length);

    mostrarProductos(filtrados);

    cerrarMenu();

}

function mostrarTodos(){

    mostrarProductos(productos);

    cerrarMenu();

}

function verProducto(id){

    window.location.href = "productos/producto.html?id=" + id;

}

function reservarProducto(id){

    const producto = productos.find(p => p.id === id);

    const mensaje = `Hola 😊. Quiero reservar este producto:

🛍️ ${producto.nombre}

¿Podrías darme más información?`;

    const url = `https://wa.me/5493512901763?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

}

function abrirCarrito(){

document.getElementById("carrito")
.classList.add("abierto");

}

function cerrarCarrito(){

document.getElementById("carrito")
.classList.remove("abierto");

}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(id) {

    const producto = productos.find(p => p.id === id);

    if (!producto) return;

    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarCarrito();

}

function actualizarCarrito() {
carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    console.log(carrito);
    const lista = document.getElementById("lista-carrito");
    const contador = document.getElementById("contador-carrito");
    const total = document.getElementById("total");
    lista.innerHTML = "";

    let suma = 0;

    carrito.forEach((producto, index) => {

    const precioHoy =
        producto.pago == "50"
            ? producto.precio / 2
            : producto.precio;

    suma += precioHoy;

    lista.innerHTML += `
<div class="item-carrito">

    <img src="${producto.imagen}" class="img-carrito">

    <div class="info-carrito">

        <h4>${producto.nombre}</h4>

        <p>🎨 ${producto.color}</p>

        <p>📏 ${producto.talle}</p>

        <p>${producto.pago == "50" ? "💳 Reserva 50%" : "💳 Pago completo"}</p>

        <strong>$${precioHoy.toLocaleString("es-AR")}</strong>

    </div>

    <button class="eliminar" onclick="eliminarProducto(${index})">
        ✕
    </button>

</div>
`;

});

    contador.textContent = carrito.length;

total.textContent = "$" + suma.toLocaleString("es-AR");

}

function eliminarProducto(index){

    carrito.splice(index,1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarCarrito();

}

mostrarProductos(productos);

function filtrarProductos(categoria){

    if(categoria === "todos"){
        mostrarProductos(productos);
        return;
    }

    const filtrados = productos.filter(producto =>
        producto.categoria === categoria
    );

    mostrarProductos(filtrados);

}
                                                                       
actualizarCarrito();

}

// ===== Slider del banner =====

const slides = document.querySelectorAll(".slide");

let slideActual = 0;

function cambiarSlide() {

    slides[slideActual].classList.remove("activo");

    slideActual++;

    if (slideActual >= slides.length) {
        slideActual = 0;
    }

    slides[slideActual].classList.add("activo");
}

setInterval(cambiarSlide, 5000);

function toggleFavorito(corazon){

    if(corazon.textContent == "♡"){
        corazon.textContent = "♥";
        corazon.style.color = "#F20A67";
    }else{
        corazon.textContent = "♡";
        corazon.style.color = "";
    }

}

function finalizarCompra() {

    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "🛍️ *Nuevo pedido L&L Boutique*\n\n";

    let suma = 0;

    carrito.forEach(producto => {

        const precio =
            producto.pago == "50"
            ? producto.precio / 2
            : producto.precio;

        suma += precio;

        mensaje += `• ${producto.nombre}\n`;
        mensaje += `🎨 ${producto.color}\n`;
        mensaje += `📏 ${producto.talle}\n`;
        mensaje += `💳 ${producto.pago == "50" ? "Reserva 50%" : "Pago completo"}\n`;
        mensaje += `💰 $${precio.toLocaleString("es-AR")}\n`;

    });

    mensaje += "--------------------\n";
    mensaje += `💵 Total: $${suma.toLocaleString("es-AR")}`;

    window.open(
    "https://wa.me/5493512901763?text=" + encodeURIComponent(mensaje),
    "_blank"
);

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
