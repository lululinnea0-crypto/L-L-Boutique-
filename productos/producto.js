const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

const producto = productos.find(p => p.id == id);

if (producto) {

    let tallesHTML = "";

    for (let talle in producto.talles) {
        tallesHTML += `
            <option value="${talle}">
                ${talle}: ${producto.talles[talle]}
            </option>
        `;
    }

    document.getElementById("producto").innerHTML = `

    <img src="../${producto.imagen}" 
    alt="${producto.nombre}" 
    style="max-width:300px;width:100%;">

    <h2>${producto.nombre}</h2>

    <p><strong>Precio:</strong> 
    $${producto.precio.toLocaleString("es-AR")}</p>

    <h3>Talle</h3>

    <select id="talle">
        ${tallesHTML}
    </select>


    <h3>Color</h3>

    <select id="color">
        ${Object.keys(producto.talles).map(color => 
        `<option>${color}</option>`).join("")}
    </select>


    <h3>Forma de pago</h3>

    <label>
        <input type="radio" name="pago" value="100" checked>
        Pagar el 100%
    </label>

    <br>

    <label>
        <input type="radio" name="pago" value="50">
        Reservar con el 50%
    </label>


    <h3>Hoy pagás</h3>

    <p id="pago-hoy">
    $${producto.precio.toLocaleString("es-AR")}
    </p>


    <button onclick="agregarAlCarrito()">
        🛒 Agregar al carrito
    </button>

    `;


    document.querySelectorAll('input[name="pago"]')
    .forEach(opcion => {

        opcion.addEventListener("change", () => {

            const pagoHoy = document.getElementById("pago-hoy");

            if(opcion.value == "50"){

                pagoHoy.textContent =
                "$" + (producto.precio / 2)
                .toLocaleString("es-AR");

            } else {

                pagoHoy.textContent =
                "$" + producto.precio
                .toLocaleString("es-AR");

            }

        });

    });


} else {

    document.getElementById("producto").innerHTML =
    "<h2>Producto no encontrado</h2>";

}

function agregarAlCarrito() {

    const talle = document.getElementById("talle").value;
    const color = document.getElementById("color").value;
    const pago = document.querySelector('input[name="pago"]:checked').value;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        talle: talle,
        color: color,
        pago: pago
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado al carrito 🛒");
}
