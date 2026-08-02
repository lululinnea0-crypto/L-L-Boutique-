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

let colorSeleccionado = "";
let talleSeleccionado = "";
let pagoSeleccionado = "50";


if (!producto) {

    document.body.innerHTML = "<h2>Producto no encontrado</h2>";

} else {


    nombre.textContent = producto.nombre;

    precio.textContent =
        "$" + producto.precio.toLocaleString("es-AR");


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
            onclick="cambiarImagen('../img/productos/${producto.categoria}/${producto.carpeta}/${i}.jpg')">
        `;

    }



    // Colores

    for (let color in producto.colores) {

        colores.innerHTML += `
            <button onclick="seleccionarColor('${color}')">
                ${color}
            </button>
        `;

    }



    // Pago

    const opcionesPago = document.getElementById("opciones-pago");


    if (producto.tipo === "pedido") {


        opcionesPago.innerHTML = `

        <h3>Forma de pago</h3>


        <label>

        <input 
        type="radio" 
        name="pago" 
        value="100">

        💳 Pagar 100% -
        $${producto.precio.toLocaleString("es-AR")}

        </label>


        <br><br>


        <label>

        <input 
        type="radio" 
        name="pago" 
        value="50"
        checked>

        📦 Reserva 50% -
        $${(producto.precio / 2).toLocaleString("es-AR")}

        </label>

        `;


        info.innerHTML = `

        <p>📦 Producto por pedido</p>

        <p>💳 Reserva con 50%</p>

        <p>⏳ Entrega de 10 a 15 días después del cierre de campaña.</p>

        `;


    } else {


        pagoSeleccionado = "100";


        opcionesPago.innerHTML = `

        <p>
        <strong>
        💳 Este producto se paga completo.
        </strong>
        </p>

        `;

    }



    // Detectar forma de pago

    document.querySelectorAll('input[name="pago"]').forEach(input => {

        input.addEventListener("change", () => {

            pagoSeleccionado = input.value;

        });

    });



    // Botón agregar carrito

    boton.onclick = () => {


        agregarAlCarrito(

            producto.id,

            colorSeleccionado,

            talleSeleccionado,

            pagoSeleccionado

        );


    };


}




function cambiarImagen(ruta) {

    document.getElementById("imagen-principal").src = ruta;

}




function seleccionarColor(color) {


    colorSeleccionado = color;


    mostrarTalles(color);


}




function mostrarTalles(color) {


    talles.innerHTML = "";


    producto.colores[color].forEach(talle => {


        talles.innerHTML += `

        <button onclick="seleccionarTalle('${talle}')">

        ${talle}

        </button>

        `;


    });


}




function seleccionarTalle(talle) {


    talleSeleccionado = talle;


}
