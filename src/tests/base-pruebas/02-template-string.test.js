//incro
import { getSaludo } from "../../bases-pruebas/02-template-string";

describe("Pruebas de archivo 02-template-string", () => {
  test("getSaludo debe retornar hola", () => {
    //inicilaizacion
    const nombre = "Fernando";
    //estimulo
    const saludo = getSaludo(nombre);
    //3 observamos que tenemos que esperar
    expect(saludo).toBe("Hola " + nombre);
  });
  //get saludo debe retornar hola Carlos si no hay argumentos
  test("getSaludo debe retornar hola Carlos si no hay argumento", () => {
    //inicilaizacion
    //estimulo
    const saludo = getSaludo();
    //3 observamos que tenemos que esperar
    expect(saludo).toBe("Hola Carlos");
  });
});
