const contenedor = document.getElementById("contenedor-productos");

productos.forEach(producto => {

    contenedor.innerHTML += `

    <div class="producto">

        <img src="${producto.imagen}" alt="${producto.nombre}">

        <h3>${producto.nombre}</h3>

        <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>

        <button>Reservar</button>

    </div>

    `;

});
