const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

const producto = productos.find(p => p.id == id);
let colorSeleccionado = "";
let talleSeleccionado = "";
if (!producto) {
    document.getElementById("producto").innerHTML =
        "<h2>Producto no encontrado</h2>";
} else {

    document.getElementById("producto").innerHTML = `
        <img src="../${producto.imagen}" alt="${producto.nombre}" style="max-width:300px;width:100%;">

        <h2>${producto.nombre}</h2>

        <p><strong>Precio:</strong> $${producto.precio.toLocaleString("es-AR")}</p>

        <h3>Color</h3>

<div id="lista-colores"></div>

<h3>Talle</h3>

<div id="lista-talles"></div>

        <h3>Forma de pago</h3>

        <label>
            <input type="radio" name="pago" value="100" checked>
            Pagar el 100%
        </label>

        <br><br>

        <label>
            <input type="radio" name="pago" value="50">
            Reservar con el 50%
        </label>

        <h3>Hoy pagás</h3>

        <p id="pago-hoy">$${producto.precio.toLocaleString("es-AR")}</p>

        <button onclick="agregarAlCarrito()">🛒 Agregar al carrito</button>
    `;
    const listaColores = document.getElementById("lista-colores");
const listaTalles = document.getElementById("lista-talles");

colorSeleccionado = Object.keys(producto.colores)[0];
let talleSeleccionado = "";

function mostrarTalles() {
function mostrarTalles() {

    listaTalles.innerHTML = "";

    talleSeleccionado = producto.colores[colorSeleccionado][0];

    producto.colores[colorSeleccionado].forEach(talle => {

        listaTalles.innerHTML += `
            <button class="btn-talle" onclick="seleccionarTalle('${talle}')">
                ${talle}
            </button>
        `;

    });

}

Object.keys(producto.colores).forEach(color => {

    listaColores.innerHTML += `
        <button class="btn-color" onclick="seleccionarColor('${color}')">
            ${color}
        </button>
    `;

});

function seleccionarColor(color){

    colorSeleccionado = color;

    mostrarTalles();

}

function seleccionarTalle(talle){

    talleSeleccionado = talle;

    alert("Talle seleccionado: " + talle);

}

mostrarTalles();

    document.querySelectorAll('input[name="pago"]').forEach(opcion => {
        opcion.addEventListener("change", () => {

            const monto = opcion.value == "50"
                ? producto.precio / 2
                : producto.precio;

            document.getElementById("pago-hoy").textContent =
                "$" + monto.toLocaleString("es-AR");
        });
    });
}

function agregarAlCarrito() {

    alert("Entró al carrito");

    alert("Color: " + colorSeleccionado);
    alert("Talle: " + talleSeleccionado);

    const pago = document.querySelector('input[name="pago"]:checked').value;

    alert("Pago: " + pago);

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        color: colorSeleccionado,
        talle: talleSeleccionado,
        pago: pago
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado al carrito 🛒");
}
