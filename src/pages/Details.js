import React, {useContext, useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddToCart from '../components/AddToCart'
import CartContext from '../context/CartContext'
import styled from 'styled-components'

const Details = ({match}) => {

    const { addToCart } = useContext(CartContext)

    useEffect(() => {

        fetchItems()

    }, [])

    const [item, setItem] = useState({})

    const fetchItems = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const items = await data.json()
        setItem(items)

    }



    const detailsStyle = {
        height : "auto",
        backgroundImage: "linear-gradient(#fff , #70587c)"
    }
    const BOX = styled.div`
        padding :100px;
        margin : 50px 0;
    `
    const boxImage = {
        width : "100%",
        objectFit : "cover"
    }

    const MARGIN_TOP =  styled.div`
        margin-top : 50px;
    `

    const ITEM_TITLE = styled.div`
        font-size : 1.2rem;
        font-weight : bold;
        color :#502f4c;

    `
    const ITEM_PRICE = styled.div`
        color : #70587c;
        font-size : 1.1rem

    `
    const ITEM_CAT = styled.div`
        color : #70587c;
        font-size : 1.1rem;
        font-weight : bold;
        margin : 20px 0

    `
    const ITEM_DESC = styled.div`
        color : #70587c;
        font-size : 1.1rem;
        text-align : justify

    `

    return (
        <div style={detailsStyle}>
            
            <Container key={item.id}>
                <Row>
                    <Col xs={12} md={6}>
                    <BOX>
                        <ITEM_TITLE>{item.title}</ITEM_TITLE>
                        <ITEM_PRICE>${item.price}</ITEM_PRICE>
                        <ITEM_CAT>{item.category}</ITEM_CAT>
                        <ITEM_DESC>{item.description}</ITEM_DESC>
                        <MARGIN_TOP>

                     
                        <AddToCart addToCart={() => addToCart(item)}/>
                     
                         
                        </MARGIN_TOP>
                    </BOX>
                    </Col>
                    <Col xs={12} md={6}>
                    <BOX>
                        <img style={boxImage} src={item.image} alt={item.title}/>
                       
                    </BOX>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Details
