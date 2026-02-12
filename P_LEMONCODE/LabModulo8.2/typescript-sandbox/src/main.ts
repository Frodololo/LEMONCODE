type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Ejercicio 1: Extraer pacientes que están en la especialidad de "Pediatría"

const pacientesPediatría: Pacientes[] = pacientes.filter((paciente: Pacientes) => paciente.especialidad === "Pediatra");
console.log(pacientesPediatría);

// Ejercicio 1B: Extraer pacientes que están en la especialidad de "Pediatría" y tienen una edad menor a 10 años

const pacientesPediatríaMenores10: Pacientes[] = pacientes.filter((paciente: Pacientes) => paciente.especialidad === "Pediatra" && paciente.edad < 10);
console.log(pacientesPediatríaMenores10);

// Ejercicio 2: Protocolo de urgencia activado si cualqueira de los poacientes tiene un ritmo cardiaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados

const activarProtocoloUrgencia: boolean = pacientes.some((paciente: Pacientes) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39);
console.log(activarProtocoloUrgencia);

// Ejercicio 3; Reasignar a Medico de familia a los pacientes que están en la especialidad de "Pediatrñia"

const pacientesReasignadosMedicoFamilia: Pacientes[] = pacientes.map((paciente: Pacientes) =>
  paciente.especialidad === "Pediatra"
    ? { ...paciente, especialidad: "Medico de familia" }
    : paciente
);

console.log(pacientesReasignadosMedicoFamilia);

// Ejercicio 4: Comprobar si en la lista hay algún paciente asignado a pediatría

const hayPacientesPediatría: boolean = pacientes.some((paciente: Pacientes) => paciente.especialidad === "Pediatra");
console.log(hayPacientesPediatría);

// Ejercicio 5: Calcular el número total de pacientes atendidos por cada especialidad

interface pacientesPorEspecialidad {
    medicoDeFamilia: number;
pediatra: number;
cardiologo: number;
}

const conteoPacientesPorEspecialidad: pacientesPorEspecialidad = pacientes.reduce(
  (contador: pacientesPorEspecialidad, paciente: Pacientes) => {
    if (paciente.especialidad === "Medico de familia") {
      return { ...contador, medicoDeFamilia: contador.medicoDeFamilia + 1 };
    } else if (paciente.especialidad === "Pediatra") {
      return { ...contador, pediatra: contador.pediatra + 1 };
    } else {
      return { ...contador, cardiologo: contador.cardiologo + 1 };
    }
  },
  { medicoDeFamilia: 0, pediatra: 0, cardiologo: 0 }
);

console.log(conteoPacientesPorEspecialidad);






