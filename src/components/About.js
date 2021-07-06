import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import team from "../images/apiTeam@2x-5a72bbd0df3f17c4851dca773b2b1b8f-3ad8f.png"
import graphql from "../images/graphQL.png"
import workflow from "../images/superchargeWorkflow.png"
import "./about.css"

const About = () => {
    return (
        <Container className="about">
            <Row >
                <Col md="4">
                    <img src={team} alt="team" />
                    <h3>Dedicated API Team</h3>
                    <h6>Our team is available for user's questions via</h6>
                    <h6>our Slack Devloper Community and Email</h6>
                </Col>
                <Col md="4">
                    <img src={graphql} alt="graphql" />
                    <h3>Our API uses Graph QL</h3>
                    <h6>No headline server side. Get many API's</h6>
                    <h6>responses in the single request.</h6>
                </Col>
                <Col md="4">
                    <img src={workflow} alt="workflow" />
                    <h3>Supercharge your workflow</h3>
                    <h6>Automate workflow, integrate and analyse data</h6>
                    <h6>and take Marvel to the next level.</h6>
                </Col>
            </Row>
        </Container>
    )
}

export default About
