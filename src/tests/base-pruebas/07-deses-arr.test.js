import { retornaArreglo } from "../../bases-pruebas/07-deses-arr";

describe("Pruebas en desestructuracion", () => {
  test("Debe retornar un string y número", () => {
    //inicializacion
    const [letras, numeros] = retornaArreglo();
    // estimulo
    //observacion
    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");
    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
