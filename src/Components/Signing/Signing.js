import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Signing() {
    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log("onSubmitForm");
    };
    const placeHolderFunction = (event) => {
        event.preventDefault();
        console.log("placeholder");
    }

    return (
        <Form className="container" onSubmit={onSubmitForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese su Correo</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={placeHolderFunction} />
                <Form.Text className="text-muted">
                Este correo servira para logearse en sistema
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ingrese su Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={placeHolderFunction} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirme su Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={placeHolderFunction} />
            </Form.Group>

            <Button variant="success" type="submit">
                Registrarse
            </Button>
        </Form>
  )
}
