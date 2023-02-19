import React from "react";
import ReactDOM from "react-dom/client";
// import PrimerApp from "./PrimerApp"; //component
import "./index.css";
import CounterApp from "./CounterApp";
//renderizar este elemento por el id
const divRoot = document.querySelector("#root");

ReactDOM.createRoot(divRoot).render(
  //   <PrimerApp saludo />
  <CounterApp value={10} />
  //   divRoot
);

// ReactDOM.createRoot(divRoot).render(
// //   <React.StrictMode>
//     {/* Pasando datos con props saludo */}
//     <PrimerApp saludo="Hola Mundo" />,
// //   </React.StrictMode>
// );
// ReactDOM.render(<PrimerApp />, divRoot);
