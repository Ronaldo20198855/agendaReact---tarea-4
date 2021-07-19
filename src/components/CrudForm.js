import React, { useState, useEffect } from "react";
import '../assets/css/CrudForm.css';
import agregarP from '../assets/imagenes/agregarp.png'
const initailForm = {
  nombre: "",
  apellido: "",
  telefono: "",
 
};

const CrudForm = ({ createData}) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    
      setForm(initailForm);
    
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.apellido || !form.apellido) {
      alert("Datos incompletos");
      return;
    }
    createData(form);
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
  };

  return (
    <div id ="ac" className="container">
      <img src={agregarP} alt="navLogo" width="200" height="200" className="d-inline-block align-text-top"/>
      <h3 className="ac-h3">Agregar Persona</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.nombre}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChange}
          value={form.apellido}
        />
        <input
          type="number"
          name="telefono"
          placeholder="Telefono"
          onChange={handleChange}
          value={form.telefono}
        />
        <input id="form-button" type="submit" value="Enviar" />
    
      </form>
    </div>
  );
};

export default CrudForm;

