import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image from '../images/illustration.png'
import "./greatings.css"

const Greatings = () => {
    const [state,setState] = useState(true)
    return (
        <Container className="greating">
            <Row >
                <Col md="6">
                    <h2 style={{marginBottom:"3px"}}>Let's build the future </h2>
                    <h2 style={{marginBottom:"20px"}}>of design, now.</h2>
                    <h6>Create amazing tools and integration for 1 million</h6>
                    <h6>users of customise for your team.</h6>
                    <button 
                        className={state ? "clicked":""}
                        onClick={()=>{setState(true)}}
                        >Submit your app</button>
                    <button
                        className={!state ? "clicked":""}
                        onClick={()=>{setState(false)}}
                        >View API Docs</button>
                </Col>
                <Col md="6">
                    <img src={image} alt="Greatings" className="dis"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Greatings
