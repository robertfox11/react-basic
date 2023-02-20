import { getUser, getUsuarioActivo } from "../../bases-pruebas/05-funciones";

describe("Pruebas en funciones 05", () => {
  test("debe retornar un objeto, evaluacion de objetos", () => {
    //inicializacion
    const userTest = { uid: "ABC123", username: "El_Papi1502" };
    //estimulo
    const user = getUser();
    //observacion evaluar el objeto
    expect(user).toStrictEqual(userTest);
  });
  //get usuario Activo debe retornar un objeto
  test("Reetornar un objeto user activo", () => {
    //inicializacion
    const name = "robert";
    const userActivoTest = { uid: "ABC567", username: "robert" };
    //estimulo
    const userActivo = getUsuarioActivo(name);
    console.log(userActivo);
    expect(userActivo).toEqual(userActivoTest);
  });
});
