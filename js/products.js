// ============================================================
// CATÁLOGO DE GAFAS ZUIP
// ============================================================
// Edita esta lista para agregar, quitar o actualizar gafas.
// Cada gafa es un objeto con estos campos:
//
//   nombre       (texto)              -> nombre del modelo
//   precio       (número)             -> precio en tu moneda, sin símbolo
//   imagen       (texto, ruta)        -> ruta al archivo dentro de /images
//   disponible   (true / false)       -> true = en stock, false = agotado
//   descripcion  (texto, opcional)    -> descripción corta
//
// Para agregar una gafa nueva, copia un bloque { ... } completo,
// pégalo antes del cierre "];" y edita sus valores.
// ============================================================

const productos = [
  {
    nombre: "Aviador Clásico",
    precio: 45000,
    imagen: "images/gafa-aviador.svg",
    disponible: true,
    descripcion: "Montura metálica estilo aviador, lentes degradé."
  },
  {
    nombre: "Redondo Retro",
    precio: 38000,
    imagen: "images/gafa-redonda.svg",
    disponible: true,
    descripcion: "Diseño circular vintage, ideal para uso diario."
  },
  {
    nombre: "Cuadrado Urbano",
    precio: 42000,
    imagen: "images/gafa-cuadrada.svg",
    disponible: false,
    descripcion: "Montura de acetato, líneas rectas y modernas."
  },
  {
    nombre: "Ojo de Gato",
    precio: 50000,
    imagen: "images/gafa-gato.svg",
    disponible: true,
    descripcion: "Estilo femenino y elegante, terminación en punta."
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
  banco: "Nombre del Banco",
  tipoCuenta: "Cuenta de Ahorros / Corriente",
  numeroCuenta: "0000-0000-0000",
  titular: "Nombre del Titular",
  identificacion: "Cédula / RUC (opcional)",
  qrImagen: "images/qr-placeholder.svg"
};
