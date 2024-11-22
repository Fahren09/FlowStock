import React, { useState } from 'react';
import Forms from '../../components/principal/forms';
import List from '../../components/principal/list';
import EditModal from '../../components/principal/modal';

function Productos() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Laptop',
      descripcion: 'Laptop de alta gama',
      stock: 10,
      categoria: 'Electrónica',
      estado: 'Activo',
      fecha_creacion: '2023-06-10',
    },
    {
      id: 2,
      nombre: 'Escritorio',
      descripcion: 'Escritorio de madera',
      stock: 5,
      categoria: 'Muebles',
      estado: 'Activo',
      fecha_creacion: '2023-06-11',
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({
    nombre: '',
    descripcion: '',
    stock: '',
    categoria: '',
    estado: 'Activo',
  });

  const categorias = ['Electrónica', 'Muebles', 'Ropa', 'Juguetes', 'Alimentos'];
  const categoriasOpciones = categorias.map((categoria) => ({
    label: categoria,
    value: categoria,
  }));

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setModalShow(true);
    setUpdatedFields({ ...productos[index] }); // Cargar los datos del producto seleccionado
  };

  const handleSave = () => {
    const updatedProductos = [...productos];
    updatedProductos[selectedIndex] = { ...updatedProductos[selectedIndex], ...updatedFields };
    setProductos(updatedProductos);
    setModalShow(false);
  };

  const handleDelete = (index) => {
    const updatedProductos = productos.filter((_, idx) => idx !== index);
    setProductos(updatedProductos);
  };

  const handleSubmit = () => {
    const nuevoProducto = {
      ...updatedFields,
      id: productos.length + 1,
      fecha_creacion: new Date().toISOString().split('T')[0],
    };
    setProductos([...productos, nuevoProducto]);
    setUpdatedFields({
      nombre: '',
      descripcion: '',
      stock: '',
      categoria: '',
      estado: 'Activo',
    }); // Limpiar el formulario
  };


  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }}>Registrar nuevo producto</h5>
      <Forms
        campos={[
          { id: 'nombre', tipo: 'text', placeholder: 'Nombre del producto', valor: updatedFields.nombre, enCambio: (val) => setUpdatedFields({ ...updatedFields, nombre: val }) },
          { id: 'descripcion', tipo: 'textarea', placeholder: 'Descripción del producto', valor: updatedFields.descripcion, enCambio: (val) => setUpdatedFields({ ...updatedFields, descripcion: val }) },
          { id: 'stock', tipo: 'number', placeholder: 'Cantidad en stock', valor: updatedFields.stock, enCambio: (val) => setUpdatedFields({ ...updatedFields, stock: val }) },
          {
            id: 'categoria',
            tipo: 'select',
            placeholder: 'Categoría',
            opciones: categorias,
            valor: updatedFields.categoria,
            enCambio: (val) => setUpdatedFields({ ...updatedFields, categoria: val }),
          },
        ]}
        manejarEnvio={handleSubmit}
        busquedaHabilitada={true}
      />
      <List
        items={productos}
        manejarEdicion={handleEdit}
        manejarEliminacion={handleDelete}
        renderizarItem={(item) => (
          <>
            <strong>{item.nombre}</strong> <br />
            <small>Descripción: {item.descripcion}</small> <br />
            <small>Stock: {item.stock}</small> <br />
            <small>Categoría: {item.categoria}</small> <br />
            <small>Estado: {item.estado}</small> <br />
            <small>Fecha de creación: {item.fecha_creacion}</small>
          </>
        )}
      />
      <EditModal
        mostrar={modalShow}
        reiniciarFormulario={() => setModalShow(false)}
        campos={[
          { id: 'nombre', label: 'Nombre', tipo: 'text', valor: updatedFields.nombre, enCambio: (val) => setUpdatedFields({ ...updatedFields, nombre: val }) },
          { id: 'descripcion', label: 'Descripción', tipo: 'textarea', valor: updatedFields.descripcion, enCambio: (val) => setUpdatedFields({ ...updatedFields, descripcion: val }) },
          { id: 'stock', label: 'Stock', tipo: 'number', valor: updatedFields.stock, enCambio: (val) => setUpdatedFields({ ...updatedFields, stock: val }) },
          {
            id: 'categoria',
            label: 'Categoría',
            tipo: 'select',
            opciones: categoriasOpciones,
            valor: updatedFields.categoria,
            enCambio: (val) => setUpdatedFields({ ...updatedFields, categoria: val }),
          },
        ]}
        manejarGuardar={handleSave}
        tituloModal="Editar Producto"
        textoBotonGuardar="Actualizar"
      />
    </div>
  );
}

export default Productos;
