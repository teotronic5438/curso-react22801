import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';

export default function NotFound() {
  return (
    <Container className='text-center'>
      <Alert className='text-uppercase' variant='danger'>404 - Pagina NO encontrada</Alert>
      <Image src='https://http.cat/404'></Image>
    </Container>
  )
}
