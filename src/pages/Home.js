
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Home = () => {

    const HEADER_CONTAINER = styled.div`
    
    height : 100vh;
    background-image: linear-gradient(#fff , #70587c);

    `
    const HEADER = styled.div`
        text-align : center;
        padding : 200px

    `
    const WORDS = styled.div`
        font-size : 3rem;
        color : #FFF;
        background-color : #70587c;
        text-transform: uppercase
    `
    const SECOND_WORDS = styled.div`
        font-size : 1.1rem;
        margin : 30px 0

    `
    const linkStyle = {
        textDecoration: "none",
        fontSize: "1.3rem",
        fontWeight: "bold",
        color : '#fff',
        backgroundColor : "#70587c",
        padding : '10px',
        borderRadius : '50px',
        boxShadow : '0px 0px 10px #fefefe'
    
    }
    return (
        <HEADER_CONTAINER>

          
            <HEADER>

                <WORDS>
                    Lorem ipsum dolor sit amet !
                </WORDS>

                <SECOND_WORDS>
                   consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </SECOND_WORDS>
                <Link to='/products' style={linkStyle}>
                    Get Started
                </Link>

            </HEADER>
            
        </HEADER_CONTAINER>
    )
    
}

export default Home
