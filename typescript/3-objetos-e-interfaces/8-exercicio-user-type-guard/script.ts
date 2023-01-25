async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}

fetchCursos();

interface Curso {
  nome: string;
  gratuito: boolean;
  horas: number;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "avançado";
  aulas: number;
}

function isCurso(value: unknown): value is Curso {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "horas" in value &&
    "tags" in value
  )
    return true;
  else return false;
}

function handleCursos(data: unknown) {
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
