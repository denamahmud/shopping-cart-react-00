import React, {useContext, useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddToCart from '../components/AddToCart'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/Details.css'
import CartContext from '../context/CartContext'

const Details = ({match}) => {

    const { addToCart } = useContext(CartContext)

    useEffect(() => {

        fetchItems()

    }, [])

    const [item, setItem] = useState({})

    const fetchItems = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const items = await data.json()
        console.log(items)
        setItem(items)

    }
    const [counter, setCounter] = useState(0)

    

    return (
        <div>
            <Navbar counter={counter}/>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                    <div className="left marginTop">
                        <h4>{item.title}</h4>
                        <p>{item.pice}</p>
                        <p>{item.category}</p>
                        <p>{item.description}</p>
                    </div>
                    </Col>
                    <Col xs={12} md={6}>
                    <div className="right marginTop">
                        <img src={item.image} alt={item.title}/>
                        <AddToCart addToCart={() => addToCart(item)}/>
                    </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Details
