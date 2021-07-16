import PropTypes from "prop-types";
import React from "react";

const Error = ({ mensaje }) => {
  return <p className="error">{mensaje}</p>;
};

Error.propTypes = {
  mensaje: PropTypes.any,
};

export default Error;
