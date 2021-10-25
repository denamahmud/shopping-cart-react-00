import React, { Fragment } from 'react'

const AddToCart = (props) => {

    const { addToCart } = props

  
    
    return (

        <Fragment>
            <button className="btn-style" onClick={() => addToCart()}>Add To Cart</button>
        </Fragment>
    )
}

export default AddToCart
