// src/components/Visitas.js
import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';

function Visitas() {
    const [visitas, setVisitas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedVisita, setSelectedVisita] = useState(null);
    const [newVisitaName, setNewVisitaName] = useState("");

    const handleOpenModal = (visita = null) => {
        setSelectedVisita(visita);
        setNewVisitaName(visita ? visita.nombre : "");
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedVisita(null);
        setNewVisitaName("");
    };

    const handleSave = () => {
        if (selectedVisita) {
            // Editar visita existente
            setVisitas(visitas.map(visita =>
                visita.id === selectedVisita.id ? { ...visita, nombre: newVisitaName } : visita
            ));
        } else {
            // Agregar nueva visita
            const newVisita = {
                id: visitas.length + 1,
                nombre: newVisitaName
            };
            setVisitas([...visitas, newVisita]);
        }
        handleCloseModal();
    };

    const handleDelete = (visitaId) => {
        // Eliminar visita
        setVisitas(visitas.filter(visita => visita.id !== visitaId));
    };

    return (
        <div>
            <h5>Visitas</h5>
            <Button variant="primary" onClick={() => handleOpenModal()}>
                Agregar Visita
            </Button>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {visitas.map((visita, index) => (
                        <tr key={index}>
                            <td>{visita.id}</td>
                            <td>{visita.nombre}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleOpenModal(visita)}>
                                    Editar
                                </Button>
                                {' '}
                                <Button variant="danger" onClick={() => handleDelete(visita.id)}>
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedVisita ? 'Editar Visita' : 'Agregar Visita'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                value={newVisitaName}
                                onChange={(e) => setNewVisitaName(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Cancelar</Button>
                    <Button variant="primary" onClick={handleSave}>Guardar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Visitas;
