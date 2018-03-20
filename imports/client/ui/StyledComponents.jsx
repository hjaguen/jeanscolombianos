import React, {Component} from 'react';
import styled from 'styled-components';
import * as conf from './config.jsx';

let bloCol = (conf.filtres_posicio) === `columna` ? `"col mos mos"` : `"bq bq bq" "mos mos mos"`;

export const
    LO = styled.div`
        padding: 0px;
        display: grid;
        grid-template-columns: 1.25fr 1.25fr 0.5fr;
        grid-template-areas:
            "h h nb"
            
            ${bloCol}
            "fot tex min "
            "ft ft ft"
        ;
        background-image: url(/${conf.fonsPrincipal});
        background-size: ${conf.backgroundSize};
        background-repeat: ${conf.backgroundRepeat};
        background-attachment: ${conf.backgroundAttachment};
    `,

    ProductsLayout = styled.div`
      display: grid;
      grid-template-columns: 25% auto;
      grid-template-rows: auto;
      grid-template-areas:
        "filtro content"
    `,

    MainNavBar = styled.nav`
        grid-area: nb;
        top: 0;
        height: min-height;
        transition: all 1s ease;
        z-index: 100;
        font-family: 'Comfortaa', sans-serif;
        margin-left:5%;
        position:sticky;
        float:rigth;
    `,

    PosicionFiltro = styled.div`
        grid-area: ${(conf.filtres_posicio) === "columna" ? "col" : "bq"};
    `,


    // Filtro = styled.div.attrs({
    //   className: 'filtro'
    // })`
    //     width: 90%;
    //     max-width: 300px;
    //     background: rgba(255, 255, 255, 0.25);
    //     margin: 2em 2em;
    //     padding: 2em;
    //     borderRadius: 1em;
    //     position: -webkit-sticky;
    //     position: sticky;
    //     top: 160px;

    //     * {
    //         transition: all 1s ease;
    //     }

    //     @media (max-width: 500px) {
    //         //> :not(.mobile), .Select {
    //         .amaga {
    //             height: 0;
    //             margin: 0 !important;
    //             padding: 0;
    //             opacity: 0;
    //             visibility: hidden;
    //         }

    //         .mostra {
    //             margin: 2em 2em;
    //             //padding: 2em;
    //             height: auto;
    //             opacity: 1;
    //             visibility: visible;
    //         }

    //         .filtreC.mostra {
    //             margin: 0;
    //             margin-top: 3em;
    //         }
    //     }

    //     @media (min-width: 500px) {
    //         .mobile {
    //             height: 0;
    //             margin: 0;
    //             padding: 0;
    //             opacity: 0;
    //             visibility: hidden;
    //         }
    //     }
    // `,
    Filtro = styled.div.attrs({
        className: 'filtro'
      })`
        width: 90%;
        background: rgba(0,0,0,.5);
        -webkit-transition: opacity 300ms ease;
        -moz-transition: opacity 300ms ease;
        -o-transition: opacity 300ms ease;
        transition: opacity 300ms ease;
        position: relative;
        //margin-top: 2%;
        //top:22%;
        // padding-top:2em;
        z-index:400;

        * {
            transition: all 1s ease;
        }

        @media (max-width: 500px) {
            //> :not(.mobile), .Select {
            .amaga {
                height: 0;
                margin: 0 !important;
                padding: 0;
                opacity: 0;
                visibility: hidden;
            }

            .mostra {
                margin: 1.5em 2em;
                //padding: 2em;
                height: auto;
                opacity: 1;
                visibility: visible;
            }

            .filtreC.mostra {
                //margin: 0;
                margin-top: 1em;
            }
        }

        @media (min-width: 500px) {
            .mobile {
                height: 0;
                margin: 0;
                padding: 0;
                opacity: 0;
                visibility: hidden;
            }
        }
    `,

    PosicionProductos = styled.div`
      grid-area: mos;
    `,

    NavTitle = styled.h1`
        margin-top: 0;
        font-size: 2.5em;
        color: white;
        text-shadow: 8px 5px 10px white;
        font-family: 'Comfortaa', sans-serif;
        font-weight: 700;

        @media (min-width:351px) and (max-width:500px) {
          font-size: 1.4em;
        }

        @media (max-width:350px) {
          font-size: 1.1em;
        }
    `,

    MainContent = styled.div.attrs({
      //className: 'container'
      className: 'maincontent'
    })`
        grid-area: c;

        margin-top: 10%;
        padding-top:30%;
        margin-bottom: 5.8%;

        > h1 {
          font-family: 'Comfortaa', sans-serif;
          font-size: 3em;
          font-weight: 700;
          color:white;
        }

        > h2 {
          font-family: 'Comfortaa', sans-serif;
          font-size: 2em;
          font-weight: 500;
          color: white;
        }

        > h3 {
          font-family: 'Comfortaa', sans-serif;
          font-size: 1.7em;
          font-weight: 300;
          color:white;
        }

        p {
          font-family: 'Comfortaa', sans-serif;
          font-size: 1.2em;
          font-weight: 100;
        }
    `,

    aLink = styled('a')`
      padding: 15px;
      // padding-top: 7px !important;
      // padding-bottom: 7px !important;
      color: white;
      font-size: 1.25em;
	    text-shadow: 0 1px 0 rgba(255,255,255,.25);
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      //transform: scaleX(.9);
        &:hover, &:focus {
          color: rgb(255, 64, 129);

        }
    `,

    aBrand = styled.a.attrs({
      className: 'navbar-brand nombre-marca'
    })`
      margin-top: 20%;
      font-size: 2.5em;
      margin-left:10%;
      margin-bottom:0.3%;
     

      h1 {
          transition: color 3s;
      }
      h2 {
        color: white;
        //font-size:1.5em;
      }
      h3 {
        color:white;
        //font-size:1.5em;
      }
    `,

    aBrand2 = styled.a.attrs({
      className: 'navbar-brand nombre-marca'
    })` 

      
    `,

    liNav = styled.li`
        > ${aLink}{
        &:hover, &:focus {
          background-color: transparent;
      }
    }
    `,

    footer = styled.footer.attrs({
      className: 'mdl-mega-footer'
    })`
      background-color: rgba(255, 255, 255, 0.25);
    `
    ,

    header = styled.header`
      grid-area: h;
      position: relative;
      margin-bottom:5%;
      min-height:33.5em;
      `
      ,

      header2 = styled.header`
      grid-area: h;
      position: relative;
      margin-bottom:5%;
      `
;
