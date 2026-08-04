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



    // IMAGEN PRINCIPAL

    galeria.innerHTML = `

    <img 
    id="imagen-principal"
    src="../${producto.imagen}"
    alt="${producto.nombre}">

    `;



    // MINIATURAS

miniaturas.innerHTML = "";

const carpetaCategoria = producto.ruta || producto.categoria;

const rutaCarpeta = producto.subcategoria
    ? `../img/productos/${carpetaCategoria}/${producto.subcategoria}/${producto.carpeta}`
    : `../img/productos/${carpetaCategoria}/${producto.carpeta}`;
    
for (let i = 1; i <= producto.cantidadImagenes; i++) {

    miniaturas.innerHTML += `

        <img
            class="miniatura"
            src="${rutaCarpeta}/${i}.jpg"
            onclick="cambiarImagen('${rutaCarpeta}/${i}.jpg')">

    `;

}



    // COLORES

    colores.innerHTML = "";


    if(producto.colores){


        for(let color in producto.colores){


            colores.innerHTML += `

            <button 
            class="btn-color"
            onclick="seleccionarColor('${color}')">

            ${color}

            </button>

            `;


        }

    }



    // PAGOS

    mostrarPagos();



    // BOTÓN CARRITO


    boton.onclick = () => {


        if(producto.colores && Object.keys(producto.colores).length > 0){


            if(colorSeleccionado === ""){

                alert("Seleccioná un color");
                return;

            }


            if(talleSeleccionado === ""){

                alert("Seleccioná un talle");
                return;

            }

        }

console.log("Pago:", pagoSeleccionado);
console.log("Cuotas:", cuotasSeleccionadas);

        agregarAlCarrito(

            producto.id,
            colorSeleccionado,
            talleSeleccionado,
            pagoSeleccionado,
            cuotasSeleccionadas

        );


    };



}




function mostrarPagos(){


    if(producto.pagos){


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

        📅 Cuotas semanales

        </label>


        <div id="lista-cuotas"></div>

        `;



        const lista = document.getElementById("lista-cuotas");



        producto.pagos.cuotas.forEach(opcion => {


            lista.innerHTML += `

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



        document.querySelectorAll('input[name="cuota"]').forEach(input=>{


            input.addEventListener("change",()=>{

                cuotasSeleccionadas = input.value;

            });


        });



    } else if(producto.tipo === "pedido"){


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

        💳Pago 50%

        </label>


        `;



        info.innerHTML = `

        <p>📦 Producto por pedido</p>

        <p>💳 Se Reserva Pagando el 100% o con el 50%</p>

        <p>⏳ Entrega 15 a 20 días después del cierre.</p>

        `;


    } else {


        pagoSeleccionado = "100";


        opcionesPago.innerHTML = `

        <p>
        💳 Pago completo
        </p>

        `;


    }



    document.querySelectorAll('input[name="pago"]').forEach(input=>{


        input.addEventListener("change",()=>{

            pagoSeleccionado = input.value;

        });


    });



}




function cambiarImagen(ruta){

    document.getElementById("imagen-principal").src = ruta;

}




function seleccionarColor(color){


    colorSeleccionado = color;

    talleSeleccionado = "";

    mostrarTalles(color);


}




function mostrarTalles(color){


    talles.innerHTML = "";


    if(!producto.colores[color]) return;



    producto.colores[color].forEach(talle=>{


        talles.innerHTML += `

        <button
        class="btn-talle"
        onclick="seleccionarTalle('${talle}')">

        ${talle}

        </button>

        `;


    });


}




function seleccionarTalle(talle){


    talleSeleccionado = talle;


                    }
