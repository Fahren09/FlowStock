// src/components/Categorias.js
import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

function Categorias() {
    // Estado para manejar las categorías
    const [categorias, setCategorias] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(''); // "agregar", "editar", "ver"
    const [currentCategoria, setCurrentCategoria] = useState(null);
    const [nombreCategoria, setNombreCategoria] = useState('');

    // Abrir el modal con el tipo de acción
    const handleShowModal = (type, categoria = null) => {
        setModalType(type);
        setCurrentCategoria(categoria);
        setNombreCategoria(categoria ? categoria.nombre : '');
        setShowModal(true);
    };

    // Cerrar el modal
    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentCategoria(null);
        setNombreCategoria('');
    };
    // Manejar el cambio de texto en el input de categoría
    const handleChange = (e) => {
        setNombreCategoria(e.target.value);
    };

    // Agregar una categoría
    const handleAgregar = () => {
        setCategorias([...categorias, { id: Date.now(), nombre: nombreCategoria }]);
        handleCloseModal();
    };

    // Editar una categoría
    const handleEditar = () => {
        setCategorias(
            categorias.map((cat) =>
                cat.id === currentCategoria.id ? { ...cat, nombre: nombreCategoria } : cat
            )
        );
        handleCloseModal();
    };
    // Eliminar una categoría
    const handleEliminar = (id) => {
        setCategorias(categorias.filter((cat) => cat.id !== id));
    };

    return (
        <div>
            <h4>Categorías</h4>
            <Button variant="success" onClick={() => handleShowModal('agregar')}>
                Agregar Categoría
            </Button>

            <Table striped bordered hover className="mt-3" style={{ color: '#0F8D89' }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map((categoria, index) => (
                        <tr key={categoria.id}>
                            <td>{index + 1}</td>
                            <td>{categoria.nombre}</td>
                            <td>
                                <Button
                                    variant="info"
                                    onClick={() => handleShowModal('ver', categoria)}
                                    className="me-2"
                                >
                                    Ver
                                </Button>
                                <Button
                                    variant="primary"
                                    onClick={() => handleShowModal('editar', categoria)}
                                    className="me-2"
                                >
                                    Editar
                                </Button>
                                <Button variant="danger" onClick={() => handleEliminar(categoria.id)}>
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal para Agregar, Editar o Ver */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalType === 'agregar' && 'Agregar Categoría'}
                        {modalType === 'editar' && 'Editar Categoría'}
                        {modalType === 'ver' && 'Ver Categoría'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalType === 'ver' ? (
                        <p><strong>Nombre:</strong> {currentCategoria?.nombre}</p>
                    ) : (
                        <Form>
                            <Form.Group>
                                <Form.Label>Nombre de la Categoría</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={nombreCategoria}
                                    onChange={handleChange}
                                    placeholder="Ingrese el nombre"
                                    disabled={modalType === 'ver'}
                                />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                    {modalType === 'agregar' && (
                        <Button variant="success" onClick={handleAgregar}>
                            Agregar
                        </Button>
                    )}
                    {modalType === 'editar' && (
                        <Button variant="primary" onClick={handleEditar}>
                            Guardar Cambios
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default Categorias;
