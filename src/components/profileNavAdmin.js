import React from "react";
import { Card,Container,Row,Col } from "react-bootstrap";
import * as fa from "react-icons/fa";
import { IoPersonCircle} from "react-icons/io5"; 
const ProfileNavAdmin = ({profile})=>{




    let user = JSON.parse (localStorage.getItem('auth_name'));
    
    return(<div className="">

    <Container>
        
        <Card className="shadow p-3 mb-5 bg-body rounded ps-4">
                <Card.Body>
                <Row>
                  <Col lg={1} md={1} >
                      <a href="admindashboard" ><fa.FaHome  style={{ fontSize:"30px", color:"black"}}/></a>
                  </Col>  
                  <Col lg={8} md={6}></Col>
                  <Col lg={1} md={1}>
                  <IoPersonCircle  style={{ fontSize:"30px", color:"black"}}/>
                  </Col>
                  <Col lg={2} md={3}>Hi {user.data.name} </Col>
                </Row>
                </Card.Body>
        </Card>
     </Container>
    </div>
    )
}

export default ProfileNavAdmin;