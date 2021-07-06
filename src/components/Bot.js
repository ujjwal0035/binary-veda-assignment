import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image from "../images/botbot.png"
import "./bot.css"

const Bot = () => {
    const [bot,setbot] = useState(true)
    return (
        <Container className="showcase" dtyle={{marginTop:"100px"}}>
            <Row >
                <Col md="6">
                    <img src={image} alt="bot" className="dis"/>
                </Col>
                <Col md="6" style={{paddingLeft:"20px" }}>
                    <h3 style={{marginBottom:"3px"}}>A Slack-bot for creating </h3>
                    <h3 style={{marginBottom:"20px"}}>and managing prototypes</h3>
                    <h6>Building something special? we're always looking to work</h6>
                    <h6>with partners who wants to help the world bring their ideas</h6>
                    <h6 style={{marginBottom:"20px"}}>to life.</h6>
                    <button 
                        className={bot ? "pushed":""}
                        onClick={()=>{setbot(true)}}
                        >Become a partner</button>
                    <button
                        className={!bot ? "pushed":""}
                        onClick={()=>{setbot(false)}}
                        >View Integration</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Bot;
