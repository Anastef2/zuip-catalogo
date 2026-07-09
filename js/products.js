// ============================================================
// CATÁLOGO DE GAFAS ZUIP
// ============================================================
// El catálogo está organizado por colecciones. La portada
// (index.html) muestra una tarjeta por colección; al hacer clic
// se abre coleccion.html con los productos de esa colección.
//
// Cada colección tiene:
//   nombre       (texto)   -> título de la colección
//   slug         (texto)   -> identificador único para la URL
//                             (coleccion.html?id=ESTE_SLUG). Debe
//                             ser único, sin espacios ni acentos.
//   descripcion  (texto)   -> subtítulo de la colección
//   productos    (lista)   -> gafas de esa colección
//
// Cada producto tiene:
//   nombre       (texto)              -> nombre del modelo
//   precio       (número)             -> precio en dólares, sin símbolo
//   imagen       (texto, ruta)        -> ruta al archivo dentro de /images
//   cantidad     (número)             -> unidades en stock. 0 = agotado
//
// Para agregar una gafa nueva a una colección, copia un bloque
// { ... } completo dentro de su lista "productos" y edita sus valores.
// Para agregar una colección nueva, copia un bloque de colección
// completo (desde "nombre:" hasta el "]," que cierra "productos")
// y asegúrate de darle un "slug" que no se repita.
// ============================================================

const colecciones = [
  {
    nombre: "Gafas Clásicas",
    slug: "clasicas",
    descripcion: "Gafas de Sol Unisex Armazón Clásico Grueso. Protección UV400.",
    productos: [
      { nombre: "Clásicas 1", precio: 13, imagen: "images/productos/clasicas-1-v2.png", cantidad: 5 },
      { nombre: "Clásicas 2", precio: 13, imagen: "images/productos/clasicas-2-v2.png", cantidad: 5 },
      { nombre: "Clásicas 3", precio: 13, imagen: "images/productos/clasicas-3-v2.png", cantidad: 5 },
      { nombre: "Clásicas 4", precio: 13, imagen: "images/productos/clasicas-4-v2.png", cantidad: 5 },
      { nombre: "Clásicas 5", precio: 13, imagen: "images/productos/clasicas-5-v2.png", cantidad: 5 },
      { nombre: "Clásicas 6", precio: 13, imagen: "images/productos/clasicas-6-v2.png", cantidad: 5 },
      { nombre: "Clásicas 7", precio: 13, imagen: "images/productos/clasicas-7-v2.png", cantidad: 5 },
      { nombre: "Clásicas 8", precio: 13, imagen: "images/productos/clasicas-8-v2.png", cantidad: 5 },
      { nombre: "Clásicas 9", precio: 13, imagen: "images/productos/clasicas-9-v2.png", cantidad: 5 },
      { nombre: "Clásicas 10", precio: 13, imagen: "images/productos/clasicas-10-v2.png", cantidad: 5 },
      { nombre: "Clásicas 11", precio: 13, imagen: "images/productos/clasicas-11-v2.png", cantidad: 5 },
      { nombre: "Clásicas 12", precio: 13, imagen: "images/productos/clasicas-12-v2.png", cantidad: 5 },
      { nombre: "Clásicas 13", precio: 13, imagen: "images/productos/clasicas-13-v2.png", cantidad: 5 },
      { nombre: "Clásicas 14", precio: 13, imagen: "images/productos/clasicas-14-v2.png", cantidad: 5 },
      { nombre: "Clásicas 15", precio: 13, imagen: "images/productos/clasicas-15-v2.png", cantidad: 5 },
      { nombre: "Clásicas 16", precio: 13, imagen: "images/productos/clasicas-16-v2.png", cantidad: 5 },
      { nombre: "Clásicas 17", precio: 13, imagen: "images/productos/clasicas-17-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Origen",
    slug: "origen",
    descripcion: "Gafas de Sol Unisex Armazón Clásico Grueso. Protección UV400.",
    productos: [
      { nombre: "Origen 1", precio: 16, imagen: "images/productos/origen-1-v2.png", cantidad: 5 },
      { nombre: "Origen 2", precio: 16, imagen: "images/productos/origen-2-v2.png", cantidad: 5 },
      { nombre: "Origen 3", precio: 16, imagen: "images/productos/origen-3-v2.jpg", cantidad: 5 },
      { nombre: "Origen 4", precio: 16, imagen: "images/productos/origen-4-v2.jpg", cantidad: 5 },
      { nombre: "Origen 5", precio: 16, imagen: "images/productos/origen-5-v2.jpg", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Aura",
    slug: "aura",
    descripcion: "Gafas de Sol Unisex Armazón Retro Delgado. Protección UV400.",
    productos: [
      { nombre: "Aura 1", precio: 14, imagen: "images/productos/aura-1-v2.png", cantidad: 5 },
      { nombre: "Aura 2", precio: 14, imagen: "images/productos/aura-2-v2.png", cantidad: 5 },
      { nombre: "Aura 3", precio: 14, imagen: "images/productos/aura-3-v2.png", cantidad: 5 },
      { nombre: "Aura 4", precio: 17, imagen: "images/productos/aura-4-v2.png", cantidad: 5 },
      { nombre: "Aura 5", precio: 17, imagen: "images/productos/aura-5-v2.png", cantidad: 5 },
      { nombre: "Aura 6", precio: 17, imagen: "images/productos/aura-6-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Esencia",
    slug: "esencia",
    descripcion: "Gafas de Sol Unisex Armazón Retro Delgado. Protección UV400.",
    productos: [
      { nombre: "Esencia 1", precio: 15, imagen: "images/productos/esencia-1-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Urbanas",
    slug: "urbanas",
    descripcion: "Gafas de Sol Unisex Armazón Retro Delgado. Protección UV400.",
    productos: [
      { nombre: "Urbanas 1", precio: 13, imagen: "images/productos/urbanas-1-v2.png", cantidad: 5 },
      { nombre: "Urbanas 2", precio: 13, imagen: "images/productos/urbanas-2-v2.png", cantidad: 5 },
      { nombre: "Urbanas 3", precio: 13, imagen: "images/productos/urbanas-3-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Nexo",
    slug: "nexo",
    descripcion: "Gafas de Sol Unisex Armazón Retro Delgado. Protección UV400.",
    productos: [
      { nombre: "Nexo 1", precio: 15, imagen: "images/productos/nexo-1-v2.png", cantidad: 5 },
      { nombre: "Nexo 2", precio: 15, imagen: "images/productos/nexo-2-v2.png", cantidad: 5 },
      { nombre: "Nexo 3", precio: 15, imagen: "images/productos/nexo-3-v2.jpg", cantidad: 5 },
      { nombre: "Nexo 4", precio: 15, imagen: "images/productos/nexo-4-v2.jpg", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Zenit",
    slug: "zenit",
    descripcion: "Gafas de Sol Unisex Armazón Retro Delgado. Protección UV400.",
    productos: [
      { nombre: "Zenit 1", precio: 14, imagen: "images/productos/zenit-1-v2.png", cantidad: 5 },
      { nombre: "Zenit 2", precio: 14, imagen: "images/productos/zenit-2-v2.png", cantidad: 5 },
      { nombre: "Zenit 3", precio: 14, imagen: "images/productos/zenit-3-v2.png", cantidad: 5 },
      { nombre: "Zenit 4", precio: 14, imagen: "images/productos/zenit-4-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Ambar",
    slug: "ambar",
    descripcion: "Gafas de Sol Unisex Armazón Clásico Grueso. Protección UV400.",
    productos: [
      { nombre: "Ambar 1", precio: 16, imagen: "images/productos/ambar-1-v2.png", cantidad: 5 },
      { nombre: "Ambar 2", precio: 16, imagen: "images/productos/ambar-2-v2.png", cantidad: 5 },
      { nombre: "Ambar 3", precio: 16, imagen: "images/productos/ambar-3-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Vector",
    slug: "vector",
    descripcion: "Gafas de Sol Unisex Armazón Retro Delgado. Protección UV400.",
    productos: [
      { nombre: "Vector 1", precio: 17, imagen: "images/productos/vector-1-v2.png", cantidad: 5 },
      { nombre: "Vector 2", precio: 17, imagen: "images/productos/vector-2-v2.png", cantidad: 5 },
      { nombre: "Vector 3", precio: 17, imagen: "images/productos/vector-3-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Órbita",
    slug: "orbita",
    descripcion: "Gafas de Sol Unisex Armazón Clásico Grueso. Protección UV400.",
    productos: [
      { nombre: "Órbita 1", precio: 14, imagen: "images/productos/orbita-1-v2.png", cantidad: 5 },
      { nombre: "Órbita 2", precio: 14, imagen: "images/productos/orbita-2-v2.png", cantidad: 5 },
      { nombre: "Órbita 3", precio: 14, imagen: "images/productos/orbita-3-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Elara",
    slug: "elara",
    descripcion: "Gafas de Sol Unisex Armazón Retro Delgado. Protección UV400.",
    productos: [
      { nombre: "Elara 1", precio: 16, imagen: "images/productos/elara-1-v2.png", cantidad: 5 },
      { nombre: "Elara 2", precio: 16, imagen: "images/productos/elara-2-v2.png", cantidad: 5 },
      { nombre: "Elara 3", precio: 16, imagen: "images/productos/elara-3-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Halo",
    slug: "halo",
    descripcion: "Gafas de Sol Unisex Armazón Retro Delgado. Protección UV400.",
    productos: [
      { nombre: "Halo 1", precio: 16, imagen: "images/productos/halo-1-v2.png", cantidad: 5 },
      { nombre: "Halo 2", precio: 16, imagen: "images/productos/halo-2-v2.png", cantidad: 5 },
      { nombre: "Halo 3", precio: 16, imagen: "images/productos/halo-3-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Astra",
    slug: "astra",
    descripcion: "Gafas de Sol Unisex Armazón Retro Delgado. Protección UV400.",
    productos: [
      { nombre: "Astra 1", precio: 22, imagen: "images/productos/astra-1-v2.png", cantidad: 5 },
      { nombre: "Astra 2", precio: 22, imagen: "images/productos/astra-2-v2.png", cantidad: 5 },
      { nombre: "Astra 3", precio: 22, imagen: "images/productos/astra-3-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Hexagonales",
    slug: "hexagonales",
    descripcion: "Gafas de Sol Unisex Armazón hexagonal. Protección UV400.",
    productos: [
      { nombre: "Hexagonales 1", precio: 10, imagen: "images/productos/hexagonales-1-v2.png", cantidad: 5 },
      { nombre: "Hexagonales 2", precio: 10, imagen: "images/productos/hexagonales-2-v2.png", cantidad: 5 },
      { nombre: "Hexagonales 3", precio: 10, imagen: "images/productos/hexagonales-3-v2.png", cantidad: 5 },
      { nombre: "Hexagonales 4", precio: 10, imagen: "images/productos/hexagonales-4-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Retro Metálicas",
    slug: "retro-metalicas",
    descripcion: "Gafas de Sol Unisex, armazón estilo Stark, metálicas. Protección UV400.",
    productos: [
      { nombre: "Retro Metálicas 1", precio: 15, imagen: "images/productos/retro-metalicas-1-v2.png", cantidad: 5 },
      { nombre: "Retro Metálicas 2", precio: 15, imagen: "images/productos/retro-metalicas-2-v2.png", cantidad: 5 },
      { nombre: "Retro Metálicas 3", precio: 15, imagen: "images/productos/retro-metalicas-3-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Retro",
    slug: "retro",
    descripcion: "Gafas de Sol Unisex, armazón estilo Stark, regulares. Protección UV400.",
    productos: [
      { nombre: "Retro 1", precio: 13, imagen: "images/productos/retro-1-v2.png", cantidad: 5 },
      { nombre: "Retro 2", precio: 13, imagen: "images/productos/retro-2-v2.png", cantidad: 5 },
      { nombre: "Retro 3", precio: 13, imagen: "images/productos/retro-3-v2.png", cantidad: 5 },
      { nombre: "Retro 4", precio: 13, imagen: "images/productos/retro-4-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Brisa",
    slug: "brisa",
    descripcion: "Gafas de Sol Unisex Armazón Clásico Grueso. Protección UV400.",
    productos: [
      { nombre: "Brisa 1", precio: 15, imagen: "images/productos/brisa-1-v2.png", cantidad: 5 },
      { nombre: "Brisa 2", precio: 15, imagen: "images/productos/brisa-2-v2.png", cantidad: 5 },
      { nombre: "Brisa 3", precio: 15, imagen: "images/productos/brisa-3-v2.png", cantidad: 5 },
      { nombre: "Brisa 4", precio: 15, imagen: "images/productos/brisa-4-v2.png", cantidad: 5 },
      { nombre: "Brisa 5", precio: 15, imagen: "images/productos/brisa-5-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Redondas",
    slug: "redondas",
    descripcion: "Gafas de Sol Unisex Armazón Redondo con Remaches. Protección UV400.",
    productos: [
      { nombre: "Redondas 1", precio: 13, imagen: "images/productos/redondas-1-v2.png", cantidad: 5 },
      { nombre: "Redondas 2", precio: 13, imagen: "images/productos/redondas-2-v2.png", cantidad: 5 },
      { nombre: "Redondas 3", precio: 13, imagen: "images/productos/redondas-3-v2.png", cantidad: 5 },
      { nombre: "Redondas 4", precio: 13, imagen: "images/productos/redondas-4-v2.png", cantidad: 5 },
      { nombre: "Redondas 5", precio: 13, imagen: "images/productos/redondas-5-v2.png", cantidad: 5 },
      { nombre: "Redondas 6", precio: 13, imagen: "images/productos/redondas-6-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Vintage",
    slug: "vintage",
    descripcion: "Gafas de Sol Vintage Unisex Armazón Rectangular Pequeño. Protección UV400.",
    productos: [
      { nombre: "Vintage 1", precio: 10, imagen: "images/productos/vintage-1-v2.png", cantidad: 5 }
    ]
  },
  {
    nombre: "Gafas Cuadradas",
    slug: "cuadradas",
    descripcion: "Gafas de Sol Unisex Armazón cuadrado grande. Protección UV400.",
    productos: [
      { nombre: "Cuadradas 1", precio: 12, imagen: "images/productos/cuadradas-1-v2.png", cantidad: 5 }
    ]
  }
];

// ============================================================
// DATOS DE PAGO
// ============================================================
// Completa estos datos con tu información real de transferencia.
// La imagen del QR debe ir en /images (reemplaza qr-placeholder.svg
// por tu archivo, por ejemplo qr.png, y actualiza la ruta abajo).
// ============================================================

const datosPago = {
  banco: "Banco Pichincha",
  tipoCuenta: "Cuenta de Ahorros",
  numeroCuenta: "2201925708",
  titular: "Francisco Xavier Yépez López",
  identificacion: "",
  correo: "fyepez946@gmail.com",
  qrImagen: "images/qr-placeholder.svg"
};

// ============================================================
// DATOS DE CONTACTO
// ============================================================
// Se muestran en el pie de página del sitio.
// ============================================================

const contacto = {
  telefonos: ["099 067 8222", "098 093 7264"],
  instagram: "zuip_brand",
  nota: "Acércate a nuestro show room en Quito (sector San Fernando) o pide tu envío a domicilio por un valor adicional."
};
