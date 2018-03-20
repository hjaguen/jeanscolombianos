import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as conf from './config.jsx';
import * as Stylo from './StyledComponents.jsx';

export default class HeaderCategorie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stylo.header2>
                <div className="container-fluid">
                    <Stylo.aBrand2 href="/" >
                      <Stylo.NavTitle>{conf.tituloPagina}</Stylo.NavTitle>
                    </Stylo.aBrand2>
                </div>
            </Stylo.header2> 
        );
    }
}