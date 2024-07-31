import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Enfermedad = () => {
  return (
    <>
    <h2>Registrar Enfermedad</h2>
    <Form>
      <Form.Group className='mb-3' controlId='formGridDatoInformante'>
        <Form.Label>Datos de informante</Form.Label>
        <Form.Select></Form.Select>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formGridDatoInformante'>
        <Form.Label>Motivo de la consulta</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formGridDatoInformante'>
        <Form.Label>Tiempo de Enfermedad</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formGridDatoInformante'>
        <Form.Label>Signos y síntomas principales</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formGridDatoInformante'>
        <Form.Label>Relato cronológico</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formGridDatoInformante'>
        <Form.Label>Funciones biológicas</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrar
      </Button>      
    </Form>
    </>
  )
}
