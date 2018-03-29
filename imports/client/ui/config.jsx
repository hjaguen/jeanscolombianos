import React from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col } from 'react-bootstrap';


export let

    categoryId = `3`
    ,
    tituloPagina = `Jeans Colombianos`
    ,
    subtituloPagina = `Pantalones 100% Levantacola`
    ,
    telContacto = `(+34) 962 441 478`
    ,
    emailContacto = `ventas@latinmoda.info`
    ,
    whatsappMsg = `34674150202`
    ,

//Imagen de fondo y sus opciones
    fonsPrincipal = `Jean-Latinmoda.jpg`,
    backgroundSize =  `cover`,
    backgroundRepeat = `no-repeat`,
    backgroundAttachment = `fixed`
    ,

// Tamaño de columna y estilo para las fotos de producto
    amplaria_fitxetes_subcategoria = `220px`
    ,
    estil_fitxetes = {
        width: amplaria_fitxetes_subcategoria,
        height: `auto`,
        display: `inline-block`,
        border: `1px rgba(0,0,0,.5) solid`,
        borderRadius: `.3em`,
        margin: `.4em`,
        background: `rgba(255, 255, 255, 0.25)`
    }

    ,

// Estilo para modulo de filtro
     filtres_posicio = `bloque` // `columna` | `bloque`
     ,

// 1er Contenido libre em "Home"
    titulo_contenido = `Vendemos y distribuimos Calidad y Diseño 100% Colombianos.`

    ,

    bloque_contenido =

    <div className="col-sm-12">
        <div className="col-sm-4 col-xs-12" style={{marginBottom: `1em`}}>
            <img className="img-rounded img-responsive" src="./jean-colombiano-push-up-latinmoda.jpg"/>
            <p>En <strong>Latinmoda</strong> tenemos los mejores <strong>Jeans Colombianos</strong>
            , fabricados con excelentes materiales y con la mejor calidad. Encuenta aquí la última 
            <strong> moda de 2018</strong>
            </p>    
        </div>
        <div className="col-sm-4 col-xs-12" style={{marginBottom: `1em`}}>
            <img className="img-rounded img-responsive" src="./jean-levantacola-colombiano-latinmoda.jpg"/>
            <p><strong>Jeans Push-up Moldeadores</strong>,
            <strong> Realzan tu figura</strong>, 
            <strong> Ventas al por Mayor</strong>,
            <strong> Moda 100% Colombiana</strong>
            </p>
        </div>
        <div className="col-sm-4 col-xs-12" style={{marginBottom: `1em`}}>
            <img className="img-rounded img-responsive" src="./falda-de-moda-latinmoda.jpg"/>
            <p>Luce <strong>Sensual y atractiva</strong> con nuestros 
            <strong>Sexis Faldas </strong>
            100% <strong>Colombianas</strong>, perfectas para disfrutar 
            y lucir Hermosa este <strong>Verano</strong> que se acerca.

            </p>
        </div>
    </div>

    ,

    bloque_info =
    <div className="row">
        <section id="content-1-2" className="content-block content-1-2">
            <div className="container">
                <div className="row">
                    <ul>
                        <li>
                            <a></a>
                        </li><li>
                            <a></a>
                        </li>
                        <li>
                            <a></a>
                        </li>
                        <li>
                            <a></a>
                        </li>
                        <li>
                            <a></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
;
