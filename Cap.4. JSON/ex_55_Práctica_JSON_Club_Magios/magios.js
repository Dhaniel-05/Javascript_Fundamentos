let foto = document.createElement("img");
foto.src = "homero.jpg";

function consulta() {
  let datosjson;
  fetch("resumen.json")
    .then((respuesta) => respuesta.json())
    .then((salida) => {
      datosjson = salida;

      document.getElementById("titular");
      titular.textContent = salida.titular;

      document.getElementById("no_miembro");
      no_miembro.textContent = "No. de miembro: " + salida.no_miembro;

      document.getElementById("direccion");
      direccion.textContent = "Direccion: " + salida.direccion;

      document.getElementById("telefono");
      telefono.textContent = "Teléfono: " + salida.telefono;

      document.getElementById("email");
      email.textContent = "email: " + salida.email;

      document.getElementById("saldo_usd");
      saldo_usd.textContent = "Saldo $US: " + salida.saldo[0].monto;

      document.getElementById("saldo_eu");
      saldo_eu.textContent = "Saldo EU: " + salida.saldo[1].monto;

      document.getElementById("miembro_desde");
      miembro_desde.textContent = "Miembro desde: " + salida.miembro_desde;

      let imagen = document.getElementById("foto");
      imagen.appendChild(foto);
    });
}
