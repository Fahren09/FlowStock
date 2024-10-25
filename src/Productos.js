// src/components/Productos.js
import React, { useState } from 'react';
import { Form, Button, ListGroup, Dropdown } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

function Productos() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Laptop',
      descripcion: 'Laptop de alta gama',
      stock: 10,
      categoria: 'Electrónica',
      estado: 'activo',
      fecha_creacion: '2023-06-10',
    },
    {
      id: 2,
      nombre: 'Escritorio',
      descripcion: 'Escritorio de madera',
      stock: 5,
      categoria: 'Muebles',
      estado: 'activo',
      fecha_creacion: '2023-06-11',
    },
  ]);

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState('');
  const [categoria, setCategoria] = useState('');
  const [estado, setEstado] = useState('activo');

  const handleAgregarProducto = () => {
    const nuevoProducto = {
      id: productos.length + 1,
      nombre,
      descripcion,
      stock: parseInt(stock),
      categoria,
      estado,
      fecha_creacion: new Date().toISOString().split('T')[0],
    };
    setProductos([...productos, nuevoProducto]);
    setNombre('');
    setDescripcion('');
    setStock('');
    setCategoria('');
    setEstado('activo');
  };

  return (
    <div>
      <h5>Registrar nuevo producto</h5>
      <Form className="d-flex mb-3">
        <Form.Control
          type="text"
          placeholder="Nombre del producto"
          className="me-2"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Descripción del producto"
          className="me-2"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <Form.Control
          type="number"
          placeholder="Cantidad en stock"
          className="me-2"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Categoría"
          className="me-2"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      <Form.Select
        className="me-2"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
      >
        <option value="activo">Activo</option>
        <option value="inactivo">Inactivo</option>
        <option value="descontinuado">Descontinuado</option>
        <option value="reemplazado">Reemplazado</option>
      </Form.Select>
      
        <Button variant="dark" onClick={handleAgregarProducto}>
          <FaPlus className="me-2" /> Agregar producto
        </Button>
      </Form>

      <ListGroup>
        {productos.map((producto) => (
          <ListGroup.Item key={producto.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{producto.nombre}</strong> <br />
              <small>Descripción: {producto.descripcion}</small> <br />
              <small>Stock: {producto.stock}</small> <br />
              <small>Categoría: {producto.categoria}</small> <br />
              <small>Estado: {producto.estado}</small> <br />
              <small>Fecha de creación: {producto.fecha_creacion}</small>
            </div>
            <div>
              <Button variant="outline-secondary" size="sm" className="me-2">
                <FaEdit /> Editar
              </Button>
              <Button variant="outline-danger" size="sm">
                <FaTrash /> Eliminar
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Productos;
