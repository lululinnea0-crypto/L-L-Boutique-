const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const producto = productos.find(p => p.id === id);

const galeria = document.getElementById("galeria-principal");
const miniaturas = document.getElementById("miniaturas");
const nombre = document.getElementById("nombre-producto");
const precio = document.getElementById("precio-producto");
const colores = document.getElementById("colores");
const talles = document.getElementById("talles");
const info = document.getElementById("info-pedido");
const boton = document.getElementById("btn-carrito");

if (!producto) {

    document.body.innerHTML = "<h2>Producto no encontrado</h2>";

} else {

    nombre.textContent = producto.nombre;
    precio.textContent = "$" + producto.precio.toLocaleString("es-AR");

    // Imagen principal
    galeria.innerHTML = `
        <img id="imagen-principal"
             src="../${producto.imagen}"
             alt="${producto.nombre}">
    `;

    // Miniaturas
    for (let i = 1; i <= producto.cantidadImagenes; i++) {

        miniaturas.innerHTML += `
            <img
                src="../img/productos/${producto.categoria}/${producto.carpeta}/${i}.jpg"
                class="miniatura"
                onclick="cambiarImagen('../img/productos/${producto.categoria}/${producto.carpeta}/${i}.jpg')"
            >
        `;

    }

    // Colores
    for (let color in producto.colores) {

        colores.innerHTML += `
            <button onclick="mostrarTalles('${color}')">
                ${color}
            </button>
        `;

    }

    // Información
    if (producto.tipo === "pedido") {

        info.innerHTML = `
            <p>📦 Producto por pedido</p>
            <p>💳 Reserva con el 50%</p>
            <p>⏳ Entrega de 10 a 15 días después del cierre de campaña.</p>
        `;

    } else {

        info.innerHTML = `
            <p>✅ Stock disponible</p>
        `;

    }

    boton.onclick = () => agregarAlCarrito(producto.id);

}

function cambiarImagen(ruta) {

    document.getElementById("imagen-principal").src = ruta;

}

function mostrarTalles(color) {

    talles.innerHTML = "";

    producto.colores[color].forEach(talle => {

        talles.innerHTML += `
            <button>${talle}</button>
        `;

    });

}
