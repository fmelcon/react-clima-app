import React, { useState, useEffect, Fragment } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
  });
  const [consulta, setConsulta] = useState(false);
  const { ciudad, pais } = search;
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      if (consulta) {
        const appId = "5f18e35db10acc548732aed4a16f7f46";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const response = await fetch(url);
        const resultado = await response.json();
        setResultado(resultado);
        setConsulta(false);
        // Detecta si hubo resultados correctos o no
        if (resultado.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultarAPI();
  }, [ciudad, consulta, pais]);

  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados" />;
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsulta={setConsulta}
              />
            </div>
            <div className="col m6 s12">{componente}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
