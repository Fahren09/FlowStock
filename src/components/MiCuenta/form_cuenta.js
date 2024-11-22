import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const FormGroup = ({ label, name, value, onChange, editMode, type = "text", placeholder, opciones }) => (
  <Form.Group as={Row} className="mt-3">
    <Form.Label column sm={3}>{label}</Form.Label>
    <Col sm={9}>
      {opciones ? (
        <Form.Select
          name={name}
          value={value}
          onChange={onChange}
          disabled={!editMode}
          style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
          className="me-2-principal"
        >
          {opciones.map((opcion) => (
            <option key={opcion} value={opcion}>{opcion}</option>
          ))}
        </Form.Select>
      ) : (
        <Form.Control
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={!editMode}
          placeholder={placeholder}
          style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
          className="me-2-principal"
        />
      )}
    </Col>
  </Form.Group>
);

export default FormGroup;
