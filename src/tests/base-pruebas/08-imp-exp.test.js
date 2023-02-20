import { getHeroeById, getHeroesByOwner } from "../../bases-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de heroes", () => {
  test("Debe retornar un hero por id", () => {
    //inicializacion
    const id = 1;
    const heroe = getHeroeById(id);
    console.log(heroe);
    //estimulo
    const heroesData = heroes.find((heroe) => heroe.id === id);

    expect(heroe).toEqual(heroesData);
  });
  test("Debe retornar un hero undefine si hero no existe", () => {
    //inicializacion
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });
  test("Debe retornar un arreglo  con los heroes de DC ToEqual al arreglo filtrado", () => {
    //inicializacion
    const owner = "DC";
    const owners = getHeroesByOwner(owner);
    // console.log(owners);
    //estimulo
    const heroesData = owners.filter((heroe) => heroe.owner === owner);
    // console.log(heroesData);
    //observacion
    expect(heroesData).toEqual(owners);
  });
  test("Debe retornar un arreglo  con los heroes de Marvel ToEqual al arreglo filtrado", () => {
    //inicializacion
    const owner = "Marvel";
    const owners = getHeroesByOwner(owner);
    // console.log(owners);
    //estimulo
    //observacion
    expect(owners.length).toBe(2);
  });
});
