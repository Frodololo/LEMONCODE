import { juego } from "../modelo";
import { obtenerEstadoPartida, valorDeCarta, obtenerNumeroAleatorio, dameCarta } from "../motor";
import { vi } from 'vitest';

describe("obtenerEstadoPartida", () => {
    it("Debería devolver 'jugando' cuando la puntuación es mayor a PUNTUACION_MAX", () => {
        // Arrange
        vi.spyOn(juego, 'puntuacion', 'get').mockReturnValue(5);
        // Act
        const resultado = obtenerEstadoPartida();
        // Assert
        expect(resultado).toBe("jugando");
        expect(juego.estado).toBe("jugando");
    });
    it("Debería devolver 'ganado' cuando la puntuación es igual a PUNTUACION_MAX", () => {
        // Arrange
        vi.spyOn(juego, 'puntuacion', 'get').mockReturnValue(7.5);
        // Act
        const resultado = obtenerEstadoPartida();
        // Assert
        expect(resultado).toBe("ganado");
        expect(juego.estado).toBe("ganado");
    });
    it("Debería devolver 'perdido' cuando la puntuación es mayor a PUNTUACION_MAX", () => {
        // Arrange
        vi.spyOn(juego, 'puntuacion', 'get').mockReturnValue(10);
        // Act
        const resultado = obtenerEstadoPartida();
        // Assert
        expect(resultado).toBe("perdido");
        expect(juego.estado).toBe("perdido");
    });
});

describe("valorDeCarta", () => {
  it('Debería de devolver 0.5, cuando le pasamos un valor igual a 11', () => {
    // Arrange
    const carta = 11;
    const resultadoEsperado = 0.5;
    // Act
    const resultado = valorDeCarta(carta);
    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it('Debería de devolver 5, cuando le pasamos un valor igual a 5', () => {
    // Arrange
    const carta = 5;
    const resultadoEsperado = 5;
    // Act
    const resultado = valorDeCarta(carta);
    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("obtenerNumeroAleatorio", () => {
  it('Debería de devolver un 5, cuando el número aletorio es 0.4', () => {
    // Arrange
    const resultadoEsperado = 5;
    vi.spyOn(Math, "random").mockReturnValue(0.4);
    // Act
    const resultado = obtenerNumeroAleatorio();
    // Assert
    expect(resultado).toBe(resultadoEsperado);
  })
});

describe("dameCarta", () => {
    it("Debería de devolver un 6, cuando el número de la carta es 6", () => {
        // Arrange
        const carta = 6;
        const resultadoEsperado = 6;
        // Act
        const resultado = dameCarta(carta);
        // Assert
        expect(resultado).toBe(resultadoEsperado)
    });
    it("Debería de darme un 10, cuando el número de la carta es 8", () => {
        // Arrange
        const carta = 8;
        const resultadoEsperado = 10;
        // Act
        const resultado = dameCarta(carta);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});