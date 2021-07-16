import React, { useState } from "react";
import Error from "./Error";

const Form = ({ search, setSearch, setConsulta }) => {
  // State Form

  const [error, setError] = useState(false);

  // Extraer ciudad y pais
  const { ciudad, pais } = search;

  // Funcion que coloca los elementos en el state

  const handleChange = (e) => {
    // Actualizar el state
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario da submit al form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion
    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    // Pasarlo al componente principal
    setConsulta(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad:</label>
        <div className="input-field col s12">
          <select name="pais" id="pais" value={pais} onChange={handleChange}>
            <option value="">-- Selectione un Pais --</option>
            <option value="AR">Argentina</option>
            <option value="BO">Bolivia</option>
            <option value="BR">Brazil</option>
            <option value="CL">Chile</option>
            <option value="CO">Colombia</option>
            <option value="PE">Perú</option>
            <option value="UY">Uruguay</option>
          </select>
          <label htmlFor="pais" className="pais">
            Pais:
          </label>
        </div>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-dark btn-large btn-block green accent"
        />
      </div>
    </form>
  );
};

export default Form;
