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

console.log("DIV pago:", opcionesPago);
console.log("PRODUCTO:", producto);


let colorSeleccionado = "";
let talleSeleccionado = "";
let pagoSeleccionado = "contado";
let cuotasSeleccionadas = "";



if (!producto) {

    document.body.innerHTML = "<h2>Producto no encontrado</h2>";

} else {


nombre.textContent = producto.nombre;

precio.textContent =
"$" + producto.precio.toLocaleString("es-AR");


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

    📅 Pago en cuotas semanales

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



    document.querySelectorAll('input[name="cuota"]').forEach(input => {


        input.addEventListener("change", () => {

            cuotasSeleccionadas = input.value;

        });


    });



} else if (producto.tipo === "pedido") {


    opcionesPago.innerHTML = `

    <h3>Forma de pago</h3>


    <label>

    <input
    type="radio"
    name="pago"
    value="100">

    💳 Pago completo

    </label>


    <br><br>


    <label>

    <input
    type="radio"
    name="pago"
    value="50"
    checked>

    📦 Reserva 50%

    </label>

    `;


    info.innerHTML = `

    <p>📦 Producto por pedido</p>

    <p>💳 Reserva con 50%</p>

    <p>⏳ Entrega de 10 a 15 días después del cierre.</p>

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



// Detectar pago

document.querySelectorAll('input[name="pago']").forEach(input => {


    input.addEventListener("change", () => {

        pagoSeleccionado = input.value;

    });


});



// Botón carrito

boton.onclick = () => {


    agregarAlCarrito(

        producto.id,
        colorSeleccionado,
        talleSeleccionado,
        pagoSeleccionado,
        cuotasSeleccionadas

    );


};


}
