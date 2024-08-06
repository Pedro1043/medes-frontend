import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

export const Paciente = () => {
  const [Paciente, setPaciente] = useState(null);

  useEffect(() => {
    fetch("https://microservicio-paciente-production.up.railway.app/api/v1/patient/getAll")
      .then((response) => response.json())
      .then((Paciente) => setPaciente(Paciente))
  }, []);
  console.log(Paciente);
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
    </Form>   

      <h2>Antecedentes</h2>
        <Form>
         <Form.Group className='mb-3' controlId='formGridAntFamiliares'>
          <Form.Label>Antecedentes Familiares</Form.Label>
          <Form.Control/>
         </Form.Group>
         <Form.Group className='mb-3' controlId='formGridAntPersonales'>
          <Form.Label>Antecedentes Personales</Form.Label>
          <Form.Control/>
         </Form.Group>              
        </Form>
      <Button variant="primary" type="submit">
        Registrar
      </Button>

      <Table striped="columns">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Celular</th>
            <th>Dni</th>
            <th>Fecha de nacimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Paciente?.map((paciente) => (
              <td key={paciente.idPaciente}>{paciente.idPaciente}</td>
            ))}
          </tr>
          <tr>
            {Paciente?.map((paciente) => (
              <td>{paciente.nombresPaciente}</td>
            ))}
          </tr>          
        </tbody>
      </Table>
    </>
  )
}
