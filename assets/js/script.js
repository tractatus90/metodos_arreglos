const tareas = [
  { id: idAleatorio(), nombretarea: "estudiar arreglos", estado: false },
  { id: idAleatorio(), nombretarea: "estudiar metodos", estado: false },
  { id: idAleatorio(), nombretarea: "dormir", estado: false },
];

const enviarTarea = document.querySelector("#boton1");
const inputTarea = document.querySelector("#nueva-tarea");
const bodyTable = document.querySelector("#body-tabla");
const tareasParrafo = document.querySelector("#tareas-total");
const tareasHechas = document.querySelector("#tareas-realizadas");

function tareaRealizada(id) {
  const tareaEncontrada = tareas.findIndex((tar) => tar.id === id);
  if (tareaEncontrada >= 0) {
    tareas[tareaEncontrada].estado = true;
    const cambiarVerde = document.querySelector(`#cambiar-${id}`);
    cambiarVerde.style.color = "green";
  }
}

function idAleatorio() {
  return Math.floor(Math.random() * 300);
}

function actualizarTabla() {
  bodyTable.innerHTML = "";
  tareas.forEach(
    (x) =>
      (bodyTable.innerHTML += `<tr>
              <td id="cambiar"> ${x.id}</td>
              <td style="color: red" id="cambiar-${x.id}"> ${x.nombretarea} </td>
              <td><button onclick="tareaRealizada(${x.id}); tareasCompletasParrafo()">Completada</button</td> </tr>`)
  );
  console.log(tareas);
}

function tareasTotal() {
  tareasParrafo.innerHTML = `<p> Total: ${tareas.length} tareas</p>`;
}

function tareasCompletasParrafo() {
  const tareasCompletadas = tareas.filter((tarea) => tarea.estado === true);
  tareasHechas.innerHTML = `<p>Realizadas: ${tareasCompletadas.length} tareas </p>`;
}

enviarTarea.addEventListener("click", function () {
  const valorInput = inputTarea.value;
  if (valorInput) {
    const nuevaTarea = {
      id: idAleatorio(),
      nombretarea: valorInput,
      estado: false,
    };
    tareas.push(nuevaTarea);
    inputTarea.value = "";
    actualizarTabla();
    tareasTotal();
  } else {
    alert("Por favor ingresa una tarea");
  }
});
actualizarTabla();
tareasCompletasParrafo();
