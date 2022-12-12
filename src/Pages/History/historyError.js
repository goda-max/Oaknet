import React from 'react';
import { Card,Col,Container,Row } from 'react-bootstrap';
import {HiEmojiSad} from "react-icons/hi";
function HistoryError({order}){
    return (
        <div >
        <Container className="pt-5">
            <Row>
                <Col md={3} lg={4}></Col>
                <Col md={6} lg={4}>

            <Card className='border border-warning'>
            <h4 className='text-center bg-warning'>Raise a claim for the order OR012</h4>
                <Card>
                <Card.Body>
                    <p className='text-center'>
                        We are very sorry, tell us what went wrong
                    </p>
                    <h2  className='text-center'>
                    <HiEmojiSad className='' style={{color:"#f0ad4e",fontSize:"50px"}} />
                    </h2>
                        
                    <form>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                    <div className="form-check ">
                        <input className="form-check-input d-flex justify-content-center" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label " for="flexRadioDefault1">
                            Technician behavior
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Customer service
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                        <label className="form-check-label" for="flexRadioDefault3">
                            Quality of service
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                        <label className="form-check-label" for="flexRadioDefault4">
                            item fixed
                        </label>
                    </div>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                        <label className="form-check-label" for="flexRadioDefault5">
                            Other
                        </label>
                    </div>
                    <div > <strong>Explain further:</strong> </div>
                    </Col>
                    <Col md={2}></Col>

                </Row>
                    <div className="form-floating container">
                        <textarea className="form-control" placeholder="What went wrong? How can we do better?" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                        
                    </div>
                    <a href='/history' className='btn btn-outline-warning float-start mt-3 text-black'>close</a>
                    <input type="submit" value="submit" name="submit" className="btn btn-outline-warning text-black float-end mt-3"/>
                    </form>
                        
                </Card.Body>

                </Card>
            </Card>
                </Col>
                <Col md={3} lg={4}></Col>
            </Row>
        </Container>
        </div>
    )
}
export default HistoryError;