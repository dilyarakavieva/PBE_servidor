//es para base de datos aun no se si nos sirve
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("boton");
    const contenedor = document.getElementById("contenedor");
  
    boton.addEventListener("click", () => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta";
      tarjeta.textContent = "¡Hola! Soy una tarjeta nueva.";
      contenedor.appendChild(tarjeta);
    });
  });
  
