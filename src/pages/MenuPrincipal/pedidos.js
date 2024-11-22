import React, { useState } from 'react';
import Forms from '../../components/principal/forms';
import List from '../../components/principal/list';
import EditModal from '../../components/principal/modal';

function Pedidos() {
  const [pedidos, setPedidos] = useState([
    { tipo: 'Envio', empresa: 'Empresa A', fechaCreacion: '2023-10-01', fechaLlegada: '2023-10-10', estado: 'Pendiente' },
    { tipo: 'Llegada', empresa: 'Empresa B', fechaCreacion: '2023-10-05', fechaLlegada: '2023-10-12', estado: 'Completado' },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({ tipo: '', empresa: '', fechaLlegada: '', estado: '' });
  const empresas = ['Empresa A', 'Empresa B', 'Empresa C', 'Empresa D'];

  const empresasOpciones = empresas.map((empresa) => ({
    label: empresa,
    value: empresa,
  })); 

  const tiposOpciones = ['Envio', 'Llegada'].map((tipo) => ({
    label: tipo,
    value: tipo,
  }));
  
 
  const handleEdit = (index) => {
    setSelectedIndex(index);
    setModalShow(true);
    setUpdatedFields({ ...pedidos[index] });
  };

  const handleSave = () => {
    const updatedPedidos = [...pedidos];
    updatedPedidos[selectedIndex] = { ...updatedPedidos[selectedIndex], ...updatedFields };
    setPedidos(updatedPedidos);
    setModalShow(false);
  };

  const handleDelete = (index) => {
    const updatedPedidos = pedidos.filter((_, idx) => idx !== index);
    setPedidos(updatedPedidos);
  };

  const handleSubmit = () => {
    const nuevoPedido = { 
      ...updatedFields, 
      fechaCreacion: new Date().toISOString().split('T')[0] 
    };
    setPedidos([...pedidos, nuevoPedido]);
    setUpdatedFields({ tipo: '', empresa: '', fechaLlegada: '', estado: '' }); // Limpia el formulario
  };
  

  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }}>Registrar nuevo pedido</h5>
      <Forms 
        campos={[
          { id: 'tipo', tipo: 'select', placeholder: 'Tipo', valor: updatedFields.tipo, enCambio: (val) => setUpdatedFields({ ...updatedFields, tipo: val }), opciones: ['Envio', 'Llegada'] },
          { id: 'empresa', tipo: 'select', placeholder: 'Empresa', valor: updatedFields.empresa, enCambio: (val) => setUpdatedFields({ ...updatedFields, empresa: val }), opciones: empresas },
          { id: 'fechaLlegada', tipo: 'date', placeholder: 'Fecha de Llegada', valor: updatedFields.fechaLlegada, enCambio: (val) => setUpdatedFields({ ...updatedFields, fechaLlegada: val }) },
        ]}
        manejarEnvio={handleSubmit}
        busquedaHabilitada={true}
      />
      <List
        items={pedidos}
        manejarEdicion={handleEdit}
        manejarEliminacion={handleDelete}
        renderizarItem={(item) => (
          <>
            <strong>{item.tipo}</strong> <br />
            <small>Empresa: {item.empresa}</small> <br />
            <small>Fecha de creación: {item.fechaCreacion}</small> <br />
            <small>Fecha de llegada: {item.fechaLlegada}</small> <br />
            <small>Estado: {item.estado}</small>
          </>
        )}
      />
      <EditModal
        mostrar={modalShow}
        reiniciarFormulario={() => setModalShow(false)}
        campos={[
          { id: 'tipo', label: 'Tipo', tipo: 'select', valor: updatedFields.tipo, enCambio: (val) => setUpdatedFields({ ...updatedFields, tipo: val }), opciones: tiposOpciones },
          { id: 'empresa', label: 'Empresa', tipo: 'select', valor: updatedFields.empresa, enCambio: (val) => setUpdatedFields({ ...updatedFields, empresa: val }), opciones: empresasOpciones },
          { id: 'fechaLlegada', label: 'Fecha de Llegada', tipo: 'date', valor: updatedFields.fechaLlegada, enCambio: (val) => setUpdatedFields({ ...updatedFields, fechaLlegada: val }) },
        ]}
        manejarGuardar={handleSave}
        tituloModal="Editar Pedido"
        textoBotonGuardar="Actualizar"
      />
    </div>
  );
}

export default Pedidos;
