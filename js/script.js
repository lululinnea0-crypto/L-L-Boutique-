// ===============================
// L&L Boutique - script.js
// Solo funciones generales
// ===============================


// ===============================
// MENÚ LATERAL
// ===============================

function abrirMenu() {

    const menu = document.getElementById("menu-lateral");

    if(menu){
        menu.classList.add("abierto");
    }

}

function cerrarMenu() {

    const menu = document.getElementById("menu-lateral");

    if(menu){
        menu.classList.remove("abierto");
    }

}


// ===============================
// SUBMENÚ ROPA
// ===============================

function toggleCategorias(){

    const lista = document.getElementById("lista-categorias");

    if(lista){
        lista.classList.toggle("abierta");
    }

}


// ===============================
// SUBMENÚ BELLEZA
// ===============================

function toggleBelleza(){

    const lista = document.getElementById("lista-belleza");

    if(lista){
        lista.classList.toggle("abierta");
    }

}


// ===============================
// SUBMENÚ REVISTAS
// ===============================

function toggleRevistas(){

    const lista = document.getElementById("lista-revistas");

    if(lista){
        lista.classList.toggle("abierta");
    }

}


// ===============================
// MODAL CÓMO COMPRAR
// ===============================

function abrirComoComprar(){

    const modal = document.getElementById("como-comprar");

    if(modal){
        modal.classList.add("abierto");
    }

}

function cerrarComoComprar(){

    const modal = document.getElementById("como-comprar");

    if(modal){
        modal.classList.remove("abierto");
    }

}
