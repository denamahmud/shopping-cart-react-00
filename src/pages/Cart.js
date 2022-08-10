import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import RemoveFromCart from '../components/RemoveFromCart'
import CartContext from '../context/CartContext'

const Cart = () => {

    const { cartItems } = useContext(CartContext)
    const { removeItem } = useContext(CartContext)



    
    console.log("cartItems : " + cartItems.length)

    const [priceTotal, setPriceTotal] = useState(cartItems.length > 0 ? cartItems.reduce((x, y) => x.price + y.price) : 0)


    const styleImg = {
        width: '50px'
    }
    const cardStyle = {
        backgroundImage: "linear-gradient(#fff , #70587c)"
    }

    const card_Style = {
        padding : "50px",
        display : "flex",
        justifyContent : "space-between",
        alignItems: "center",
        backgroundColor : "#fff",
        margin : "20px 0"
    }
      
 
    const MSG = styled.div`
    
       font-size : 3rem;
       text-align : center;
       padding : 50px
    `

    const ITEM_TITLE = styled.div`
        color : #502f4c;
        font-size : 1.2rem
    `

    const ITEM_PRICE = styled.div`
        color : #502f4c;
        font-size : 1.2rem
    `
 

    const mapping = cartItems.length > 0 ? cartItems.map(item => {
        return <>
   
            <Col lg={12} md={2}>
                <div style={card_Style} key={item.id}>
                    <img src={item.image} alt={item.title} style={styleImg}/>
                    <ITEM_TITLE>{item.title}</ITEM_TITLE>
                    <ITEM_PRICE>${item.price}</ITEM_PRICE>
                    <RemoveFromCart removeItem={() => removeItem(item.id)}>remove</RemoveFromCart>
            
                </div>
                
            </Col>
            
            
        </>
    }) : <MSG>There is no items</MSG>


   

    return (
        <div style={cardStyle}> 
            <Container>
                <Row>
                    {mapping}
                    <hr/>
                    <div>total : {priceTotal}  </div>
                    
                </Row>
            </Container>
        </div>

  
        )
    
}

export default Cart
