import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                name: '',
                username: '',
                email: '',
                photo: '',
            }
        }
    }
    // Metodo invocado por el ciclo de vida del componente
    componentDidMount(){
        // console.log("Invocado desde componentDidMount");
        // this.setState({
        //     user: this.props.user
        // });

        // Pregunta: ¿Que pasaria si el fetch no funciona o tarda mucho?
        fetch('https://jsonplaceholder.typicode.com/users/2')   // utilizo metodo GET
        .then(response => response.json())  // capturamos y convertimos a objeto json de js 
        .then(json => {
            // console.log(json);
            // const { name } = json;
            // console.log(name);
            this.setState({
                user: { 
                    name: json.name,
                    username: json.username,
                    email: json.email,
                    photo: "https://picsum.photos/200/300",
                }
            });
        })
        .catch(error => console.error(error));

        // Otra manera de hacerlo con ayuda de POSTMAN - metodo POST
        /*
        var formdata = new FormData();
        formdata.append("fname", "juan");
        formdata.append("lname", "perez");

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://www.w3schools.com/action_page.php", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        */
    }

    render() {
    return (
        <Card className='mx-auto' style={{ width: '12rem'}}>
            <Card.Img variant="top" src={this.state.user.photo} />
            <Card.Body>
                <Card.Title>{this.state.user.name}</Card.Title>
                <Card.Text>{this.state.user.username} - correo: {this.state.user.email}</Card.Text>
                <a className='btn btn-primary' href='/home'>Recargar</a>
            </Card.Body>
        </Card>
    )
  }
}
