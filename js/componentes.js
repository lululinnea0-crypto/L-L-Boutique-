// ===============================
// Cargar componentes
// ===============================

function cargarHeader(){

    const contenedor = document.getElementById("contenedor-header");

    if(!contenedor) return;


    fetch("componentes/header.html")
    .then(res => res.text())
    .then(data => {

        contenedor.innerHTML = data;

    });

}


cargarHeader();
