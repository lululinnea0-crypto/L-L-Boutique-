// ===============================
// L&L Boutique - carrito.js
// ===============================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// ACTUALIZAR CONTADOR Y CARRITO

function actualizarCarrito(){

    const contador = document.getElementById("contador-carrito");
    const lista = document.getElementById("lista-carrito");
    const total = document.getElementById("total");


    if(contador){
        contador.textContent = carrito.length;
    }


    if(!lista || !total) return;


    lista.innerHTML = "";


    if(carrito.length === 0){

        lista.innerHTML = "<p>Tu carrito está vacío.</p>";
        total.textContent = "$0";
        return;

    }


    let totalCompra = 0;


    carrito.forEach((producto,index)=>{


        totalCompra += producto.precio;


        lista.innerHTML += `

        <div class="item-carrito">

            <p>${producto.nombre}</p>

            ${producto.color ? `<p>🎨 ${producto.color}</p>` : ""}

            ${producto.talle ? `<p>📏 ${producto.talle}</p>` : ""}

            <p>
            💳 ${producto.pago === "50" 
            ? "Reserva 50%" 
            : "Pago completo"}
            </p>


            <strong>
            $${producto.precio.toLocaleString("es-AR")}
            </strong>


            <button onclick="eliminarDelCarrito(${index})">
            ❌
            </button>


        </div>

        `;


    });


    total.innerHTML =
    `Total: $${totalCompra.toLocaleString("es-AR")}`;

}



// AGREGAR PRODUCTO

function agregarAlCarrito(id,color,talle,pago){


    const producto = productos.find(p => p.id === id);


    if(!producto) return;


    let precioFinal = producto.precio;


    if(pago === "50"){

        precioFinal = producto.precio / 2;

    }


    carrito.push({

        nombre: producto.nombre,

        precio: precioFinal,

        color: color,

        talle: talle,

        pago: pago

    });



    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );


    actualizarCarrito();


    alert("Producto agregado al carrito 🛒");

}



// ELIMINAR

function eliminarDelCarrito(index){

    carrito.splice(index,1);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarCarrito();

}



// ABRIR / CERRAR

function abrirCarrito(){

    const carritoHTML = document.getElementById("carrito");

    if(carritoHTML){

        carritoHTML.classList.add("abierto");

    }

}


function cerrarCarrito(){

    const carritoHTML = document.getElementById("carrito");

    if(carritoHTML){

        carritoHTML.classList.remove("abierto");

    }

}



// WHATSAPP

function finalizarCompra(){

    if(carrito.length === 0){

        alert("El carrito está vacío.");

        return;

    }


    let mensaje = "🛍️ *Nuevo pedido L&L Boutique*\n\n";

    let total = 0;


    carrito.forEach(producto => {


        mensaje += `🧥 ${producto.nombre}\n`;


        if(producto.color){

            mensaje += `🎨 Color: ${producto.color}\n`;

        }


        if(producto.talle){

            mensaje += `📏 Talle: ${producto.talle}\n`;

        }


        if(producto.pago === "50"){

            mensaje += "💳 Reserva 50%\n";

        } else {

            mensaje += "💳 Pago completo\n";

        }


        mensaje += `💰 $${producto.precio.toLocaleString("es-AR")}\n`;

        mensaje += "--------------------\n";


        total += producto.precio;


    });


    mensaje += `\n💵 *Total: $${total.toLocaleString("es-AR")}*`;


    const mensajeFinal = encodeURIComponent(mensaje);


    window.open(
        `https://wa.me/5493512901763?text=${mensajeFinal}`,
        "_blank"
    );

}
actualizarCarrito();
