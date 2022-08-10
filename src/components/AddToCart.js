import { HiPlus } from 'react-icons/hi';

const AddToCart = (props) => {

    const { addToCart } = props

    const btnStyle = {
        textDecoration: "none",
        fontSize: "1rem",
        color : '#502f4c',
        backgroundColor : "#c8b8db",
        border :"none",
        borderRadius : "30px"
    
    }

  

    
    return (

        <>
            {
                <button style={ btnStyle } onClick={addToCart}> add to cart <HiPlus/></button>
            }
           
        </>
    )
}

export default AddToCart
