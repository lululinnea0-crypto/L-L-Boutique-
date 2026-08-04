// ===============================
// L&L Boutique
// categoria.js
// ===============================

const contenedor = document.getElementById("contenedor-productos");
const titulo = document.getElementById("titulo-categoria");

// Obtener categoría de la URL
const params = new URLSearchParams(window.location.search);
const categoria = params.get("categoria");

// Nombres para mostrar
const nombresCategorias = {
    sueters: "Suéters",
    cardigans: "Cardigans",
    abrigos: "Abrigos",
    camperas: "Camperas",
    remeras: "Remeras",
    buzos: "Buzos",
    pantalones: "Pantalones",
    vestidos: "Vestidos y Faldas",
    tops: "Tops",
    bodys: "Bodys",
    lenceria: "Lencería",
    deportiva: "Vestimenta deportiva",
    maquillaje: "Maquillaje",
    perfumes: "Perfumes",
    cabello: "Cuidado del Cabello",
    piel: "Cuidado de la Piel"
};

// Cambiar título
if (titulo) {
    titulo.textContent = nombresCategorias[categoria] || "Productos";
}

// Filtrar productos
const productosCategoria = productos.filter(producto =>
    producto.categoria.toLowerCase() === categoria.toLowerCase()
);

// Mostrar productos
if (contenedor) {

    contenedor.innerHTML = "";

    if (productosCategoria.length === 0) {

        contenedor.innerHTML = `
            <p class="sin-productos">
                Próximamente agregaremos productos en esta categoría.
            </p>
        `;

    } else {

        productosCategoria.forEach(producto => {

            contenedor.innerHTML += `
                <div class="producto">

                    ${producto.etiqueta ? `
                        <div class="etiqueta-producto">
                            ${producto.etiqueta}
                        </div>
                    ` : ""}

                    <img src="../${producto.imagen}" alt="${producto.nombre}">

                    <h3>${producto.nombre}</h3>

                    <p class="precio">
                        $${producto.precio.toLocaleString("es-AR")}
                    </p>

                    <a href="../productos/producto.html?id=${producto.id}"
                       class="btn-producto">
                        Ver producto
                    </a>

                </div>
            `;

        });

    }

}
