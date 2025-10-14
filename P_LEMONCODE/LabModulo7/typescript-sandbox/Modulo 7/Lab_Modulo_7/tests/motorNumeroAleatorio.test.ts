import { obtenerNumeroAleatorio, dameCarta } from "../motor";
import { vi } from "vitest";

describe("obtenerNumeroAleatorio", () => {
  it("devuelve un número entero entre 1 y 10", () => {
    // Arrange y Act
    const valor = obtenerNumeroAleatorio();
    // Assert
    expect(valor).toBeGreaterThanOrEqual(1);
    expect(valor).toBeLessThanOrEqual(10);
    expect(Number.isInteger(valor)).toBe(true);
  });
  it("usa Math.random correctamente (mock)", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.7); // (0.7 * 10) + 1 = 8
    expect(obtenerNumeroAleatorio()).toBe(8);
    vi.restoreAllMocks();
  });
});

describe("dameCarta", () => {
  it("Debe devolver el mismo número si es menor o igual que 7", () => {
    expect(dameCarta(5)).toBe(5);
  });

  it("Debe devolver el número más 2 si es mayor que 7", () => {
    expect(dameCarta(8)).toBe(10);
  });
});
