const contenedor = document.getElementById("contenedor-productos");
const titulo = document.getElementById("titulo-categoria");

// Obtener la categoría de la URL
const params = new URLSearchParams(window.location.search);
const categoria = params.get("categoria");

// Nombres bonitos para mostrar
const nombresCategorias = {
    sueters: "Suéters",
    abrigos: "Abrigos",
    cardigans: "Cardigans",
    remeras: "Remeras",
    buzos: "Buzos",
    pantalones: "Pantalones",
    camperas: "Camperas",
    deportiva: "Vestimenta deportiva",
    tops: "Tops",
    bodys: "Bodys",
    vestidos: "Vestidos y faldas",
    lenceria: "Lencería",
    maquillaje: "Maquillaje",
    perfumes: "Perfumes",
    cabello: "Cuidado de cabello",
    piel: "Cuidado de piel"
};

// Cambiar el título
titulo.textContent = nombresCategorias[categoria] || "Productos";

// Filtrar productos
const productosCategoria = productos.filter(
    producto => producto.categoria === categoria
);

// Mostrar productos
contenedor.innerHTML = "";

if (productosCategoria.length === 0) {

    contenedor.innerHTML = `
        <p>No hay productos en esta categoría.</p>
    `;

} else {

    productosCategoria.forEach(producto => {

        contenedor.innerHTML += `
            <div class="producto">

                <img src="../${producto.imagen}" alt="${producto.nombre}">

                <h3>${producto.nombre}</h3>

                <p>$${producto.precio.toLocaleString("es-AR")}</p>

                <a href="../productos/producto.html?id=${producto.id}" class="btn-producto">
                    Ver producto
                </a>

            </div>
        `;

    });

}
