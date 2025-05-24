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

// form-validation.js
export function validateForm() {
  // Código de validación
}

// main.js
import { validateForm } from './form-validation.js';

try {
  // Código que podría fallar
} catch (error) {
  console.error('Error en la operación:', error);
  // Mostrar mensaje amigable al usuario
}
document.getElementById('searchInput').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const articles = document.querySelectorAll('.article-card');
  
  articles.forEach(article => {
    const title = article.querySelector('.card-title').textContent.toLowerCase();
    const content = article.querySelector('.card-text').textContent.toLowerCase();
    
    if (title.includes(searchTerm) || content.includes(searchTerm)) {
      article.style.display = '';
    } else {
      article.style.display = 'none';
    }
  });
});

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    nombre: document.getElementById('nombre').value,
    correo: document.getElementById('correo').value,
    mensaje: document.getElementById('mensaje').value,
    fecha: new Date().toISOString()
  };
  
  // Guardar en localStorage
  const mensajes = JSON.parse(localStorage.getItem('mensajes') || '[]');
  mensajes.push(formData);
  localStorage.setItem('mensajes', JSON.stringify(mensajes));
  
  alert('Mensaje enviado con éxito. ¡Gracias por contactarnos!');
  this.reset();
});
