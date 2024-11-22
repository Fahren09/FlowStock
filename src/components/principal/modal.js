import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalEdicion({
  mostrar,
  reiniciarFormulario,
  campos = [],   
  manejarGuardar,
  tituloModal = 'Editar Entrada',
  textoBotonGuardar = 'Guardar',
}) {
  return (
    <Modal show={mostrar} onHide={reiniciarFormulario}>
      <Modal.Header closeButton style={{ backgroundColor: '#2D4076', color: '#C6F8CF', border: 'none' }}>
        <Modal.Title>{tituloModal}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#2D4076', color: '#C6F8CF', border: 'none' }}>
        <Form>
          {campos.map((campo) => (
            <Form.Group key={campo.id} controlId={`form${campo.id}`}>
              <Form.Label>{campo.label}</Form.Label>
              {campo.tipo === 'select' ? (
                <Form.Select
                  value={campo.valor}
                  onChange={(e) => campo.enCambio(e.target.value)}
                  style={{ backgroundColor: '#2D4076', borderColor: '#C6F8CF', color: '#C6F8CF' }}
                  className="me-2-principal"
                >
                  {campo.opciones.map((opcion, index) => (
                    <option key={index} value={opcion.value}>
                      {opcion.label}
                    </option>
                  ))}
                </Form.Select>
              ) : (
                <Form.Control
                  type={campo.tipo} // Esto permitirá 'text', 'number', 'date', etc.
                  value={campo.valor}
                  onChange={(e) => campo.enCambio(e.target.value)}
                  style={{ backgroundColor: '#2D4076', borderColor: '#C6F8CF', color: '#C6F8CF' }}
                  className="me-2-principal"
                />
              )}
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: '#2D4076', color: '#C6F8CF', border: 'none' }}>
        <Button variant="secondary" onClick={reiniciarFormulario}>Cancelar</Button>
        <Button
          variant="primary"
          onClick={manejarGuardar}
          style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none' }}
        >
          {textoBotonGuardar}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEdicion;
