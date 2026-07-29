require('dotenv').config();
const { sendEmail } = require('./src/services/emailService');
const { plantillaBienvenida } = require('./plantillaBienvenida');


async function probarCorreos() {
  const destinatario = "caperatatiana822@gmail.com"; 

  await sendEmail(
    destinatario,
    "Bienvenido a CapriTech",
    "Hola, tu registro fue exitoso",
    plantillaBienvenida("Tatiana")
  );
  console.log("correo de bienvenida enviado");

  await sendEmail(
    destinatario,
    "Recuperacion de contraseña",
    "Solicitaste recuperar tu contraseña",
    "<h2>Recuperacion de contraseña</h2><p>Da click en el link para continuar.</p>"
  );
  console.log("correo de recuperacion enviado");

  await sendEmail(
    destinatario,
    "Registro exitoso",
    "Tu registro fue exitoso",
    "<h2>Registro exitoso</h2><p>Tu cuenta ya esta creada.</p>"
  );
  console.log("correo de notificacion enviado");
}

probarCorreos();