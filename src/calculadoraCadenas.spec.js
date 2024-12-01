describe("Calculadora de cadenas", () => {
  it("cadena vacia suma 0", () => {
    expect(sumar("")).toEqual(0);
  });

  it("cadena de un numero retorna el mismo numero", () => {
    expect(sumar("1")).toEqual(1);
  });

  it("cadena de dos numeros", () => {
    expect(sumar("1,2")).toEqual(3);
  });

  it("cadena de mas de dos numeros", () => {
    expect(sumar("1,2,3,4")).toEqual(10);
  });
});

function sumar(cadena) {
  if (cadena === "") {
    return 0;
  }
  let numeros = cadena.split(",");
  let total = 0;
  numeros.forEach((numero) => {
    total += Number.parseInt(numero);
  });
  return total;
}
