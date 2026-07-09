// ============================================================
// ZUIP — lógica del catálogo
// Lee los datos de products.js (variables `colecciones`, `datosPago`
// y `contacto`). Este mismo archivo se usa en index.html (portada)
// y en coleccion.html (detalle de una colección): cada página
// renderiza solo la parte que le corresponde, según qué elementos
// existan en el HTML.
// ============================================================

function formatearPrecio(numero) {
  return numero.toLocaleString('es-ES');
}

// ---------- Portada (index.html): tarjetas de colección ----------

function crearTarjetaColeccion(coleccion) {
  const card = document.createElement('a');
  card.className = 'portada-card';
  card.href = `coleccion.html?id=${encodeURIComponent(coleccion.slug)}`;

  const portada = coleccion.productos[0];

  card.innerHTML = `
    <div class="portada-img-wrapper">
      <img src="${portada.imagen}" alt="${coleccion.nombre}" loading="lazy">
    </div>
    <h2 class="portada-nombre">${coleccion.nombre}</h2>
    <p class="portada-descripcion">${coleccion.descripcion}</p>
  `;

  return card;
}

function renderizarPortada() {
  const contenedor = document.getElementById('portada');
  colecciones.forEach((coleccion) => {
    contenedor.appendChild(crearTarjetaColeccion(coleccion));
  });
}

// ---------- Detalle de colección (coleccion.html) ----------

function crearTarjetaProducto(producto, indice) {
  const card = document.createElement('article');
  card.className = 'card';

  const hayStock = producto.cantidad > 0;
  const badgeClase = hayStock ? 'badge-disponible' : 'badge-agotado';
  const badgeTexto = hayStock ? `Hay ${producto.cantidad} disponibles` : 'Agotado';

  const botonHtml = hayStock
    ? `<button class="btn-comprar" data-indice="${indice}">Cómo pagar</button>`
    : `<button class="btn-agotado" disabled>Agotado</button>`;

  card.innerHTML = `
    <div class="card-img-wrapper">
      <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" data-indice="${indice}">
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

function renderizarColeccion() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('id');
  const coleccion = colecciones.find((c) => c.slug === slug);
  const contenedor = document.getElementById('coleccion-detalle');

  if (!coleccion) {
    contenedor.innerHTML = `
      <p class="coleccion-no-encontrada">
        No encontramos esa colección. <a href="./">Volver al catálogo</a>.
      </p>
    `;
    return;
  }

  document.title = `ZUIP — ${coleccion.nombre}`;

  contenedor.innerHTML = `
    <h1 class="coleccion-titulo">${coleccion.nombre}</h1>
    <p class="coleccion-descripcion">${coleccion.descripcion}</p>
    <div class="catalogo-grid" id="coleccion-grid"></div>
  `;

  const grid = document.getElementById('coleccion-grid');
  coleccion.productos.forEach((producto, indice) => {
    grid.appendChild(crearTarjetaProducto(producto, indice));
  });

  grid.querySelectorAll('.btn-comprar').forEach((boton) => {
    boton.addEventListener('click', () => {
      const producto = coleccion.productos[Number(boton.dataset.indice)];
      abrirModalPago(producto);
    });
  });

  grid.querySelectorAll('.card-img-wrapper img').forEach((img) => {
    img.addEventListener('click', () => {
      const producto = coleccion.productos[Number(img.dataset.indice)];
      abrirLightbox(producto);
    });
  });
}

// ---------- Lightbox de imagen (solo coleccion.html) ----------

function abrirLightbox(producto) {
  document.getElementById('lightbox-img').src = producto.imagen;
  document.getElementById('lightbox-img').alt = producto.nombre;
  document.getElementById('lightbox-nombre').textContent = producto.nombre;
  document.getElementById('lightbox').hidden = false;
}

function cerrarLightbox() {
  document.getElementById('lightbox').hidden = true;
}

// ---------- Modal de pago (solo coleccion.html) ----------

function abrirModalPago(producto) {
  document.getElementById('modal-producto-nombre').textContent = producto.nombre;
  document.getElementById('pago-banco').textContent = datosPago.banco;
  document.getElementById('pago-tipo').textContent = datosPago.tipoCuenta;
  document.getElementById('pago-numero').textContent = datosPago.numeroCuenta;
  document.getElementById('pago-titular').textContent = datosPago.titular;
  document.getElementById('pago-id').textContent = datosPago.identificacion;
  document.getElementById('pago-id-fila').hidden = !datosPago.identificacion;
  document.getElementById('pago-correo').textContent = datosPago.correo;
  document.getElementById('pago-qr').src = datosPago.qrImagen;

  document.getElementById('modal-pago').hidden = false;
}

function cerrarModalPago() {
  document.getElementById('modal-pago').hidden = true;
}

// ---------- Contacto (portada y detalle) ----------

function renderizarContacto() {
  document.getElementById('contacto-telefonos').innerHTML =
    contacto.telefonos.map((t) => `<span>${t}</span>`).join('');
  document.getElementById('contacto-instagram').textContent = `Instagram: ${contacto.instagram}`;
  document.getElementById('contacto-nota').textContent = contacto.nota;
}

// ---------- Arranque: cada página renderiza solo lo que tiene ----------

if (document.getElementById('portada')) {
  renderizarPortada();
}

if (document.getElementById('coleccion-detalle')) {
  renderizarColeccion();

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
}

document.getElementById('anio').textContent = new Date().getFullYear();
renderizarContacto();
