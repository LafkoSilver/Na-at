document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    mensaje: document.getElementById("mensaje").value,
    fecha: new Date().toISOString(),
  };

  // Guardar en localStorage
  const mensajes = JSON.parse(localStorage.getItem("mensajes") || "[]");
  mensajes.push(formData);
  localStorage.setItem("mensajes", JSON.stringify(mensajes));

  alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
  this.reset();
});
