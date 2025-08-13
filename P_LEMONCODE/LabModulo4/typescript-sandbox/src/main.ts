// Variable inicial

let turno = 1;

// Referencia y botones para cambiar de turno

const numeroTurno = document.getElementById("numero-turno") as HTMLHeadingElement;
const anterior = document.getElementById("anterior") as HTMLButtonElement;
const siguiente = document.getElementById("siguiente") as HTMLButtonElement;
const reset = document.getElementById("reset") as HTMLButtonElement;

// Referencias para el Challenge

const turnoPersonalizado = document.getElementById("turno-personalizado") as HTMLInputElement;
const cambio = document.getElementById("cambio") as HTMLButtonElement;

// Función para actualizar el turno

function actualizarTurno() {
    numeroTurno.textContent = turno.toString().padStart(2, "0");
}
// Eventos aplicados a cada botón

siguiente.addEventListener("click", () => {
    turno++;
    actualizarTurno();
});

anterior.addEventListener("click", () => {
    if (turno > 0) {
        turno--;
        actualizarTurno();
    }
});

reset.addEventListener("click", () => {
    turno = 0;
    actualizarTurno();
});

cambio.addEventListener("click", () => {
    const miturno = parseInt(turnoPersonalizado.value);
    turno = miturno;
    actualizarTurno()
});
