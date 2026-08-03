const productos = [

{
    id: 1,
    nombre: "Suéter Cheshire",
    categoria: "sueters",

    precio: 33000,

    imagen: "img/productos/sueters/Sueter Cheshire/1.jpg",

    carpeta: "Sueter Cheshire",
    cantidadImagenes: 3,

    tipo: "pedido",

    colores: {
        "💗 Rosa": ["S", "M", "L"]
    }
},

// NUEVOS PRODUCTOS DEBAJO
{
    id: 2,
    nombre: "Abrigo Duffel Coat",
    categoria: "abrigos",

    precio: 50000,

    imagen: "img/productos/abrigos/Abrigo Duffel Coat/1.jpg",

    carpeta: "Abrigo Duffel Coat",
    cantidadImagenes: 4,

    tipo: "pedido",

    colores: {
        "🤎marron": ["S", "M", "L","XL"]
    }
},

    {
    id: 3,
    nombre: "Body chic",
    categoria: "Bodys",

    precio: 18000,

    imagen: "img/productos/Bodys/Body chic/1.jpg",

    carpeta: "Body chic",
    cantidadImagenes: 4,

    tipo: "pedido",

    colores: {
        "🖤Negro": ["S", "M", "L","XL"]
    }
},

    {
    id: 4,
    nombre: "Buzo cherry chile",
    categoria: "Buzos",

    precio: 20000,

    imagen: "img/productos/Buzos/Buzo cherry chile/1.jpg",

    carpeta: "Buzo cherry chile",
    cantidadImagenes: 4,

    tipo: "pedido",

    colores: {
        "♦️Bordo": ["XS","S","M","L","XL","XXL"]
    }
},


{
    id: 5,
    nombre: "Abrigo Athleisure",
    categoria: "abrigos",

    precio: 45000,

    imagen: "img/productos/abrigos/Abrigo Athleisure/1.jpg",

    carpeta: "Abrigo Athleisure",
    cantidadImagenes: 4,

    tipo: "pedido",

    colores: {
        "Gris": ["S", "M", "L","XL"]
    }
},

    {
    id: 6,
    nombre: "Campera AONW",
    categoria: "Camperas",

    precio: 50000,

    imagen: "img/productos/Camperas/Campera AONW/1.jpg",

    carpeta: "Campera AONW",
    cantidadImagenes: 4,

    tipo: "pedido",

    colores: {
        "💗 Rosa fucsia": ["XS", "S", "M", "L", "XL"],
        "🤍 Blanco": ["XS", "S", "L"]
    }
},
    {
    id: 30,
    nombre: "KAIAK SONAR EDT MASC 100ML LTM",

    categoria: "Perfumes",

    carpeta: "KAIAK SONAR EDT MASC 100ML LTM",

    imagen: "img/productos/Perfumes/KAIAK SONAR EDT MASC 100ML LTM/1.jpg",

    cantidadImagenes: 1,

    precio: 64000,

    tipo: "stock",

    pagos: {

        contado: true,

        cuotas: [
            {
                semanas: 2,
                interes: 10,
                total: 70400,
                cuotaSemanal: 35200
            },
            {
                semanas: 4,
                interes: 15,
                total: 73600,
                cuotaSemanal: 18400
            },
            {
                semanas: 6,
                interes: 20,
                total: 76800,
                cuotaSemanal: 12800
            },
            {
                semanas: 8,
                interes: 25,
                total: 80000,
                cuotaSemanal: 10000
            }
        ]

    },

    colores: {}

    }
    ];
