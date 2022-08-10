import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Typography } from '@material-ui/core';
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";
import styled from 'styled-components'

const Footer = () => {

    const CONTENT = styled.div`
        background-color : #333;
        color: #eee;
        font-size : 1.2rem;
        padding : 50px

    `
    const SOCIAL_MEDIA = styled.a`
      
        color: #eee;
        font-size : 1.2rem;
        margin : 0 10px;
        text-decoration : none

    `

    return (
       <CONTENT>
            <Container>
               
                    <Row>
                        <Col xs={12} md={4}>
                            <Typography variant="p">Logo</Typography>
                            
                        </Col>

                        <Col xs={12} md={4}>
                            
                            <Typography variant="p">All Rights Reserved. &copy;Copyright</Typography>
                            
                        </Col>

                        <Col xs={12} md={4}>
                          
                            <div>
                                <SOCIAL_MEDIA href="http://www.google.com"><BsFacebook/> </SOCIAL_MEDIA>
                                <SOCIAL_MEDIA href="http://www.google.com"><BsInstagram/> </SOCIAL_MEDIA>
                                <SOCIAL_MEDIA href="http://www.google.com"><BsPinterest/></SOCIAL_MEDIA>
                            </div>
                           
                        </Col>
                    </Row>
              
        </Container>
       </CONTENT>
    )
}

export default Footer
