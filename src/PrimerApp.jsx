import React from "react";
import PropTypes from "prop-types"; //tipos de properties que recibe el c0omponente
const user = {
  nombre: "Robert",
  edad: 38,
};
//funcional component, fragment <>
const PrimerApp = (props) => {
  //destructuracion
  let { saludo, subtitulo = "soy un subtitulo" } = props;
  // if(!saludo) throw ;
  console.log(props);
  return (
    <>
      {/* <pre>{JSON.stringify(saludo, null, 2)}</pre> */}
      <h1>{user.nombre}</h1>
      <h5>{saludo}</h5>
      <h6>{subtitulo}</h6>
    </>
  );
};
PrimerApp.propTypes = {
  //tipos de propiedades, validacion que se necesita ese valor
  saludo: PropTypes.string.isRequired,
};
PrimerApp.defaultProps = {
  //Valores por defecto de props
  subtitulo: "soy un subtitulo",
};
export default PrimerApp;
