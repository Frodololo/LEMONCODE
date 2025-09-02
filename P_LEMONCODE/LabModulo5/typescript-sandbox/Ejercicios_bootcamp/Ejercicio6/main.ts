const calculosDiasHastaElViernes = () => {
  const ahora = new Date();
  const diaActual = ahora.getDay();
  const horaActual = ahora.getHours();
  let diasQueFaltan = (5 - diaActual + 7) % 7;
  if (diasQueFaltan === 0) {
    if (horaActual >= 0) {
        diasQueFaltan = 7
    }
}
const horasQueFaltan = diasQueFaltan * 24 - horaActual;

return horasQueFaltan;

};

console.log("Horas que faltan para el viernes:", calculosDiasHastaElViernes());