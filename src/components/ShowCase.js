import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image from '../images/showcase.png'
import "./showcase.css"
const ShowCase = () => {
    const [state,setState] = useState(true)
    return (
        <Container className="showcase">
            <Row >
                <Col md="6">
                    <h3 style={{marginBottom:"3px"}}>ShowCase your app in our </h3>
                    <h3 style={{marginBottom:"20px"}}>integration directory</h3>
                    <h6>Building something special? we;re always looking to work</h6>
                    <h6>with partners who wants to help the world bring their ideas</h6>
                    <h6 style={{marginBottom:"20px"}}>to life.</h6>
                    <button 
                        className={state ? "pressed":""}
                        onClick={()=>{setState(true)}}
                        >Become a partner</button>
                    <button
                        className={!state ? "pressed":""}
                        onClick={()=>{setState(false)}}
                        >View integrations</button>
                </Col>
                <Col md="6">
                    <img src={image} alt="Greatings" className="dis"/>
                </Col>
            </Row>
        </Container>
    )
}

export default ShowCase;
