import { FaTimes } from 'react-icons/fa';

const RemoveFromCart = (props) => {

    const { removeItem } = props

    const btnStyle = {
        textDecoration: "none",
        fontSize: "1.3rem",
        color : '#f00',
        background : "none",
        border :"none",
        borderRadius : "30px",
        padding : "5px",
        cursor : "pointer"
    
    }
    
    
    return (

        <>
            <button style={btnStyle} onClick={removeItem}><FaTimes/></button>
           
        </>
    )
}

export default RemoveFromCart
