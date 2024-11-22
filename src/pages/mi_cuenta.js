import React, { useState } from 'react';
import {Container, Row, Col  } from 'react-bootstrap';
import Sidebar from '../components/MiCuenta/sidebar'; 
import CustomNavbar from '../components/MiCuenta/navbar'; 
import UserProfileCard from '../components/MiCuenta/card'; 
import '../styles/Estilo.css';


const MiCuenta = () => {
  const [userData, setUserData] = useState({
    nombre: 'Juan Pérez',
    email: 'juanperez@example.com',
    tipo: 'Empleado', // Valor inicial del rol
    imagenPerfil: 'https://via.placeholder.com/150',
  });
  
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(userData);
  const [imagenTemporal, setImagenTemporal] = useState(userData.imagenPerfil);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImagenTemporal(URL.createObjectURL(file));
  };
  const handleEdit = () => setEditMode(!editMode);
  const handleSave = () => {
    setUserData({ ...formData, imagenPerfil: imagenTemporal });
    setEditMode(false);
  };

  return (
    <Container fluid className="d-flex flex-column vh-100" style={{backgroundColor: '#232D47', overflow: 'hidden' }}>
    <Row className="flex-grow-1">
      <Sidebar />
      <Col xs={10} className="d-flex flex-column">
        <CustomNavbar
          userName={userData.nombre}
          userRole={userData.tipo}
          onRedirect={(path) => console.log(`Redirect to ${path}`)}
        />
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          <UserProfileCard
            formData={formData}
            editMode={editMode}
            imagenTemporal={imagenTemporal}
            onFormChange={handleChange}
            onImageChange={handleImageChange}
            onEdit={handleEdit}
            onSave={handleSave}
            userRole={userData.tipo}
          />
        </div>
      </Col>
    </Row>
  </Container>
  
  );
};

export default MiCuenta;
