import React from 'react'
import { Badge } from '@material-ui/core'
import { FaShoppingCart } from 'react-icons/fa'

  

const CartIcon = ({counter}) => {
    return (
        <div>
            <Badge badgeContent={counter} color="secondary">
                <FaShoppingCart size={30}/>
            </Badge>
                    
        </div>
    )
}

export default CartIcon
