// Guardar y recuperar datos del localStorage
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nombre").value = localStorage.getItem("nombre") || "";
  document.getElementById("email").value = localStorage.getItem("email") || "";
  document.getElementById("mensaje").value = localStorage.getItem("mensaje") || "";
});

document.getElementById("nombre").addEventListener("input", e => {
  localStorage.setItem("nombre", e.target.value);
});
document.getElementById("email").addEventListener("input", e => {
  localStorage.setItem("email", e.target.value);
});
document.getElementById("mensaje").addEventListener("input", e => {
  localStorage.setItem("mensaje", e.target.value);
});

// Validación y envío del formulario
const form = document.getElementById("contactForm");
const confirmacion = document.getElementById("confirmacion");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor, completá todos los campos obligatorios.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresá un correo electrónico válido.");
    return;
  }

  form.reset();
  localStorage.removeItem("nombre");
  localStorage.removeItem("email");
  localStorage.removeItem("mensaje");

  confirmacion.classList.remove("hidden");
});
