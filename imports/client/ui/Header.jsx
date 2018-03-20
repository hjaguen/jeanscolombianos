import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import * as conf from './config.jsx';
import * as Stylo from './StyledComponents.jsx';

export default class HeaderAdaptat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // if (this.props.data.loading) {
        //     return (<div>Cargando...</div>);
        // }

        // if (this.props.data.error) {
        //     //console.log(this.props.data.error)
        //     return (<div>Ocurrió un error inesperado.</div>);
        // }

        return (
            <Stylo.header>
                <div className="container-fluid">
                    <Stylo.aBrand href="/" >
                      <Stylo.NavTitle>{conf.tituloPagina}</Stylo.NavTitle>
                      <h2>{conf.subtituloPagina}</h2>
                      <h3>{conf.titulo_contenido}</h3>
                    </Stylo.aBrand>
                </div>
            </Stylo.header> 
        );
    }
}
