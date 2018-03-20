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
//import './style.css';

export default class NavbarAdaptat extends Component {
    constructor(props) {
        super(props);
         this.state = {
            showCart: false,
            cart: this.props.cartItems,
        };

        this.canviaSubcat = this.canviaSubcat.bind(this);
    }

    handleCart(e){
        e.preventDefault();
        this.setState({
            showCart: !this.state.showCart
        })
    }
    
    // static propTypes = {
    //     data PropTypes.shape({
    //         loading: PropTypes.bool,
    //         error: PropTypes.object,
    //         subcategories: PropTypes.array
    //     }).isRequired
    // }

    canviaSubcat() {
        //this.props.subcategoryIdAlState();
        this.props.filtrantMarca(null);
        this.props.filtrantColor(null);
        this.props.filtrantTalla(null);
        $('#mainMenu').modal('hide');
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps === this.props) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        if (this.props.data.loading) {
            return (<div>Cargando...</div>);
        }

        if (this.props.data.error) {
            //console.log(this.props.data.error)
            return (<div>Ocurrió un error inesperado.</div>);
        }

        return (
            [
            <Stylo.MainNavBar id="menu" className="navbar" role="navigation">
                <button type="button" className="fa fa-bars fa-2x" data-toggle="modal" data-target="#mainMenu">
                   MENU        
                </button>

                <button type="button" data-toggle="modal" data-target="#pedido">
                    <i className="fa fa-shopping-basket fa-2x emailytel"></i>
                </button>
            </Stylo.MainNavBar>
            ,

            <div className="row">
                <div className="modal fade" id="mainMenu" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" style={{width:`90%`}} role="document">
                        <div className="modal-content">
                            
                                <ul className="nav navbar-nav">
                                    {
                                        this.props.data.subcategories.map(
                                            (v,i,a) => {
                                                return (
                                                  <Stylo.liNav>
                                                    <LinkContainer key={i} to={`/categoria/${v.nom_categoria.trim().toLowerCase().replace(/\s+/g, '.')}.${v.categoriaId}`}>
                                                        <Stylo.aLink
                                                            eventKey={i}
                                                            onClick={this.canviaSubcat}
                                                            data-subcategory-id={v.categoriaId}
                                                        >                   {v.nom_categoria}
                                                        </Stylo.aLink>
                                                    </LinkContainer>
                                                  </Stylo.liNav>
                                                )
                                            }
                                        )
                                    }
                                </ul>
                           
                        </div>
                    </div>
                </div>
            </div>
            ,

            <div className="row">
                <div className="modal fade" id="pedido" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" style={{width:`90%`}} role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">Completa tu Pedido</h4>
                            </div>
                            <div className="modal-body">
                                <div className="cart col-sm-8 col-xs-12"> 
                                    <div className="cart-info">
                                        {/*<table>
                                            <tbody>
                                                <tr>
                                                    <td>No. of items</td>
                                                    <td>:</td>
                                                    <td><strong>{this.props.totalItems}</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>Sub Total</td>
                                                    <td>:</td>
                                                    <td><strong></strong></td>
                                                </tr>
                                            </tbody>
                                        </table>*/}
                                        <div className={this.state.showCart ? "cart-preview active" : "cart-preview"} ref="cartPreview">
                                            {/*<CartScrollBar>
                                                
                                            </CartScrollBar>*/}
                                            <div className="action-block">
                                                {/*<button type="button" className={this.state.cart.length > 0 ? " " : "disabled"}>PROCEED TO CHECKOUT</button>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <form >
                                        <div><h5>Déjanos tus datos para contactarte</h5></div>
                                        <div className="form-group">
                                            <input name="particular" type="checkbox" id="particular" className="poshytip" title="Soy un particular" /> Soy un particular&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input name="empresa" type="checkbox" id="empresa" className="poshytip" title="Soy una empresa"/> Soy una empresa
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="nombre">Nombre*:</label>
                                            <input name="nombre" type="text" className="form-control" title="Ingrese su nombre" id="nombre" ref={nm => this.text = nm }/>
                                        </div>
                                        <div className="form-group">    
                                            <label htmlFor="apellido">Apellidos*</label>
                                            <input name="apellido" type="text" className="form-control" title="Ingrese su apellido" id="apellido" ref={ln => this.text = ln }/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="direccion">Direccion*</label>
                                            <input name="direccion" type="text" className="form-control" title="Ingrese su dirección"  id="direccion" ref={dir => this.text = dir }/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="zip">Codigo Postal*</label>
                                            <input name="zip" type="text" className="form-control" title="Ingrese su dirección"  id="zip" ref={zip => this.text = zip }/>                        
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="localidad">Localidad*</label>
                                            <input name="localidad" type="text" className="form-control" id="localidad" ref={loc => this.text = loc }/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="provincia">Provincia*</label>
                                            <input name="provincia" type="text" className="form-control" id="provincia" ref={pv => this.text = pv }/>                        
                                        </div>
                                        <div className="form-group">    
                                            <label htmlFor="telefono-movil-1">Telefono Movil*</label>
                                            <input name="telefono-movil-1" type="form-control"  className="form-control" title="+34 o el indicativo que corresponda" id="telefono-movil-1" placeholder="+34" ref={mv1 => this.text = mv1 }/>
                                        </div>
                                        <div className="form-group">     
                                            <label htmlFor="telefono-movil-2">Movil Alternativo</label>                              
                                            <input name="telefono-movil-2" type="form-control" className="form-control" title="Su teléfono movil"  id="telefono-movil-2" ref={mv2 => this.text = mv2 }/>
                                        </div>
                                        <div className="form-group">    
                                            <label htmlFor="emailCliente">Dirección de Email*:</label>
                                            <input type="email" className="form-control" id="emailCliente" placeholder="Introduzca su Email" ref={email => this.from = email} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mensajeCliente">Comentarios:</label>
                                            <textarea className="form-control" id="mensajeCliente" placeholder="Escriba su Mensaje" ref={ta => this.text = ta }/>
                                        </div>
                                        {/*Datos del pedido*/}
                                        {/*<input name="msg_txt" type="hidden" id="msg_txt" value=" | Ref. 003 -D13549, Marca: Americano, Código de Barras: 009D1354901001, Color: Rojo, Talla: S, Cantidad: 1 | "/>
                                        <input name="msg_html" type="hidden" id="msg_html" value="<ol><li>Ref. 003 -D13549, Marca: Americano, Código de Barras: 009D1354901001, Color: Rojo, Talla: S, Cantidad: 1</li></ol>"/>*/}
                                        <button
                                            className="btn btn-success"
                                            onClick={(ev)=>{
                                                ev.preventDefault();
                                                ev.stopPropagation();
                                                Meteor.call('enviaCorreu', this.from.value, this.text.value );
                                                alert("Mensaje enviado. ¡Gracias por contactar con nosotros!");
                                            }}
                                        >Enviar</button>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                {/*<button type="button" className="btn btn-success">PROCEED TO CHECKOUT</button>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ]
        );
    }
}

{/*<Stylo.MainNavBar id="menu" className="navbar" role="navigation">
                <ul className="main-menu clearfix">
                    <li><a href="#">Menu
                            <span className="drop-icon">▾</span>
                            <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm1">▾</label>
                        </a>
                        <input type="checkbox" id="sm1"/>
                        <ul className="sub-menu">
                           {
                                this.props.data.subcategories.map(
                                    (v,i,a) => {
                                        return (
                                          <Stylo.liNav>
                                            <LinkContainer key={i} to={`/categoria/${v.nom_categoria.trim().toLowerCase().replace(/\s+/g, '.')}.${v.categoriaId}`}>
                                                <Stylo.aLink
                                                    eventKey={i}
                                                    onClick={this.canviaSubcat}
                                                    data-subcategory-id={v.categoriaId}
                                                >                   {v.nom_categoria}
                                                </Stylo.aLink>
                                            </LinkContainer>
                                          </Stylo.liNav>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </li>
                </ul>
</Stylo.MainNavBar>*/}