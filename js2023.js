/*

let respuesta;
while (respuesta != "4") {
  let pregunta = prompt("Cuanto es 2 + 2?");
  console.log(pregunta)
  respuesta = pregunta;
}  

*/

const tiposDeSuscripciones = {
  free: "Solo puedes tomar los cursos gratis",
  basic: "Puedes tomar casi todos los cursos durante un mes",
  expert: "Puedes tomar casi todos los cursos durante un año",
  expertduo: "Tu y alguien más pueden tomar todos los cursos durante un año",
};

function conseguirTipoSuscripcion(suscripcion) {
  if (tiposDeSuscripciones[suscripcion]) {
    console.log(tiposDeSuscripciones[suscripcion]);
    return;
  }

  console.warn("Este tipo de suscripcion no existe")

}
