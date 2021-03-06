import PropTypes from "prop-types";
import React from "react";

const Clima = ({ resultado }) => {
  // Extraer los valores
  const { name, main } = resultado;

  if (!name) return null;

  // grados Kelvin
  const Kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es: </h2>
        <p className="temperatura">
          {parseFloat(main.temp - Kelvin, 10).toFixed(1)} <span> &#x2103;</span>
        </p>
        <p>
          Temperatura maxima:{" "}
          {parseFloat(main.temp_max - Kelvin, 10).toFixed(1)}{" "}
          <span> &#x2103;</span>
        </p>
        <p>
          Temperatura minima:{" "}
          {parseFloat(main.temp_min - Kelvin, 10).toFixed(1)}{" "}
          <span> &#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.any,
      temp_max: PropTypes.any,
      temp_min: PropTypes.any,
    }),
    name: PropTypes.any,
  }),
};

export default Clima;
