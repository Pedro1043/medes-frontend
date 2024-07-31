import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Diagnostico = () => {
  return (
    <>
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
      <Button variant="primary" type="submit">
        Registrar
      </Button>              
    </Form>
    </>
  )
}
