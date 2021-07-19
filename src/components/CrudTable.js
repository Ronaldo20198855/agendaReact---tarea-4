import React from "react";
import CrudTableRow from "./CrudTableRow";
import '../assets/css/CrudTable.css';

const CrudTable = ({ data }) => {
  return (
    <div>
      <div className="div-h3 container"><h3>Contactos Agendados</h3></div> 
      <table >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
          </tr>
        </thead>
         { <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody> } 
      </table>
    </div>
  );
};

export default CrudTable;
