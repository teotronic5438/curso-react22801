import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {MainContext} from '../Context/MainContext';
import { LANGUAJES } from '../../LANGUAJES';
// utilizo la constante LANGUAJES para permutar los label del form segun idioma
import { app } from '../../Firebase/FirebaseApp';
// 1) Traigo la informacion (app) y configuracion a cualquier backend que hagamos
// 2) Traigo los metodos que preciso para authenticar con correo y pass
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
// ** Ahora pruebo con social Login
import SocialLogin from './SocialLogin';

export default function Login() {
    // usando el contexto
    let {current_language} = useContext(MainContext);
    // let current_language = "en";    // este valor se lo tengo que pasar de alguna manera

    const onSubmitForm = (event) => {
        event.preventDefault();
        const email = "lucas@lucas.com";
        const password = "prueba123";
        // 3) uso los metodos getAuth(app) para pedir la conexion de autenticacion usando nuestra config
        const auth = getAuth(app);

        // 4) obtengo el usuario si lo llamo con los parametros, esto devuelve una promesa
        const user = signInWithEmailAndPassword(auth, email, password)
            .then((credentials) => {
                // Si llegamos aca es porque se logeo
                const firebase_user = credentials.user;
                console.log(firebase_user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
        console.log(user);
        console.log("onSubmitForm");
    };
    const placeHolderFunction = (event) => {
        event.preventDefault();
        console.log("placeholder");
    }

    return (
        <>
            <Form className="container" onSubmit={onSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{ LANGUAJES[current_language].REGISTER.INPUT_EMAIL } </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={placeHolderFunction} />
                    <Form.Text className="text-muted">
                    El correo que uso para registrarse
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>{ LANGUAJES[current_language].REGISTER.INPUT_PASS } </Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={placeHolderFunction} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    { LANGUAJES[current_language].LOGIN.HEADING_LOGIN }
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </>
    )
}
