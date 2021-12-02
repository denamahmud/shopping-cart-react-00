import React, {useState, useContext} from 'react'
import { Col, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { FaBars } from "react-icons/fa";
import styled from 'styled-components'
import CartIcon from './CartIcon';
import CartContext from '../context/CartContext'


const Navbar = ({counter}) => {
    
    const name = JSON.parse(localStorage.getItem('username'))
    const { cartItems } = useContext(CartContext)
    
    
    const DIV_ONE = styled.div`
        width: 65%;
        height:50px;
        @media (max-width: 767px) {
            display: none;
        }
      
    `;
    const DIV = styled.div`

        display: none;
        @media (max-width: 767px) {
            display: flex;
        }
    
    `;



    const [show, setShow] = useState(false)
    
    return (
        <div className="navbar">
            <Container>
             
                <Col xs={4}>
                    <div className="logo">
                        <Link to="/">
                            Logo
                        </Link>
                    </div>
                </Col>
                
                <DIV_ONE>
                    <Col>

                        <ul className="nav-list">
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="about">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="contact">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="cart">
                                    <CartIcon counter={cartItems.length}/>
                                </Link>
                              
                            </li>
                            <li>
                                <Link to="profile-user">
                                    {name ? <div>{name}</div> : <div>User</div>}
                                </Link>
                            </li>
                        </ul>

                    </Col>
                </DIV_ONE>
                  
                <DIV>
                    <Col xs={8}>
                        <button onClick={() => setShow(!show)} className="btn-style"><FaBars/></button>
                        {
                            show ? <ul className="nav-list-hidden">
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="about">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="contact">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="cart">
                                    <CartIcon counter={cartItems.length}/>
                                </Link>
                                
                            </li>
                            <li>
                                <Link to="profile-user">
                                    {name ? <div>{name}</div> : <div>User</div>}
                                </Link>
                            </li>
                          

                            </ul> : null
                        }
                    </Col>
                </DIV>
     
              
                
            </Container>
            
        </div>
    )
}

export default Navbar
