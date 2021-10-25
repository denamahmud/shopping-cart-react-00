import React, {useContext} from 'react'
import CartContext from '../context/CartContext'

const CartItems = ({item}) => {


    const { removeItem } = useContext(CartContext)
    
    return (
        <div>
            <img src={item.image} alt={item.title}/>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <button onClick={() => removeItem(item.id)}>remove</button>
        </div>
    )
}

export default CartItems
