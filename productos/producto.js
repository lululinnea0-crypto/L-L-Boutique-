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
const opcionesPago = document.getElementById("opciones-pago");


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

        <img 
        id="imagen-principal"
        src="../${producto.imagen}"
        alt="${producto.nombre}">

    `;



    // Miniaturas

    miniaturas.innerHTML = "";

    for (let i = 1; i <= producto.cantidadImagenes; i++) {

        miniaturas.innerHTML += `

            <img 
            src="../img/productos/${producto.categoria}/${producto.carpeta}/${i}.jpg"
            class="miniatura"
            onclick="cambiarImagen('../img/productos/${producto.categoria}/${producto.carpeta}/${i}.jpg')">

        `;

    }



    // Colores

    colores.innerHTML = "";

    if (producto.colores) {


        for (let color in producto.colores) {


            colores.innerHTML += `

            <button 
            class="btn-color"
            onclick="seleccionarColor('${color}')">

            ${color}

            </button>

            `;

        }


    }



    // Forma de pago


    if (producto.pagos) {

    opcionesPago.innerHTML = `

    <h3>Forma de pago</h3>

    <label>
    <input 
    type="radio" 
    name="pago"
    value="contado"
    checked>

    💵 Pago completo -
    $${producto.precio.toLocaleString("es-AR")}

    </label>


    <br><br>


    <label>
    <input 
    type="radio"
    name="pago"
    value="cuotas">

    📅 Pagar en cuotas semanales

    </label>


    <div id="lista-cuotas"></div>

    `;


    const listaCuotas = document.getElementById("lista-cuotas");


    producto.pagos.cuotas.forEach(opcion => {


        listaCuotas.innerHTML += `

        <label>

        <input 
        type="radio"
        name="cuota"
        value="${opcion.semanas}">

        ${opcion.semanas} semanas -
        $${opcion.cuotaSemanal.toLocaleString("es-AR")}
        por semana

        </label>

        <br>

        `;


    });


    }



        info.innerHTML = `

        <p>📦 Producto por pedido</p>

        <p>💳 Reserva del 50%</p>

        <p>⏳ Entrega estimada: 10 a 15 días después del cierre de campaña.</p>

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



    document.querySelectorAll('input[name="pago"]').forEach(input => {


        input.addEventListener("change", () => {

            pagoSeleccionado = input.value;

        });


    });



    // Agregar al carrito


    boton.onclick = () => {


        if (producto.colores && Object.keys(producto.colores).length > 0) {


            if (colorSeleccionado === "") {

                alert("Selecciona un color");
                return;

            }


        }


        if (producto.colores && talleSeleccionado === "") {

            alert("Selecciona un talle");
            return;

        }



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

    talleSeleccionado = "";

    mostrarTalles(color);


}




function mostrarTalles(color) {


    talles.innerHTML = "";


    if (!producto.colores[color]) return;



    producto.colores[color].forEach(talle => {


        talles.innerHTML += `


        <button 
        class="btn-talle"
        onclick="seleccionarTalle('${talle}')">

        ${talle}

        </button>


        `;


    });


}




function seleccionarTalle(talle) {


    talleSeleccionado = talle;


}
