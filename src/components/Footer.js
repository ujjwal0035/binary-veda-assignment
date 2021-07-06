import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../images/logo-white.svg';
import "./footer.css"

const Bot = () => {
    const [bot,setbot] = useState(true)
    return (
        <Container className="footer" >
            <Row >
                <Col md="2">
                    <img src={logo} alt="Marvel"/>
                </Col>
                <Col md="2" >
                    <h3 style={{marginBottom:"10px"}}>Overview</h3>
                    <h6>Why Marvel</h6>
                    <h6>Enterprise</h6>
                    <h6>Pricing</h6>
                    <h6>Request a demo</h6>
                    <h6>Explore</h6>
                    <h6>Apps</h6>
                    <h6>Developer API</h6>
                </Col>
                <Col md="2" >
                    <h3 style={{marginBottom:"10px"}}>Features</h3>
                    <h6>Wireframing</h6>
                    <h6>Design</h6>
                    <h6>Prototyping</h6>
                    <h6>Collaboration</h6>
                    <h6>Handoff</h6>
                    <h6>Integrations</h6>
                    <h6>Sketch Plugin</h6>
                </Col>
                <Col md="2" >
                    <h3 style={{marginBottom:"10px"}}>Support</h3>
                    <h6>Hel Center</h6>
                    <h6>Terms of Service</h6>
                    <h6>Privacy</h6>
                    <h6>Security</h6>
                </Col>
                <Col md="2" >
                    <h3 style={{marginBottom:"10px"}}>Marvel</h3>
                    <h6>Blog</h6>
                    <h6>Our Team</h6>
                    <h6>Contact Us</h6>
                    <h6>Success Stories</h6>
                    <h6>Brand Guidelines</h6>
                </Col>
                <Col md="2" >
                    <h3 style={{marginBottom:"10px"}}>Follow</h3>
                    <h6>Twitter</h6>
                    <h6>Dribble</h6>
                    <h6>Facebook</h6>
                    <h6>Github</h6>
                    <h6>Workable</h6>
                </Col>
            </Row>
        </Container>
    )
}

export default Bot;
