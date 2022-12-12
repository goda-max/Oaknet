import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card,Col,Row,Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FeedbackForm({orderNo,servedBy}){


const navigate = useNavigate();

    const [ comment, setComment] = useState ({
        technician_feedback: '',
        agent_feedback: '',
       
    });
    
    const handleInput = (e) =>{
        e.persist();
    
        setComment({...comment, [e.target.name]: e.target.value});
        console.log(comment);
    };
        
    const commentSubmit = (e) => {
        e.preventDefault();
    
        const data ={
            technician_feedback: comment.technician_feedback,
            agent_feedback: comment.agent_feedback,
        }
    
    
    
  const dar =  axios.post(`http://fixapi.chengegikonyo.com/api/customer/feedbacks`, data) .then(res =>{
        console.log(dar);
        if(res.data)
        {

            alert("Commented successfully");
    
            navigate('/home');
    
        }else{
            alert("Comment not sent");
    
            navigate('/login');
        }
    
    }).catch(res =>{

        alert("Oops you have entered invalid credentials");
      
      });
    
    }
    
    useEffect(()=>{
        // console.log(errors);
      
            // console.log(comment);
          
        },[])




    const date = new Date();
    return (
        <div>
             <h2>Leave feedback on our service.</h2>
                    <Card>
                    <Container>
                        <Card.Body>
                            <div>Feedback form For</div>
                            <Row>
                                <Col md={6} lg={6}>
                                    <div>Order No</div>
                                </Col>
                                <Col md={6} lg={6}>
                                    <div>{orderNo}</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} lg={6}>
                                    <div>Served by:</div>
                                </Col>
                                <Col md={6} lg={6}>
                                    <div>{servedBy}</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} lg={6}>
                                    <div>Date:</div>
                                </Col>
                                <Col md={6} lg={6}>
                                    <div>{date.toLocaleDateString()}</div>
                                </Col>
                            </Row>
                            <div className='pt-5'>Fyx Technician:</div>
                            <form onSubmit={commentSubmit} className="form-floating container" >
                                <textarea onChange={handleInput} value={comment.technician_feedback} name="technician_feedback"  className="form-control" placeholder="Comment on your experience" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                <input value="submit" type="submit" className="btn btn-warning text-center mt-3"/>
                            </form>
                            <div className='pt-5'>Fyx Website:</div>
                            <form onSubmit={commentSubmit} className="form-floating container " >
                                <textarea onChange={handleInput} value={comment.agent_feedback} name="agent_feedback" className="form-control" placeholder="Comment on your experience" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                <input value="submit" type="submit" className="btn btn-warning text-center mt-3"/>
                            </form>
                            
                            
                        </Card.Body>
                    </Container>

                    </Card>
        </div>
    )
}
export default FeedbackForm;