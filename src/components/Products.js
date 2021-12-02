import React, {useState, useContext, useEffect} from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import '../styles/products.css'
import AddToCart from './AddToCart'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'
import Search from './Search'
import CartContext from '../context/CartContext'



const Products = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
       try{
           fetchItems()
       }catch(error){
           console.log(error)
       }
       
    }, [])
    
    const fetchItems = async () => {
    
        const data = await fetch('https://fakestoreapi.com/products')
        const items = await data.json()
        setProducts(items)  
    }

    const { addToCart } = useContext(CartContext)

    
    const IMG = styled.div `
       width : 150px;
       height: 150px;
       margin: 20px auto;
    
    `


    const [state, setState] = useState([])
    const [counter, setCounter] = useState(0)
    const [searchTitle, setSearchTitle] = useState("")

    
    // function addToCart(product){
    //     setState([...state,product])
    //     setCounter(counter + 1)
    //     localStorage.setItem("productsInCart", JSON.stringify(state))
    // }

    const productsUI = products.filter(value => {
        if(searchTitle === ""){
            return value
        }else if(
            value.title.toLowerCase().includes(searchTitle.toLowerCase())
        ){
            return value
        }
   
    

    }).map(item => {
        return (
            
            <Col md={4}>
                <div className="product-item" key={item.id}>
                
                    <h4>
                        {item.title}

                    </h4>
                    <p>
                        ${item.price}
                    </p>
                    <IMG>
                    <img src={item.image} alt={item.title} className="img-style"/>
                    </IMG>
                
                    <button>
                        <Link to={`/products/${item.id}`}>Details</Link>
                    </button>
                    
                    <AddToCart addToCart={() => addToCart(item)}/>
                    
            
                </div>
            </Col>
            
           
        )
    })
    return (
        <div>
            <Navbar counter={counter}/>
            
            <div className="products">
            <Container>
                <Row>
                <Search search={setSearchTitle}/>
                
                    <div className="products-content">
                        {productsUI}
                        
                    </div>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default Products
