import React from 'react';
import { Card, Row, Col, Form, Image, Button } from 'react-bootstrap';
import FormGroup from './form_cuenta';
import { FaUserEdit } from 'react-icons/fa';

const UserProfileCard = ({
  formData,
  editMode,
  imagenTemporal,
  onFormChange,
  onImageChange,
  onEdit,
  onSave,
  userRole,
}) => (
  <Card className="p-4" style={{ backgroundColor: '#2D4076', color: '#0F8D89' }}>
    <Row>
      <Col xs={12} md={4} className="text-center">
        <Image src={imagenTemporal} roundedCircle width="150px" height="150px" />
        {editMode && (
          <Form.Group controlId="formFile" className="mt-3">
            <Form.Label>Cambiar foto de perfil</Form.Label>
            <Form.Control type="file" onChange={onImageChange} />
          </Form.Group>
        )}
      </Col>
      <Col xs={12} md={8}>
        <Form>
          <FormGroup
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={onFormChange}
            editMode={editMode}
          />
          <FormGroup
            label="Correo Electrónico"
            name="email"
            value={formData.email}
            onChange={onFormChange}
            editMode={editMode}
          />
          <FormGroup
            label="Rol"
            name="tipo"
            value={formData.tipo}
            onChange={onFormChange}
            editMode={editMode}
            opciones={['Empleado', 'Administrador']}
          />
          {editMode && (
            <FormGroup
              label="Contraseña"
              name="password"
              type="password"
              placeholder="Nueva contraseña"
              onChange={onFormChange}
              editMode={editMode}
            />
          )}
          <div className="d-flex justify-content-end">
            {!editMode ? (
              <Button variant="primary" onClick={onEdit} style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none' }}>
                <FaUserEdit className="me-2" />Editar
              </Button>
            ) : (
              <>
                <Button variant="secondary" className="me-2" onClick={onEdit}>Cancelar</Button>
                <Button variant="success" onClick={onSave} style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none' }}>Guardar</Button>
              </>
            )}
          </div>
        </Form>
      </Col>
    </Row>
  </Card>
);

export default UserProfileCard;
