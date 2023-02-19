describe("Pruebas en el archivo demo.test.js", () => {
  //instala lo que es jest libreria de prueba
  test("Deben ser iguales", () => {
    // 1. inicialización
    const mensaje = "hola mundo";
    //   2. estimulo
    const mensaje2 = `hola mundo`;
    //   3. Observar el compartamiento , toBe es lo que espero expect es lo que se envia
    expect(mensaje2).toBe(mensaje);
  });
});
