// circuitos.js
document.addEventListener("DOMContentLoaded", () => {
  const podios = {
    australia: [
      "1. Lando Norris – McLaren",
      "2. Max Verstappen – Red Bull",
      "3. George Russell – Mercedes"
    ],
    china: [
      "1. Oscar Piastri – McLaren",
      "2. Lando Norris – McLaren",
      "3. George Russell – Mercedes"
    ],
    japon: [
      "1. Max Verstappen – Red Bull",
      "2. Lando Norris – McLaren",
      "3. Oscar Piastri – McLaren"
    ],
    
    bahrein: [
        "1. Oscar Piastri – McLaren",
        "2. George Russell – Mercedes",
        "3. Lando Norris – McLaren"
    ],

    arabia: [
        "1. Oscar Piastri – McLaren",
        "2. Max Verstappen – Red Bull",
        "3. Charles Leclerc – Ferrari"

    ],

    miami: [
        "1. Oscar Piastri – McLaren",
        "2. Lando Norris – McLaren",
        "3. George Russell – Mercedes"

    ],

    imola: [
        "1. Max Verstappen – Red Bull",
        "2. Lando Norris – McLaren",
        "3. Oscar Piastri – McLaren"

    ],

    monaco: [
        "1. Lando Norris – McLaren",
        "2. Charles Leclerc – Ferrari",
        "3. Oscar Piastri – McLaren"
    ],

    espana: [
        "1. Oscar Piastri – McLaren",
        "2. Lando Norris – McLaren",
        "3. Charles Leclerc – Ferrari"

    ],

    canada: [
        "1. George Russell – Mercedes",
        "2. Max Verstappen – Red Bull",
        "3. Kimi Antonelli – Mercedes"
    ],
    austria: ["1. …","2. …","3. …"],
    gran_bretana: ["1. …","2. …","3. …"],
    hungria: ["1. …","2. …","3. …"],
    belgica: ["1. …","2. …","3. …"],
    paises_bajos: ["1. …","2. …","3. …"],
    italia: ["1. …","2. …","3. …"],
    azerbaijan: ["1. …","2. …","3. …"],
    singapur: ["1. …","2. …","3. …"],
    estados_unidos: ["1. …","2. …","3. …"],
    mexico: ["1. …","2. …","3. …"],
    brasil: ["1. …","2. …","3. …"],
    las_vegas: ["1. …","2. …","3. …"],
    qatar: ["1. …","2. …","3. …"],
    "abu-dhabi": ["1. …","2. …","3. …"]
  };

  document.querySelectorAll(".btn-resultados").forEach(boton => {
    boton.addEventListener("click", () => {
      const id = boton.dataset.circuito;
      const resultadosDiv = document.getElementById("res-" + id);
      if (!resultadosDiv) return;

      if (resultadosDiv.classList.contains("hidden")) {
        const lista = podios[id];
        if (lista) {
          resultadosDiv.innerHTML = `
            <p><strong>Podio GP ${formatearNombre(id)}:</strong></p>
            <ul>${lista.map(item => `<li>${item}</li>`).join("")}</ul>
          `;
        } else {
          resultadosDiv.innerHTML = `<p>No hay datos de resultados para ${formatearNombre(id)}.</p>`;
        }
        resultadosDiv.classList.remove("hidden");
        boton.textContent = "Ocultar resultados";
      } else {
        resultadosDiv.classList.add("hidden");
        boton.textContent = "Ver resultados";
      }
    });
  });
});

function formatearNombre(s) {
  return s.split(/[-_]/).map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
}
