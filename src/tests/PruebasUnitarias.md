## Unitarias y de Integración

Unitarias, enfocadas en pequeñas funcionalidades
Integración Enfocadas en como reaccionan varias piezas en conjuntos

## Caracterisitcas de las pruebas

    Fáciles de escribir
    Fáciles de leer
    Confiables
    Rápidas
    Principalmente unitarias

### AAA

    Arrange, es el paso que establecemos el etado inicial
        inicializamos variables, importaciones necearias
    Actuar, Aplicamos acciones o estimulo de pruebas, realizamos acciones de pruebas anterior
    Afirmar, Observa el comportamiento resultantes

### Ejecutar react script

    se ejcuta npm run test
    ejcutara todo lo que tenga demo.test.js => doc https://jestjs.io/
    expect, se manda un valor incial y se espera que sea ese valor
    describe, es un agrupador general

### Utilizar funciones exportadas y hacer pruebas

    02-template-string.test
    Tenemos que exportar nuestra funcino para hcer las pruebas unitarias
    cuando se ejecuta podemos pulsar en la terminal w y luego p para
    filtrar el archivo    del test
