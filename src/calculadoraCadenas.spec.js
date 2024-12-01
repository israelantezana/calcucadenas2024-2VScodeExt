describe("Calculadora de cadenas", () => {
  it("cadena vacia suma 0", () => {
    expect(sumar("")).toEqual(0);
  });

  it("cadena de un numero retorna el mismo numero", () => {
    expect(sumar("1")).toEqual(1);
  });
});

function sumar(cadena) {
  if (cadena === "") {
    return 0;
  }
  return Number.parseInt(cadena);
}
