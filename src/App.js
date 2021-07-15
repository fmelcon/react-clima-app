import React, { useState, useEffect, Fragment } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Clima from "./components/Clima";

function App() {
  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
  });
  const [consulta, setConsulta] = useState(false);
  const { ciudad, pais } = search;
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    const consultarAPI = async () => {
      if (consulta) {
        const appId = "5f18e35db10acc548732aed4a16f7f46";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const response = await fetch(url);
        const resultado = await response.json();
        setResultado(resultado);
        setConsulta(false);
      }
    };
    consultarAPI();
  }, [ciudad, consulta, pais]);

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
            <div className="col m6 s12">
              <Clima resultado={resultado} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
