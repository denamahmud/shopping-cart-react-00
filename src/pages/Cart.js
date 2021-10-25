import React, {useContext} from 'react'
import { Col } from 'react-bootstrap'
import CartContext from '../context/CartContext'

const Cart = () => {

    const { CartItems } = useContext(CartContext)

    return (
      
                <Col ex={12} md={2}>
             

                    <div>
                  

                    {CartItems.length === 0 ? (<h4>Cart is Empty</h4>) : (
                        
                        <div>
                            
                            {CartItems.map(item => {

                              
                               <CartItems key={item.id} item={item}/>

                                
                            })}
                        </div>
                    )    
                    }
                    </div>
         

 
 
            
                </Col>
  
        )
    
}

export default Cart
