import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Paciente = () => {
  return (
    <>
    <h2>Registrar Paciente</h2>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridNombre">
          <Form.Label>Nombres</Form.Label>
          <Form.Control placeholder="Ingrese sus nombres" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridApellido">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control placeholder="Ingrese sus apellidos" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridDireccion">
        <Form.Label>Dirección</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCelular">
          <Form.Label>Celular</Form.Label>
          <Form.Control placeholder='976456785'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDni">
          <Form.Label>Dni</Form.Label>
          <Form.Control placeholder='71451978'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formFecha">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control placeholder='07/12/2000'/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>      
    </>
  )
}
