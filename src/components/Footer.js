import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../styles/Footer.css'
import { Typography } from '@material-ui/core';
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";


const Footer = () => {

    return (
       <div className="footer">
            <Container>
                <div className="footer-content">
                    <Row>
                        <Col xs={12} md={4}>
                            <div className="logo">
                                <Typography variant="p">Logo</Typography>
                            </div>
                        </Col>

                        <Col xs={12} md={4}>
                            <div className="copy-right">
                                <Typography variant="p">All Rights Reserved. &copy;Copyright</Typography>
                            </div>
                        </Col>

                        <Col xs={12} md={4}>
                          
                            <div className="social-media">
                                <a href="http://www.google.com"><BsFacebook/> </a>
                                <a href="http://www.google.com"><BsInstagram/> </a>
                                <a href="http://www.google.com"><BsPinterest/></a>
                            </div>
                           
                        </Col>
                    </Row>
                </div>
            </Container>
       </div>
    )
}

export default Footer
