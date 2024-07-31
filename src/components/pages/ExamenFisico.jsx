import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const ExamenFisico = () => {
  return (
    <>
    <h2>Exploración Física</h2>
    <Form>
     <Row className="mb-3">
         <Form.Group as={Col} controlId="formGridPA">
           <Form.Label>Signos Vitales. P.A.</Form.Label>
           <Form.Control/>
         </Form.Group>
 
         <Form.Group as={Col} controlId="formGridPulso">
           <Form.Label>Pulso</Form.Label>
           <Form.Control/>
         </Form.Group>
         <Form.Group as={Col} controlId="formGridTemp">
           <Form.Label>Temp</Form.Label>
           <Form.Control/>
         </Form.Group>
         <Form.Group as={Col} controlId="formGridFc">
           <Form.Label>F.C.</Form.Label>
           <Form.Control/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formGridExamen">
           <Form.Label>Examen Clínico General</Form.Label>
           <Form.Control/>
         </Form.Group>                           
       </Row>      
     </Form>
    </>
  )
}
