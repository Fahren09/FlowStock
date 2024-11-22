import React, { useState } from 'react';
import Forms from '../../components/principal/forms';
import List from '../../components/principal/list';
import EditModal from '../../components/principal/modal';

function Salida() {
  const [salidas, setSalidas] = useState([
    { producto: 'Laptop', cantidad: 5, fecha: '2023-06-12', tipoPedido: 'envio', socioEmpresa: 'Empresa XYZ', estado: 'pendiente' },
    { producto: 'Escritorio', cantidad: 2, fecha: '2023-06-13', tipoPedido: 'envio', socioEmpresa: 'Empresa ABC', estado: 'completado' },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({ producto: '', cantidad: '', pedido: '', fecha: '' });

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setModalShow(true);
    setUpdatedFields({ ...salidas[index] });  // Cargar los datos del item seleccionado
  };

  const handleSave = () => {
    const updatedSalidas = [...salidas];
    updatedSalidas[selectedIndex] = { ...updatedSalidas[selectedIndex], ...updatedFields };
    setSalidas(updatedSalidas);
    setModalShow(false);
  };

  const handleDelete = (index) => {
    const updatedSalidas = salidas.filter((_, idx) => idx !== index);
    setSalidas(updatedSalidas);
  };

  const handleSubmit = () => {
    const nuevaSalida = {
      ...updatedFields,
      fecha: new Date().toISOString().split('T')[0], // Fecha actual
      tipoPedido: 'envio', // Valor por defecto
      socioEmpresa: 'Empresa Desconocida', // Valor por defecto
      estado: 'pendiente', // Valor por defecto
    };
  
    setSalidas([...salidas, nuevaSalida]);
    setUpdatedFields({ producto: '', cantidad: '', pedido: '' }); // Limpiar formulario
  };
  
  

  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }}>Registrar nueva salida</h5>
      <Forms 
      campos={[
    { id: 'producto', tipo: 'text', placeholder: 'Producto', valor: updatedFields.producto, enCambio: (val) => setUpdatedFields({ ...updatedFields, producto: val }) },
    { id: 'cantidad', tipo: 'number', placeholder: 'Cantidad', valor: updatedFields.cantidad, enCambio: (val) => setUpdatedFields({ ...updatedFields, cantidad: val }) },
    { id: 'pedido', tipo: 'text', placeholder: 'Pedido', valor: updatedFields.pedido, enCambio: (val) => setUpdatedFields({ ...updatedFields, pedido: val }) },
  ]}
        manejarEnvio={handleSubmit}
        busquedaHabilitada={true}
      />

      <List
        items={salidas}
        manejarEdicion={handleEdit}
        manejarEliminacion={handleDelete}
        renderizarItem={(item) => (
          <>
            <strong>{item.producto}</strong> <br />
            <small>Fecha: {item.fecha}</small> <br />
            <small>Tipo: {item.tipoPedido}</small> <br />
            <small>Socio/Empresa: {item.socioEmpresa}</small> <br />
            <small>Cantidad: {item.cantidad}</small> <br />
            <small>Estado: {item.estado}</small> 
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
        tituloModal="Editar Salida"
        textoBotonGuardar="Actualizar"
      />
    </div>
  );
}

export default Salida;
