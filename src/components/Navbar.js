import React, {useState, useContext} from 'react'
import { Stack} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import styled from 'styled-components'
import CartIcon from './CartIcon';
import CartContext from '../context/CartContext'


const Navbar = () => {
    
    const { cartItems } = useContext(CartContext)
    
    
    const NAVBAR = styled.div`
        background-color : #502f4c;
    `

    const NAVBAR_CONTAINER = styled.div`
        display : flex;
        justify-content : space-between;
        width : 70%;
        margin : 0 auto
    `
    const MENU_LIST = styled.div`
        padding: 20px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 767px) {
            display: none;
        }
      
    `;
    const RESPONSIVE_MENU = styled.div`

        display: none;
        @media (max-width: 767px) {
            display: flex;
        }
    
    `;
    const linkStyle = {
        textDecoration: "none",
        fontSize: "1.3rem",
        fontWeight: "bold",
        color : '#fff',
    
    }


    const LINE_HEIGHT = styled.div`
        line-height : 3
    `


    const NAV_LIST_HIDDEN = styled.ul`
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        line-height: 4;
        text-align: center;
        padding: 20px;
        background-color: rgb(27, 27, 27);
        animation: animate1 0.5s ease-in-out;
    `
    const LIST = styled.li`
        list-style-type: none;
    `
    const BTN_STYLE = styled.button`

        display: none;
        @media (max-width: 767px) {
            background-color: #502f4c;
            color: #70587c;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 2.3rem;
            border: none;
            margin-top : 10px;
            display: flex;
        }

    `;
    const USER_REG = styled.div`
        font-size : 1.5rem;
        display : flex;
        justify-content : space-between
    `
    const LOGOUT = styled.div`
        margin : 0 10px;
        color : #F00
    `


    const removeUser = () => {
        if(localStorage.getItem('username')){
            localStorage.removeItem('username')
        }
    }
    const [show, setShow] = useState(false)
    
    return (
        <NAVBAR>
            <NAVBAR_CONTAINER>
              
                <Stack xs={4}>
             
                    <LINE_HEIGHT>
                        <Link to="/" style={linkStyle}>
                            Logo
                        </Link>
                    </LINE_HEIGHT>
                  
                  
                </Stack>
                
                <Stack>

                    <MENU_LIST>
                        <LIST>
                            <Link to="/" style={linkStyle}>
                                Home
                            </Link>
                        </LIST>
                        <LIST>
                            <Link to="/products" style={linkStyle}>
                                Products
                            </Link>
                        </LIST>
                        <LIST>
                            <Link to="/about" style={linkStyle}>
                                About Us
                            </Link>
                        </LIST>
                   
                        <LIST>
                            <Link to="/cart" style={linkStyle}>
                                <CartIcon counter={cartItems.length}/>
                            </Link>
                            
                        </LIST>
            
                    </MENU_LIST>

                </Stack>

                <RESPONSIVE_MENU>
                <Stack>
                  
                        
                       <BTN_STYLE onClick={() => setShow(!show)}><FaBars/></BTN_STYLE>
                 
                    {
                        show ? <NAV_LIST_HIDDEN className="nav-list-hidden">
                        <LIST>
                            <Link to="/" style={linkStyle}>
                                Home
                            </Link>
                        </LIST>
                        <LIST>
                            <Link to="/products" style={linkStyle}>
                                Products
                            </Link>
                        </LIST>
                        <LIST>
                            <Link to="/about" style={linkStyle}>
                                About Us
                            </Link>
                        </LIST>
                  
                        <LIST>
                            <Link to="/cart" style={linkStyle}>
                                <CartIcon counter={cartItems.length}/>
                            </Link>
                            
                        </LIST>
          
                       
                        

                        </NAV_LIST_HIDDEN> : null
                    }
                </Stack>
                </RESPONSIVE_MENU>
            </NAVBAR_CONTAINER> 
        </NAVBAR>
            
    )
}

export default Navbar
