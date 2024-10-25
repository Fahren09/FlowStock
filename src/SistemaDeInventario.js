import React, { useState } from 'react';
import { Container, Row, Col, Form, Nav, Tab } from 'react-bootstrap';
import { FaBox, FaTruck, FaCubes, FaUserFriends, FaBell, FaCog, FaTags, FaClipboardList, FaShoppingCart, FaChartBar } from 'react-icons/fa';
import Entrada from './Entradas';
import Salida from './Salidas';
import Producto from './Productos';
import Pedido from './Pedidos';
import Reporte from './Reportes';
import Reporte from './Categoria'; // Importar el componente de categorias  
import Reporte from './Proveedores'; // Importar el componente de proveedores 
import Reporte from './Visitas'; // Importar el componente de visitas
import logo from "./img/LogoFlowStock.png"; // Ajusta el path si es necesario
import './Estilo.css'; // Importa tu archivo CSS aquí

function InventorySystem() {
  // Estado para manejar la pestaña activa
  const [activeTab, setActiveTab] = useState("entradas");

  // Función para manejar el cambio de pestañas
  const handleSelect = (key) => {
    setActiveTab(key);
  };

  return (
    <Container fluid>
      <Row className="vh-100">
        <Col xs={2} style={{ backgroundColor: '#232D47', color: '#0F8D89' }} className="p-3">  
          {/* Logo y texto de FlowStock */}
          <div className="d-flex align-items-center mb-4">
            <img src={logo} alt="FlowStock" style={{ width: "80px" }} />
            <h4 className="fw-bold" style={{ color: '#FEA099' }} >FlowStock</h4>
          </div>

          <h4>Inventario</h4>
          <Nav defaultActiveKey="/entradas" className="flex-column">
                      <Nav.Link eventKey="categoria" style={{ color: '#0F8D89' }}><FaTags className="me-2" />Categoria</Nav.Link>
                      <Nav.Link eventKey="proveedores" style={{ color: '#0F8D89' }}><FaTruck className="me-2" />Proveedores</Nav.Link>
                      <Nav.Link eventKey="visitas" style={{ color: '#0F8D89' }}><FaUserFriends className="me-2" />Visitas</Nav.Link>
          </Nav>
        </Col>

        <Col xs={10} className="p-4" style={{ backgroundColor: '#2D4076', color: '#0F8D89' }}>
          <h4>Sistema de Inventario</h4>
          <Row className="mb-3">
            <Col xs={9}>
              <Form.Control 
                type="text" 
                placeholder="Buscar..." 
                style={{ backgroundColor: '#2D4076', borderColor: '#0F8D89', color: '#0F8D89' }} 
                className="search-input"
              />
            </Col>
            <Col xs={3} className="text-end">
              <div className="d-flex justify-content-end align-items-center">
                {/* Foto de usuario */}
                <img
                  src="https://via.placeholder.com/40" // URL temporal, reemplázala por la imagen real
                  alt="Usuario"
                  className="rounded-circle me-2"
                  style={{ width: '40px', height: '40px' }}
                />
                <div className="me-3 text-end">
                  <span style={{ color: '#FEA099' }}>Juan Pérez</span><br />
                  <small style={{ color: '#FEA099' }}>Almacenista</small>
                </div>
                {/* Botones de campana y configuración */}
                <FaBell className="me-3" style={{ cursor: 'pointer', color: '#70B69B' }} />
                <FaCog style={{ cursor: 'pointer', color: '#70B69B' }} />
              </div>
            </Col>
          </Row>

          <Tab.Container activeKey={activeTab} onSelect={handleSelect}>
            <Nav variant="tabs" className="custom-tab-border" >
              <Nav.Item>
                <Nav.Link 
                  eventKey="entradas" 
                  style={{ 
                    backgroundColor: activeTab === "entradas" ? '#C6F8CF' : 'transparent', 
                    color: activeTab === "entradas" ? '#232D47' : '#C6F8CF' 
                  }}
                >
                  <FaBox className="me-2" style={{ color: activeTab === "entradas" ? '#232D47' : '#C6F8CF' }} />Entradas
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link 
                  eventKey="salidas" 
                  style={{ 
                    backgroundColor: activeTab === "salidas" ? '#C6F8CF' : 'transparent', 
                    color: activeTab === "salidas" ? '#232D47' : '#C6F8CF' 
                  }}
                >
                  <FaClipboardList className="me-2" style={{ color: activeTab === "salidas" ? '#232D47' : '#C6F8CF' }} />Salidas
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link 
                  eventKey="productos" 
                  style={{ 
                    backgroundColor: activeTab === "productos" ? '#C6F8CF' : 'transparent', 
                    color: activeTab === "productos" ? '#232D47' : '#C6F8CF' 
                  }}
                >
                  <FaCubes className="me-2" style={{ color: activeTab === "productos" ? '#232D47' : '#C6F8CF' }} />Productos
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link 
                  eventKey="pedidos" 
                  style={{ 
                    backgroundColor: activeTab === "pedidos" ? '#C6F8CF' : 'transparent', 
                    color: activeTab === "pedidos" ? '#232D47' : '#C6F8CF' 
                  }}
                >
                  <FaShoppingCart className="me-2" style={{ color: activeTab === "pedidos" ? '#232D47' : '#C6F8CF' }} />Pedidos
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link 
                  eventKey="reportes" 
                  style={{ 
                    backgroundColor: activeTab === "reportes" ? '#C6F8CF' : 'transparent', 
                    color: activeTab === "reportes" ? '#232D47' : '#C6F8CF' 
                  }}
                >
                  <FaChartBar className="me-2" style={{ color: activeTab === "reportes" ? '#232D47' : '#C6F8CF' }} />Reportes
                </Nav.Link>
              </Nav.Item>
            </Nav>

                      {/* Pestaña de Categorías */}
                      <Nav.Item>
                          <Nav.Link
                              eventKey="categoria"
                              style={{
                                  backgroundColor: activeTab === "categoria" ? '#C6F8CF' : 'transparent',
                                  color: activeTab === "categoria" ? '#232D47' : '#C6F8CF'
                              }}
                          >
                              <FaTags className="me-2" style={{ color: activeTab === "categoria" ? '#232D47' : '#C6F8CF' }} />Categoría
                          </Nav.Link>
                      </Nav.Item>
                  </Nav>


            <Tab.Content className="mt-3">
              <Tab.Pane eventKey="entradas">
                <Entrada />
              </Tab.Pane>
              <Tab.Pane eventKey="salidas">
                <Salida />
              </Tab.Pane>
              <Tab.Pane eventKey="productos">
                <Producto />
              </Tab.Pane>
              <Tab.Pane eventKey="pedidos">
                <Pedido />
              </Tab.Pane>
              <Tab.Pane eventKey="reportes">
                <Reporte />
              <Tab.Pane eventKey="Categoria">
                <Categoria />
                 <Tab.Pane eventKey="Proveedores">
                <Categoria />
                 <Tab.Pane eventKey="Visitas">
                <Categoria />
              </Tab.Pane>
              {/* Más pestañas si es necesario */}
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default InventorySystem;
