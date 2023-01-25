"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function isCurso(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "horas" in value &&
        "tags" in value)
        return true;
    else
        return false;
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.forEach((curso) => {
            if (isCurso(curso)) {
                document.body.innerHTML += `
          <div>
            <h1>${curso.nome}</h1>
            <p>${curso.horas}</p>
            ${curso.tags.join(" | ")}
          </div>
        `;
            }
        });
    }
}
