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

// Ejercicio 1a

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[],
): Pacientes[] => {
  let pacientesPediatria: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesPediatria = [...pacientesPediatria, pacientes[i]];
    }
  }
  return pacientesPediatria;
};

const pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesPediatria);

// Ejercicio 1b

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[],
): Pacientes[] => {
  let pacientesPediatriaMenoresDeDiez: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesPediatriaMenoresDeDiez = [
        ...pacientesPediatriaMenoresDeDiez,
        pacientes[i],
      ];
    }
  }
  return pacientesPediatriaMenoresDeDiez;
};

const pacientesPediatriaMenoresDeDiez =
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(pacientesPediatriaMenoresDeDiez);

// Ejercicio 2: Activar protocolo de urgencia si cualquiera de los pacientes tiene un ritmo cardiaco superior a 100 y una temperatura corporal superior a 39 grados

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
      break;
    }
  }
  return activarProctolo;
};

const protocoloUrgencia = activarProtocoloUrgencia(pacientes);
console.log(protocoloUrgencia);

// Ejercicio 2B: Lo mismo pero usando while

const activarProtocoloUrgenciaWhile = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  let i = 0;

  while (i < pacientes.length) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
      break;
    }
    i++;
  }
  return activarProctolo;
};

const protocoloUrgenciaWhile = activarProtocoloUrgenciaWhile(pacientes);
console.log(protocoloUrgenciaWhile);

// Ejercicio 3: Reasignar los pacientes de pediatría a medicina de familia con spread operator

const reasignarPacientesPediatriaAMedicinaDeFamilia = (
  pacientes: Pacientes[],
): Pacientes[] => {
  let pacientesReasignados: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesReasignados = [
        ...pacientesReasignados,
        { ...pacientes[i], especialidad: "Medico de familia" },
      ];
    }
  }
  return pacientesReasignados;
};

const pacientesReasignados =
  reasignarPacientesPediatriaAMedicinaDeFamilia(pacientes);
console.log(pacientesReasignados);

// Ejercicio 3B: Lo mismo pero usando while

const reasignarPacientesPediatriaAMedicinaDeFamiliaWhile = (
  pacientes: Pacientes[],
): Pacientes[] => {
  let pacientesReasignados: Pacientes[] = [];
  let i = 0;

  while (i < pacientes.length) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesReasignados = [
        ...pacientesReasignados,
        { ...pacientes[i], especialidad: "Medico de familia" },
      ];
    }
    i++;
  }
  return pacientesReasignados;
};

const pacientesReasignadosWhile =
  reasignarPacientesPediatriaAMedicinaDeFamiliaWhile(pacientes);
console.log(pacientesReasignadosWhile);

// Ejercicio 4: Comprobar si en la lista hay algún paciente asignado a pediatría

const comprobarPacientesAsignadosAPediatria = (
  pacientes: Pacientes[],
): boolean => {
  let hayPacientesPediatria = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      hayPacientesPediatria = true;
      break;
    }
  }
  return hayPacientesPediatria;
};

const hayPacientesPediatria = comprobarPacientesAsignadosAPediatria(pacientes);
console.log(hayPacientesPediatria);

// Ejercicio 4B: Lo mismo pero usando while

const comprobarPacientesAsignadosAPediatriaWhile = (
  pacientes: Pacientes[],
): boolean => {
  let hayPacientesPediatria = false;
  let i = 0;

  while (i < pacientes.length) {
    if (pacientes[i].especialidad === "Pediatra") {
      hayPacientesPediatria = true;
      break;
    }
    i++;
  }
  return hayPacientesPediatria;
};

const hayPacientesPediatriaWhile =
  comprobarPacientesAsignadosAPediatriaWhile(pacientes);
console.log(hayPacientesPediatriaWhile);

// Ejercicio 5: Calcular el número total de paciantes asignados a la especialidad de Medico de familia y los que están asignados a Pediatría y Cardiología

const calcularNumeroPacientesPorEspecialidad = (
  pacientes: Pacientes[],
): { medicoDeFamilia: number; pediatria: number; cardiologia: number } => {
  let numeroMedicoDeFamilia = 0;
  let numeroPediatria = 0;
  let numeroCardiologia = 0;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      numeroMedicoDeFamilia++;
    } else if (pacientes[i].especialidad === "Pediatra") {
      numeroPediatria++;
    } else if (pacientes[i].especialidad === "Cardiólogo") {
      numeroCardiologia++;
    }
  }
  return {
    medicoDeFamilia: numeroMedicoDeFamilia,
    pediatria: numeroPediatria,
    cardiologia: numeroCardiologia,
  };
};

const numeroPacientesPorEspecialidad =
  calcularNumeroPacientesPorEspecialidad(pacientes);
console.log(numeroPacientesPorEspecialidad);
