const contenedor = document.getElementById("contenedor-productos");

productos.forEach(producto => {

    let tallesHTML = "";

    for (let color in producto.talles){

        tallesHTML += `
            <p><strong>${color}</strong>: ${producto.talles[color]}</p>
        `;

    }

    contenedor.innerHTML += `

    <div class="producto">

        <img src="${producto.imagen}" alt="${producto.nombre}">

        <h3>💌 ${producto.nombre}</h3>

        <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>

        <div class="talles">

            <h4>💞 Talles</h4>

            ${tallesHTML}

        </div>

        <button onclick="agregarAlCarrito(${producto.id})">
    🛒 Agregar al carrito
</button>

<a href="productos/producto.html?id=${producto.id}" class="btn-producto">
    Ver producto
</a>

    </div>

    `;

});

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

let carrito = [];

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
    const total = document.getElementById("total-carrito");

    lista.innerHTML = "";

    let suma = 0;

    carrito.forEach(producto => {

        suma += producto.precio;

        lista.innerHTML += `
            <p>${producto.nombre} - $${producto.precio.toLocaleString("es-AR")}</p>
        `;

    });

    contador.textContent = carrito.length;
    total.textContent = suma.toLocaleString("es-AR");

}
