// src/components/Salidas.js
import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

function Salida() {
  const [salidas, setSalidas] = useState([
    { producto: 'Laptop', cantidad: 5, fecha: '2023-06-12', tipoPedido: 'envio', socioEmpresa: 'Empresa XYZ', estado: 'pendiente' },
    { producto: 'Escritorio', cantidad: 2, fecha: '2023-06-13', tipoPedido: 'envio', socioEmpresa: 'Empresa ABC', estado: 'completado' },
  ]);

  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [fecha, setFecha] = useState('');
  const [tipoPedido, setTipoPedido] = useState('envio');
  const [socioEmpresa, setSocioEmpresa] = useState('');
  const [estado, setEstado] = useState('pendiente');

  const handleAgregar = () => {
    const nuevaSalida = { producto, cantidad: parseInt(cantidad), fecha, tipoPedido, socioEmpresa, estado };
    setSalidas([...salidas, nuevaSalida]);
    setProducto('');
    setCantidad('');
    setFecha('');
    setTipoPedido('envio');
    setSocioEmpresa('');
    setEstado('pendiente');
  };

  return (
    <div>
      <h5>Registrar nueva salida</h5>
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
        <Form.Select
          className="me-2"
          value={tipoPedido}
          onChange={(e) => setTipoPedido(e.target.value)}
        >
          <option value="envio">Envío</option>
          <option value="llegada">Llegada</option>
        </Form.Select>
        <Form.Control
          type="text"
          placeholder="Socio/Empresa"
          className="me-2"
          value={socioEmpresa}
          onChange={(e) => setSocioEmpresa(e.target.value)}
        />
        <Form.Select
          className="me-2"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
          <option value="cancelado">Cancelado</option>
        </Form.Select>
        <Button variant="dark" onClick={handleAgregar}>
          <FaPlus className="me-2" />Agregar
        </Button>
      </Form>

      <ListGroup>
        {salidas.map((salida, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{salida.producto}</strong> <br />
              <small>Fecha: {salida.fecha}</small><br />
              <small>Tipo: {salida.tipoPedido}</small><br />
              <small>Socio/Empresa: {salida.socioEmpresa}</small>
            </div>
            <div>
              <span className="me-3">Cantidad: {salida.cantidad}</span>
              <span className="me-3">Estado: {salida.estado}</span>
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

export default Salida;
