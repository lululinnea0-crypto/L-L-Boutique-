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
<div class="producto-detalle">

    <img class="producto-imagen"
        src="../${producto.imagen}"
        alt="${producto.nombre}">

    <div class="producto-info">

        <h1>${producto.nombre}</h1>

        <div class="precio">
            $${producto.precio.toLocaleString("es-AR")}
        </div>

        <h4>COLOR</h4>
        <div id="lista-colores" class="lista-colores"></div>

        <h4>TALLE</h4>
        <div id="lista-talles" class="lista-talles"></div>

        <h4>FORMA DE PAGO</h4>

        <label class="opcion-pago">
            <input type="radio" name="pago" value="100" checked>
            Pago completo
        </label>

        <label class="opcion-pago">
            <input type="radio" name="pago" value="50">
            Reserva con el 50%
        </label>

        <div class="hoy-pagas">
            <span>Hoy pagás</span>
            <strong id="pago-hoy">
                $${producto.precio.toLocaleString("es-AR")}
            </strong>
        </div>

        <button class="btn-carrito" onclick="agregarAlCarrito()">
            AGREGAR AL CARRITO
        </button>

        <div class="descripcion">

            <h3>Descripción</h3>

            <p>
                Producto por pedido.<br><br>

                📦 Cerramos pedidos el día 22 de cada mes.<br>

                🚚 Entrega aproximada de 15 a 20 días desde el cierre del pedido.
            </p>

        </div>

    </div>

</div>
`;
    
    const listaColores = document.getElementById("lista-colores");
const listaTalles = document.getElementById("lista-talles");

colorSeleccionado = Object.keys(producto.colores)[0];

function mostrarTalles() {

    listaTalles.innerHTML = "";

    // Siempre selecciona el primer talle del color elegido
    talleSeleccionado = producto.colores[colorSeleccionado][0];

    producto.colores[colorSeleccionado].forEach(talle => {

        listaTalles.innerHTML += `
            <button
                class="btn-talle ${talle === talleSeleccionado ? "activo" : ""}"
                onclick="seleccionarTalle('${talle}')">
                ${talle}
            </button>
        `;

    });

}

    mostrarTalles();

document.querySelector(".btn-color").classList.add("activo");

}

Object.keys(producto.colores).forEach(color => {

    let colorCSS = "#ccc";

if (color.includes("Negro")) colorCSS = "#000";
if (color.includes("Blanco")) colorCSS = "#fff";
if (color.includes("Gris")) colorCSS = "#999";
if (color.includes("Marrón")) colorCSS = "#7B4A2E";
if (color.includes("Beige")) colorCSS = "#E8D6B3";
if (color.includes("Rosa")) colorCSS = "#F7B6D2";
if (color.includes("Azul")) colorCSS = "#3F7DFF";
if (color.includes("Verde")) colorCSS = "#4CAF50";

listaColores.innerHTML += `
<button
    class="btn-color"
    style="background:${colorCSS};"
    title="${color}"
    onclick="seleccionarColor('${color}')">
</button>
`;

});

function seleccionarColor(color){

    colorSeleccionado = color;

    document.querySelectorAll(".btn-color").forEach(btn => {
        btn.classList.remove("activo");

        if (btn.title === color) {
            btn.classList.add("activo");
        }
    });

    mostrarTalles();
}
function seleccionarTalle(talle){

    talleSeleccionado = talle;

    document.querySelectorAll(".btn-talle").forEach(btn=>{
        btn.classList.remove("activo");

        if(btn.textContent.trim() === talle){
            btn.classList.add("activo");
        }
    });

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

    const pago = document.querySelector('input[name="pago"]:checked').value;

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

    mostrarNotificacion("🛒 Producto agregado al carrito");

}

function mostrarNotificacion(texto){

    const aviso = document.createElement("div");

    aviso.className = "notificacion";

    aviso.textContent = texto;

    document.body.appendChild(aviso);

    setTimeout(() => {
        aviso.classList.add("mostrar");
    }, 10);

    setTimeout(() => {
        aviso.remove();
    }, 2500);

}
