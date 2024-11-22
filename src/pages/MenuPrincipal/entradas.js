import React, { useState } from 'react';
import Forms from '../../components/principal/forms';
import List from '../../components/principal/list';
import EditModal from '../../components/principal/modal';

function Entradas() {
  const [entradas, setEntradas] = useState([
    { producto: 'Producto 1', cantidad: 10, pedido: 'Pedido 1', fecha: '2024-11-17' },
    { producto: 'Producto 2', cantidad: 5, pedido: 'Pedido 2', fecha: '2024-11-18' },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({ producto: '', cantidad: '', pedido: '', fecha: '' });

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setModalShow(true);
    setUpdatedFields({ ...entradas[index] }); 
  };

  const handleSave = () => {
    const updatedEntradas = [...entradas];
    updatedEntradas[selectedIndex] = { ...updatedEntradas[selectedIndex], ...updatedFields };
    setEntradas(updatedEntradas);
    setModalShow(false);
  };

  const handleDelete = (index) => {
    const updatedEntradas = entradas.filter((_, idx) => idx !== index);
    setEntradas(updatedEntradas);
  };

  const handleSubmit = () => {
    const nuevaEntrada = {
      ...updatedFields,
      fecha: new Date().toISOString().split('T')[0], // Fecha actual
    };

    setEntradas([...entradas, nuevaEntrada]);
    setUpdatedFields({ producto: '', cantidad: '', pedido: '' }); // Limpiar el formulario
  };

  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }}>Registrar nueva entrada</h5>
     
      <Forms 
        campos={[
          { id: 'producto', tipo: 'text', placeholder: 'Producto', valor: updatedFields.producto, enCambio: (val) => setUpdatedFields({ ...updatedFields, producto: val }) },
          { id: 'cantidad', tipo: 'number', placeholder: 'Cantidad', valor: updatedFields.cantidad, enCambio: (val) => setUpdatedFields({ ...updatedFields, cantidad: val }) },
          { id: 'pedido', tipo: 'text', placeholder: 'Pedido', valor: updatedFields.pedido, enCambio: (val) => setUpdatedFields({ ...updatedFields, pedido: val }) },
        ]}
        manejarEnvio={handleSubmit}  // Aquí pasamos la función handleSubmit
        busquedaHabilitada={true}
      />
      <List 
        items={entradas}
        manejarEdicion={handleEdit}
        manejarEliminacion={handleDelete}
        renderizarItem={(item) => (
          <>
            <strong>{item.producto}</strong> <br />
            <small>Fecha: {item.fecha}</small> 
          </>
        )}
      />
      <EditModal
        mostrar={modalShow}
        reiniciarFormulario={() => setModalShow(false)}
        campos={[
          { id: 'producto', label: 'Producto', tipo: 'text', valor: updatedFields.producto, enCambio: (val) => setUpdatedFields({ ...updatedFields, producto: val }) },
          { id: 'cantidad', label: 'Cantidad', tipo: 'number', valor: updatedFields.cantidad, enCambio: (val) => setUpdatedFields({ ...updatedFields, cantidad: val }) },
          { id: 'pedido', label: 'Pedido', tipo: 'text', valor: updatedFields.pedido, enCambio: (val) => setUpdatedFields({ ...updatedFields, pedido: val }) },
        ]}
        manejarGuardar={handleSave}
        tituloModal="Editar Entrada"
        textoBotonGuardar="Actualizar"
      />
    </div>
  );
}

export default Entradas;
