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

        <button onclick="reservarProducto(${producto.id})">
    🛍️ Reservar
</button>

    </div>

    `;

});

function verProducto(id){

    localStorage.setItem("productoSeleccionado", id);

    window.location.href = "producto.html";

}

function reservarProducto(id){

    const producto = productos.find(p => p.id === id);

    const mensaje = `Hola 😊. Quiero reservar este producto:

🛍️ ${producto.nombre}

¿Podrías darme más información?`;

    const url = `https://wa.me/5493512901763?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

}
