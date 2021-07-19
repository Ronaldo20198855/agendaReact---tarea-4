import React from "react";

const CrudTableRow = ({ el }) => {
  let { nombre, apellido, telefono} = el;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{telefono}</td>
    </tr>
  );
};

export default CrudTableRow;
