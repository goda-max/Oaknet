import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ProfileNav from '../../components/profileNav';
import Sidebar from '../../components/Sidebar';
import FeedbackForm from './FeedbackComp';

function Feedback() {
    
    
    return ( 
        
        <div>
           <Sidebar/> 
           <ProfileNav profile="Nicole" />

        <Container>
            <Row>
                <Col lg={6} md={6}>
                   <FeedbackForm orderNo="01" servedBy="James St Patrick" />
                </Col>
                <Col md={6} lg={6}>
                <img src='/Assets/images/Copy of registertech.png' className=' mx-auto d-block img-fluid pt-5 mt-5'/>
                </Col>
            </Row>
            
        </Container>

        </div>
     );
}

export default Feedback;