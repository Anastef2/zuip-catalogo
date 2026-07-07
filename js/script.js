// ============================================================
// ZUIP — lógica del catálogo
// Lee los datos de products.js (variables `colecciones`, `datosPago`
// y `contacto`) y arma las secciones + el modal de pago y el
// lightbox. No necesita edición para agregar/quitar gafas: eso se
// hace en products.js.
// ============================================================

function formatearPrecio(numero) {
  return numero.toLocaleString('es-ES');
}

function crearTarjeta(producto, colIndice, prodIndice) {
  const card = document.createElement('article');
  card.className = 'card';

  const hayStock = producto.cantidad > 0;
  const badgeClase = hayStock ? 'badge-disponible' : 'badge-agotado';
  const badgeTexto = hayStock ? `Hay ${producto.cantidad} disponibles` : 'Agotado';

  const botonHtml = hayStock
    ? `<button class="btn-comprar" data-col="${colIndice}" data-prod="${prodIndice}">Cómo pagar</button>`
    : `<button class="btn-agotado" disabled>Agotado</button>`;

  card.innerHTML = `
    <div class="card-img-wrapper">
      <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" data-col="${colIndice}" data-prod="${prodIndice}">
    </div>
    <div class="card-body">
      <h2 class="card-nombre">${producto.nombre}</h2>
      <span class="badge ${badgeClase}">${badgeTexto}</span>
      <p class="card-precio">$${formatearPrecio(producto.precio)}</p>
      ${botonHtml}
    </div>
  `;

  return card;
}

function crearSeccion(coleccion, colIndice) {
  const seccion = document.createElement('section');
  seccion.className = 'coleccion-section';

  const grid = document.createElement('div');
  grid.className = 'catalogo-grid';

  coleccion.productos.forEach((producto, prodIndice) => {
    grid.appendChild(crearTarjeta(producto, colIndice, prodIndice));
  });

  seccion.innerHTML = `
    <h2 class="coleccion-titulo">${coleccion.nombre}</h2>
    <p class="coleccion-descripcion">${coleccion.descripcion}</p>
  `;
  seccion.appendChild(grid);

  return seccion;
}

function renderizarCatalogo() {
  const contenedor = document.getElementById('catalogo');
  contenedor.innerHTML = '';

  colecciones.forEach((coleccion, colIndice) => {
    contenedor.appendChild(crearSeccion(coleccion, colIndice));
  });

  contenedor.querySelectorAll('.btn-comprar').forEach((boton) => {
    boton.addEventListener('click', () => {
      const producto = colecciones[Number(boton.dataset.col)].productos[Number(boton.dataset.prod)];
      abrirModalPago(producto);
    });
  });

  contenedor.querySelectorAll('.card-img-wrapper img').forEach((img) => {
    img.addEventListener('click', () => {
      const producto = colecciones[Number(img.dataset.col)].productos[Number(img.dataset.prod)];
      abrirLightbox(producto);
    });
  });
}

function abrirLightbox(producto) {
  document.getElementById('lightbox-img').src = producto.imagen;
  document.getElementById('lightbox-img').alt = producto.nombre;
  document.getElementById('lightbox-nombre').textContent = producto.nombre;
  document.getElementById('lightbox').hidden = false;
}

function cerrarLightbox() {
  document.getElementById('lightbox').hidden = true;
}

function abrirModalPago(producto) {
  document.getElementById('modal-producto-nombre').textContent = producto.nombre;
  document.getElementById('pago-banco').textContent = datosPago.banco;
  document.getElementById('pago-tipo').textContent = datosPago.tipoCuenta;
  document.getElementById('pago-numero').textContent = datosPago.numeroCuenta;
  document.getElementById('pago-titular').textContent = datosPago.titular;
  document.getElementById('pago-id').textContent = datosPago.identificacion;
  document.getElementById('pago-qr').src = datosPago.qrImagen;

  document.getElementById('modal-pago').hidden = false;
}

function cerrarModalPago() {
  document.getElementById('modal-pago').hidden = true;
}

function renderizarContacto() {
  document.getElementById('contacto-telefonos').innerHTML =
    contacto.telefonos.map((t) => `<span>${t}</span>`).join('');
  document.getElementById('contacto-instagram').textContent = `Instagram: ${contacto.instagram}`;
  document.getElementById('contacto-nota').textContent = contacto.nota;
}

document.getElementById('cerrar-modal').addEventListener('click', cerrarModalPago);

document.getElementById('modal-pago').addEventListener('click', (evento) => {
  if (evento.target.id === 'modal-pago') {
    cerrarModalPago();
  }
});

document.getElementById('cerrar-lightbox').addEventListener('click', cerrarLightbox);

document.getElementById('lightbox').addEventListener('click', (evento) => {
  if (evento.target.id === 'lightbox') {
    cerrarLightbox();
  }
});

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') {
    cerrarModalPago();
    cerrarLightbox();
  }
});

document.getElementById('anio').textContent = new Date().getFullYear();

renderizarCatalogo();
renderizarContacto();
