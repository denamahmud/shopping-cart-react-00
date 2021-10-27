import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Products from '../components/Products'


const Home = () => {

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
    
    return (
        <div>

            <Products products={products}/>
            <Footer/>
            
        </div>
    )
    
}

export default Home
