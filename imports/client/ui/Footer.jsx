import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardTitle, CardText, CardActions, Button as ButtonCard,
    Footer, FooterSection, FooterDropDownSection, FooterLinkList
} from  'react-mdl';
// Sharing Attempts
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';
import * as conf from './config.jsx';
import * as info from './addInfo.jsx';
import * as Stylo from './StyledComponents.jsx';

const {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');
const EmailIcon = generateShareIcon('email');

let dat = new Date();

export default class FootrAdaptat extends Component {
    constructor(props) {
        super(props);

    }

    static: propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            error: PropTypes.object,
            subcategories: PropTypes.array
        }).isRequired
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
            <div>
                <Stylo.footer size="mega">
                    <ul className="nav navbar-nav navbar-right">
                        <Stylo.liNav>
                            <Stylo.aLink className="emailytel">{conf.emailContacto}</Stylo.aLink>
                        </Stylo.liNav>
                        <Stylo.liNav>
                            <Stylo.aLink className="emailytel">{conf.telContacto}</Stylo.aLink>
                        </Stylo.liNav>
                        <Stylo.liNav>
                          <Stylo.aLink href="https://facebook.com/latinmoda" target="_blank"> <i className="fa fa-facebook fa-2x"></i></Stylo.aLink>
                        </Stylo.liNav>
                        <Stylo.liNav>
                          <Stylo.aLink href="https://twitter.com/latinmoda" target="_blank"> <i className="fa fa-twitter fa-2x"></i></Stylo.aLink>
                        </Stylo.liNav>
                        <Stylo.liNav>
                          <Stylo.aLink href="https://instagram.com/latinmoda_oficial" target="_blank"> <i className="fa fa-instagram fa-2x"></i></Stylo.aLink>
                        </Stylo.liNav>
                        <Stylo.liNav>
                          <Stylo.aLink href={`https://api.whatsapp.com/send?phone=${conf.whatsappMsg}&text=Hola%2C%20necesito%20información`} target="_blank"> <i className="fa fa-whatsapp fa-2x"></i></Stylo.aLink>
                        </Stylo.liNav>
                    </ul>

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>


                    <FooterSection type="bottom">
                      <p>{`Copyright © ${dat.getFullYear()} - Ropa Colombiana en España.`}</p>
                    </FooterSection>





                    <div className="modal fade" id="about" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">{info.titleAbout}</h4>
                          </div>
                          <div className="modal-body">
                            {info.contAbout}
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div className="modal fade about-modal-lg" id="terms" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">{info.titleTerms}</h4>
                          </div>
                          <div className="modal-body">
                            {info.contTerms}
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div className="modal fade about-modal-lg" id="cookies" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">{info.titleCookies}</h4>
                          </div>
                          <div className="modal-body">
                            {info.contCookies}
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div className="modal fade" id="faq" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">{info.titleFAQ}</h4>
                          </div>
                          <div className="modal-body">
                            {info.contFAQ}
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>





                    <FacebookShareButton url="http://www.facebook.com/latinmoda" />
                    <TwitterShareButton url="http://twitter.com/latinmoda"/>
                </Stylo.footer>
            </div>
        );
    }
}
