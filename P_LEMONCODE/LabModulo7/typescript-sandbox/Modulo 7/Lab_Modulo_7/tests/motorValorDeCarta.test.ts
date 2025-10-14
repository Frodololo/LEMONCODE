import { valorDeCarta } from "../motor";

describe("valorDeCarta", () => {
  it("Derbería devolver el valor numérico para cartas entre 1 y 7", () => {
    for (let i = 1; i <= 7; i++) {
      expect(valorDeCarta(i)).toBe(i);
    }
  });
  it("Debería devovler 0.5 para cartas mayores o iguales a 10", () => {
    [10, 11, 12].forEach((num) => {
      expect(valorDeCarta(num)).toBe(0.5);
    });
  });
  it("Comprobar que maneja correctamente valores fuera de rango (por debajo de 1 o mayores de 12)", () => {
    expect(valorDeCarta(0)).toBe(0);
    expect(valorDeCarta(13)).toBe(0.5);
  });
});
