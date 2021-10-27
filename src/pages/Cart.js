import React, {Fragment, useContext} from 'react'
import { Col } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartContext from '../context/CartContext'

const Cart = () => {

    const { cartItems } = useContext(CartContext)
    const { removeItem } = useContext(CartContext)

    console.log("cart cartItems", cartItems)

    const style = {
        width: '50px'
    }
    const mapping = cartItems.length ? cartItems.map(item => {
        return <Col ex={12} md={2}>
            <div key={item.id}>
                <img src={item.image} alt={item.title} style={style}/>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <button onClick={() => removeItem(item.id)}>remove</button>
            </div>
        </Col>
    }) : []

    return (
      
        <Fragment>
            <Navbar/>

                {mapping}

            <Footer/>
        </Fragment>
  
        )
    
}

export default Cart
