import React, {useState, useEffect} from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Search from '../components/Search'


const Products = (props) => {

    const [products, setProducts] = useState([])

    console.log("products" + products)
    useEffect(() => {
          fetchItems()
      
    }, [])
    
    const fetchItems = async () => {
    
        const data = await fetch('https://fakestoreapi.com/products')
        const items = await data.json()
        setProducts(items)  
    }

    
    const IMG = styled.div `
       width : 150px;
       height: 150px;
       margin: 20px auto;
    
    `

    const [searchTitle, setSearchTitle] = useState("")


    const PRODUCT_ITEM = styled.div`
        max-height: 600px;
        border: 1px solid #70587c;
        margin: 20px;
        text-align: center;
        padding: 20px;
        background-color : #fff;
        border-radius : 10px;

    `

    const productsStyle = {

        backgroundImage: "linear-gradient(#fff , #70587c)"
    }

    const PRODUCTS_CONTENT = styled.div`
        display: flex;
        flex-wrap: wrap;
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
    const imageStyle = {
        width: "100%",
        height: "100%",
        OObjectFit: "cover",
            objectFit: "cover",
        margin: "auto"
    
    }

    const linkStyle = {
       
        fontSize: "1rem",
        color : '#fff',
    
    }

    


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
                <Link style={linkStyle} to={`/products/${item.id}`}>
                    <PRODUCT_ITEM key={item.id}>
                        <IMG>
                            <img style={imageStyle} src={item.image} alt={item.title} />
                        </IMG>
                    
                
                        <ITEM_TITLE>
                            {item.title}

                        </ITEM_TITLE>
                        <ITEM_PRICE>
                            ${item.price}
                        </ITEM_PRICE>
                    
            
                    </PRODUCT_ITEM>

        
                </Link>

            </Col>
            
           
        )
    })
    return (
        <div style={productsStyle}>
            
        
            <>
                <Container>
                    <Row>
                        <Search search={setSearchTitle}/>
                
                        <PRODUCTS_CONTENT>
                            {productsUI}
                            
                        </PRODUCTS_CONTENT>
                    </Row>
                </Container>
            </> 
       
            
         
        </div>
    )
}

export default Products
