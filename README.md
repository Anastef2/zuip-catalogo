# ZUIP — Catálogo de gafas

Sitio estático (HTML + CSS + JS puro) para mostrar el catálogo de ZUIP.

## Cómo editar el catálogo

Todo el catálogo se maneja desde un solo archivo: [`js/products.js`](js/products.js).

Para agregar, quitar o modificar una gafa, edita la lista `productos`. Cada gafa tiene:

- `nombre`
- `precio`
- `imagen` (ruta dentro de `/images`)
- `disponible` (`true` o `false`)
- `descripcion` (opcional)

Para cambiar los datos de transferencia (banco, cuenta, titular, QR), edita el objeto `datosPago` en el mismo archivo.

## Cómo agregar tus propias fotos

1. Sube tus fotos a la carpeta `images/` (formato `.jpg` o `.png`).
2. En `js/products.js`, cambia el campo `imagen` de cada gafa para que apunte a tu archivo, por ejemplo `images/aviador-negro.jpg`.

## Cómo agregar el logo

Sube tu archivo `logo.png` a la carpeta `images/`. El header ya está preparado: si `images/logo.png` existe, se muestra automáticamente en vez del texto "ZUIP".

## Cómo agregar el código QR de pago

Sube tu imagen de QR (por ejemplo `qr.png`) a `images/` y actualiza el campo `qrImagen` dentro de `datosPago` en `js/products.js`.

## Publicar cambios

Después de editar archivos localmente:

```bash
git add .
git commit -m "Actualizar catálogo"
git push
```

Los cambios quedan visibles en unos minutos en la URL pública de GitHub Pages.
