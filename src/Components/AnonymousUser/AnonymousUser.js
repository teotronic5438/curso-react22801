import React from 'react'
import Login from '../Login/Login';
import Signing from '../Signing/Signing';

export default function AnonymousUser(props) {
    // Le paso por props si el usuario anonimo se va a logear o se va a registrar
    const isRegistered = props.isRegistered
    return (
        <div className="w-50 mx-auto">
            { isRegistered ? <Login /> : <Signing />}
        </div>
    );
}
