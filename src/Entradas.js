// src/components/Entradas.js
import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

function Entrada() {
  const [entradas, setEntradas] = useState([
    { producto: 'Laptop', cantidad: 10, fecha: '2023-06-10' },
    { producto: 'Escritorio', cantidad: 5, fecha: '2023-06-11' },
  ]);

  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [fecha, setFecha] = useState('');

  const handleAgregar = () => {
    const nuevaEntrada = { producto, cantidad: parseInt(cantidad), fecha };
    setEntradas([...entradas, nuevaEntrada]);
    setProducto('');
    setCantidad('');
    setFecha('');
  };

  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }} >Registrar nueva entrada</h5>
      <Form className="d-flex mb-3">
        <Form.Control
          type="text"
          placeholder="Producto"
          className="me-2"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
        />
        <Form.Control
          type="number"
          placeholder="Cantidad"
          className="me-2"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        <Form.Control
          type="date"
          className="me-2"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <Button variant="dark" onClick={handleAgregar}>
          <FaPlus className="me-2" />Agregar
        </Button>
        
      </Form>

      <ListGroup>
        {entradas.map((entrada, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{entrada.producto}</strong> <br />
              <small>Fecha: {entrada.fecha}</small>
            </div>
            <div>
            <span className="me-3">Cantidad: {entrada.cantidad}</span>
              <Button variant="outline-secondary" size="sm">
                Editar
              </Button>
              <Button variant="outline-secondary" size="sm" className="ms-2">
                Eliminar
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Entrada;
