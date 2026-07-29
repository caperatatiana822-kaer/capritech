const fs = require('fs');

function createLog(error) {
  const fecha = new Date().toLocaleString();
  const texto = fecha + " - Error: " + error.message + "\n";

  console.log(texto);

  fs.appendFile('logs.txt', texto, function (err) {
    if (err) {
      console.log("no se pudo guardar el log");
    }
  });
}

module.exports = { createLog };