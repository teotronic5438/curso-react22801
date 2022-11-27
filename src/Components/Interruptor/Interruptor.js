import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import AnonymousUser from '../AnonymousUser/AnonymousUser';
import LoginAlert from '../alerts/loginAlert';

export default class Interruptor extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
    }

    // Metodo para manejo del click
    /*
    handleClick() {
        // setea el estado, usando una funcion anonima y negando el estado anterior
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    */
    handleClick = () => {
        console.log('this is: ', this);
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

  render() {
    return (
        <div className="d-grid gap-2 my-2">  {/* el gap-2 es si hay mas de un boton */}
            <Button 
                variant={this.state.isToggleOn ? 'success' : 'danger'} 
                size="lg" 
                onClick={this.handleClick}
            >
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </Button>
            <LoginAlert displayError={!this.state.isToggleOn} />
            <AnonymousUser isRegistered={this.state.isToggleOn} />
        </div>
    )
  }
}
