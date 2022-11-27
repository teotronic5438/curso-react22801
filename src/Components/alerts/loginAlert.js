import React from 'react';
import ErrorMessage from './errorMessage';

export default function LoginAlert(props) {
    const displayError = props.displayError;

    return (
      <>
        { displayError ? <ErrorMessage message="Error de credenciales" /> :<></> }
      </>
  )
}
 