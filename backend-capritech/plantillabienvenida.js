function plantillaBienvenida(tatiana) {
  const fecha = new Date().toLocaleString();

  const html = `
    <h2>Bienvenido a CapriTech</h2>
    <p>Hola ` + tatiana + `, tu registro fue exitoso.</p>
    <p>Fecha: ` + fecha + `</p>
    <hr>
    <p>CapriTech - Sistema de gestion de caprinos</p>
  `;

  return html;
}

module.exports = { plantillaBienvenida };