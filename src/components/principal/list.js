import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

function Lista({ items, 
  manejarEdicion, 
  manejarEliminacion, 
  renderizarItem }) {
  return (
    <ListGroup className="mt-3">
      {items.map((item, index) => (
        <ListGroup.Item
          key={index}
          className="d-flex justify-content-between align-items-center"
          style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}
        >
          <div>
            {renderizarItem ? renderizarItem(item) : (
              <>
                <strong>{item.producto}</strong> <br />
                <small>Fecha: {item.fecha}</small>
              </>
            )}
          </div>
          <div>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => manejarEdicion(index)}
              style={{ marginRight: '5px' }}
            >
              <FaEdit /> Editar
            </Button>
            <Button 
              variant="outline-danger" 
              size="sm" 
              onClick={() => manejarEliminacion(index)}
            >
              <FaTrash /> Eliminar
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Lista;
