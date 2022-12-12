import React, { useEffect, useState } from "react";
import * as fa from "react-icons/fa";
import Table from 'react-bootstrap/Table'
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

function NotScheduled () {

    return (
           <div>
               
            <div className='border ' style ={{backgroundColor:"#CCCACA"}}>

                <img src='/Assets/images/Copy of registertech.png' className='py-4 mx-auto d-block'/>
                 <h2 className='text-center'>You don't have a scheduled order </h2> 
                <Container>
                    <Row>
                        <Col md={4} sm={4} lg={5}></Col>
                        <Col md={4} sm={4} lg={3}> <a href='/bookservice' className='btn btn-outline-warning rounded-pill text-black text-center mb-5 mt-5'> Book Service</a></Col>
                        <Col md={4} sm={4} lg={5}></Col>
                    </Row>
                </Container>
               
            </div>
        ]</div>
    )
}
function IsScheduled (){
     
const [details, getDetails] = useState([]);
const getData = async () => {
    try {
        const data = await axios.get("http://fixapi.chengegikonyo.com/api/customer/active");
        console.log(data.data.data);
        getDetails(data.data.data);

    } catch (e) {
        console.log("no execution");
       
    }
};

useEffect(()=>{
    getData();
}, []);

console.log('deta',details);
    return ( 
        <div className=''>             
            <Table borderless hover variant="outline-light">
                <thead>
                <tr>
                        
                        <th>Order No</th>
                        <th>Service</th>
                        <th>Description</th>
                        <th>Invoice</th>
                        <th>Date</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody className='border shadow p-3 mb-5 bg-body rounded'>
                {details.map((item,index)=>(
                    <tr key={index}>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td> <a style={{color:"yellow"}} >More details</a> </td>
                    </tr>

                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td> </td>
                    <td></td>
                    </tr>
                      
                    
                    </tr>

                      ) )}
                    
                </tbody>
                </Table>   
            </div>)
}
export {NotScheduled,IsScheduled}