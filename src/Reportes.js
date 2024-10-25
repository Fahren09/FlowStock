// src/components/Reportes.js
import React, { useState } from 'react';
import { Form, Button, ListGroup, Modal } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

function Reportes() {
  const [reportes, setReportes] = useState([
    { id: 1, fecha: '2024-10-01', estado: 1 },
    { id: 2, fecha: '2024-10-15', estado: 1 },
  ]);

  const [fecha, setFecha] = useState('');
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAgregar = () => {
    if (editIndex !== null) {
      // Editar reporte existente
      const updatedReportes = reportes.map((reporte, index) =>
        index === editIndex ? { ...reporte, fecha } : reporte
      );
      setReportes(updatedReportes);
    } else {
      // Agregar nuevo reporte
      const nuevoReporte = {
        id: reportes.length + 1,
        fecha,
        estado: 1,
      };
      setReportes([...reportes, nuevoReporte]);
    }

    resetForm();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFecha(reportes[index].fecha);
    setShow(true);
  };

  const handleDelete = (index) => {
    const updatedReportes = reportes.filter((_, idx) => idx !== index);
    setReportes(updatedReportes);
  };

  const resetForm = () => {
    setFecha('');
    setEditIndex(null);
    setShow(false);
  };

  return (
    <div>
      <h5>Gestionar Reportes</h5>
      <Button variant="dark" onClick={() => setShow(true)}>
        <FaPlus className="me-2" /> Agregar Reporte
      </Button>

      <Modal show={show} onHide={resetForm}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? 'Editar Reporte' : 'Nuevo Reporte'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFecha">
              <Form.Label>Fecha del Reporte</Form.Label>
              <Form.Control
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={resetForm}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleAgregar}>
            {editIndex !== null ? 'Actualizar' : 'Agregar'}
          </Button>
        </Modal.Footer>
      </Modal>

      <ListGroup className="mt-3">
        {reportes.map((reporte, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>Fecha: {reporte.fecha}</strong> <br />
              <small>Estado: {reporte.estado === 1 ? 'Activo' : 'Inactivo'}</small>
            </div>
            <div>
              <Button variant="outline-secondary" size="sm" className="me-2" onClick={() => handleEdit(index)}>
                <FaEdit />
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDelete(index)}>
                <FaTrash />
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Reportes;
