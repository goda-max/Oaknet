import React, { useState } from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import { Container } from 'react-bootstrap';
function SchedOrder() {
   const [Scheduled,newSchedule]=useState([''])
     return ( 
      <div>
      <SidebarAdmin/>
      <Container>

      <ProfileNavAdmin/>   

      <h1>Scheduled</h1>
      <div className='d-flex flex-row '>Dashboard / Order Managment/<h5 className='d-inline' style={{color:"#fca311"}}>Scheduled</h5></div>
      <hr/>
      <Table borderless hover variant="outline-light">
           <thead>
           <tr>
                   
                     <th>Order No</th>
                     <th>Service</th>
                     <th>Customer</th>
                     <th>Technician</th>
                     <th>Status</th>
                     
                </tr>
                </thead>
                <tbody className='border shadow p-3 mb-5 bg-body rounded'>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td style={{color:"#fca311"}}> <Link to="">More details </Link> </td>
               
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                </tr>
           </tbody>
           </Table>
      </Container>
           </div>
      );
}

export default SchedOrder;