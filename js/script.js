const contenedor = document.getElementById("contenedor-productos");

function mostrarProductos(listaProductos){

    contenedor.innerHTML = "";

    listaProductos.forEach(producto => {

    let coloresHTML = "";

for (let color in producto.talles) {

    let colorCSS = "#ccc";

    if (color.includes("Negro")) colorCSS = "#000";
    if (color.includes("Blanco")) colorCSS = "#fff";
    if (color.includes("Gris")) colorCSS = "#999";
    if (color.includes("Marrón")) colorCSS = "#8B5A2B";

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

        <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>

        <div class="estrellas">★★★★★
        </div>
          <div class="talles">

            <h4>💞 Talles</h4>

            <div class="colores-producto">
    ${coloresHTML}
</div>

        </div>


<a href="productos/producto.html?id=${producto.id}" class="btn-producto">
    Ver producto
</a>

    </div>

    `;

});
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

    alert("Se hizo clic. ID: " + id);

    const producto = productos.find(p => p.id === id);

    alert(producto.nombre);

    carrito.push(producto);

    actualizarCarrito();

}
function actualizarCarrito() {

    const lista = document.getElementById("lista-carrito");
    const contador = document.getElementById("contador-carrito");
    const total = document.getElementById("total");
    lista.innerHTML = "";

    let suma = 0;

    carrito.forEach((producto, index) => {

        suma += producto.precio;

        const precioHoy =
    producto.pago == "50"
        ? producto.precio / 2
        : producto.precio;

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
    total.textContent = suma.toLocaleString("es-AR");

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

function abrirMenu(){

    document.querySelector("nav")
    .classList.toggle("abierto");

}
function cerrarMenu(){

    document.querySelector("nav")
    .classList.remove("abierto");

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
