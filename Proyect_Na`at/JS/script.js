console.log("Sitio cargado correctamente");

// Validación básica del formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (!nombre || !correo || !mensaje) {
        alert('Por favor completa todos los campos.');
        return;
      }

      // Aquí podrías agregar lógica para enviar datos a un servidor
      alert('Mensaje enviado con éxito. ¡Gracias por contactarnos!');
      form.reset();
    });
  }
});

// Desplazamiento suave al hacer clic en enlaces con #
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
