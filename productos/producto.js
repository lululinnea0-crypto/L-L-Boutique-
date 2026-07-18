const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

const producto = productos.find(p => p.id == id);

if (!producto) {
    document.getElementById("producto").innerHTML =
        "<h2>Producto no encontrado</h2>";
} else {

    let tallesHTML = "";

    for (let color in producto.talles) {
        tallesHTML += `<option value="${color}">${color}: ${producto.talles[color]}</option>`;
    }

    document.getElementById("producto").innerHTML = `
        <img src="../${producto.imagen}" alt="${producto.nombre}" style="max-width:300px;width:100%;">

        <h2>${producto.nombre}</h2>

        <p><strong>Precio:</strong> $${producto.precio.toLocaleString("es-AR")}</p>

        <h3>Color / Talle</h3>

        <select id="talle">
            ${tallesHTML}
        </select>

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

    alert("Producto agregado al carrito 🛒");
}
