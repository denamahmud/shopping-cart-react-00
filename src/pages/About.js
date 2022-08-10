import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const About = () => {

    
    const detailsStyle = {
        height : "auto",
        backgroundImage: "linear-gradient(#fff , #70587c)"
    }

    const HEAD_STYLE = styled.div`
        color : #70587c;
        font-size : 1.6rem;
        text-align : justify;
        margin : 20px 0;
        font-weight: bold

    `
    const PARA_STYLE = styled.div`
        color : #70587c;
        font-size : 1.1rem;
        text-align : justify;

    `
    const CONTENT = styled.div`
        padding : 50px;
        text-transform : capitalize;
        margin-bottom : 50px

    `
    return (
        <>
         
            <Container>
                <CONTENT>
                <HEAD_STYLE>About Us</HEAD_STYLE>
                <PARA_STYLE>do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

 

                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
</PARA_STYLE>
                </CONTENT>
            </Container>
        </>
    )
}

export default About
