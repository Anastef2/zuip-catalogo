// ============================================================
// ZUIP — lógica del catálogo
// Lee los datos de products.js (variables `productos` y `datosPago`)
// y arma las tarjetas + el modal de pago. No necesita edición
// para agregar/quitar gafas: eso se hace en products.js.
// ============================================================

function formatearPrecio(numero) {
  return numero.toLocaleString('es-ES');
}

function crearTarjeta(producto, indice) {
  const card = document.createElement('article');
  card.className = 'card';

  const badgeClase = producto.disponible ? 'badge-disponible' : 'badge-agotado';
  const badgeTexto = producto.disponible ? 'Disponible' : 'Agotado';

  const botonHtml = producto.disponible
    ? `<button class="btn-comprar" data-indice="${indice}">Cómo pagar</button>`
    : `<button class="btn-agotado" disabled>Agotado</button>`;

  card.innerHTML = `
    <div class="card-img-wrapper">
      <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
    </div>
    <div class="card-body">
      <h2 class="card-nombre">${producto.nombre}</h2>
      ${producto.descripcion ? `<p class="card-descripcion">${producto.descripcion}</p>` : ''}
      <span class="badge ${badgeClase}">${badgeTexto}</span>
      <p class="card-precio">$${formatearPrecio(producto.precio)}</p>
      ${botonHtml}
    </div>
  `;

  return card;
}

function renderizarCatalogo() {
  const contenedor = document.getElementById('catalogo');
  contenedor.innerHTML = '';

  productos.forEach((producto, indice) => {
    contenedor.appendChild(crearTarjeta(producto, indice));
  });

  contenedor.querySelectorAll('.btn-comprar').forEach((boton) => {
    boton.addEventListener('click', () => {
      const producto = productos[Number(boton.dataset.indice)];
      abrirModalPago(producto);
    });
  });
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

document.getElementById('cerrar-modal').addEventListener('click', cerrarModalPago);

document.getElementById('modal-pago').addEventListener('click', (evento) => {
  if (evento.target.id === 'modal-pago') {
    cerrarModalPago();
  }
});

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') {
    cerrarModalPago();
  }
});

document.getElementById('anio').textContent = new Date().getFullYear();

renderizarCatalogo();
