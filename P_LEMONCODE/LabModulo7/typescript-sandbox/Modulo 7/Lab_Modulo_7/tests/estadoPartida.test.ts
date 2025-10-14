import { PUNTUACION_MAX, juego } from "../modelo";
import { obtenerEstadoPartida } from "../ui";

describe("obtenerEstadoPartida", () => {
    beforeEach(() => {
    // Reinicia el estado antes de cada test
    juego.puntuacion = 0;
    juego.estado = "jugando";
    });
    it("Debería devolver 'ganado' cuando la puntuación es igual a PUNTUACION_MAX", () => {
        // Arrange
        juego.puntuacion = PUNTUACION_MAX;
        // Act
        const resultado = obtenerEstadoPartida();
        // Assert
        expect(resultado).toBe("ganado");
        expect(juego.estado).toBe("ganado");
    });
    it("Debería devolver 'perdido' cuando la puntuación es mayor a PUNTUACION_MAX", () => {
        // Arrange
        juego.puntuacion = PUNTUACION_MAX + 1;
        // Act
        const resultado = obtenerEstadoPartida();
        // Assert
        expect(resultado).toBe("perdido");
        expect(juego.estado).toBe("perdido");
    });
    it("Debería devolver 'jugando' cuando la puntuación es mayor a PUNTUACION_MAX", () => {
        // Arrange
        juego.puntuacion = PUNTUACION_MAX - 2;
        juego.estado = "jugando";
        // Act
        const resultado = obtenerEstadoPartida();
        // Assert
        expect(resultado).toBe("jugando");
        expect(juego.estado).toBe("jugando");
    });
});