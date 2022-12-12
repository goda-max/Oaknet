import React, { useEffect, useState } from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import Table from 'react-bootstrap/Table'
import { Container } from 'react-bootstrap';
import axios from 'axios';


function NewOrderr() {


     const [details, getDetails] = useState([]);
  
  
     const getData = async () => {
      try {
          const data = await axios.get("http://fixapi.chengegikonyo.com/api/admin/Super-Admin/new_jobs");
     
          getDetails(data.data.data);
  
      } catch (e) {
          console.log("no execution");
         
      }
  };
  
  useEffect(()=>{
      getData();
  }, []);
  
  console.log('data',details);


//   const deleteDetail = async id =>{
//     await axios.delete(`http://fixapi.chengegikonyo.com/api/admin/Super-Admin/new_jobs/${id}`);
//      getData();
     
// }
     return ( 
          <div>
          <SidebarAdmin/>
          <Container>
          <ProfileNavAdmin/>  

          <h1>New Orders</h1>
          <div className='d-flex flex-row '>Dashboard / Order Managment/<h5 style={{color:"#fca311"}}>New</h5></div>
          <hr/>
        
        
        
        
{/* modal */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content " style={{borderRadius:'20px',width:"120%"}}>
      <div class="modal-header">
        <h5 class="modal-title ms-5" id="exampleModalLabel">Order No.01013</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    {/* table */}
    
     <div className='tblz'>
      <table class="table">
  <thead>
    <tr>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Service</td>
      <td>Repair</td>
      
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Description</td>
      <td>Tv</td>
      
    </tr>

    <tr>
      <th scope="row"></th>
      <td>Brand</td>
      <td>Samsung</td>
      
    </tr>

    <tr>
      <th scope="row"></th>
      <td>Serial number</td>
      <td>Rtg256521141322</td>
      
    </tr>


    <tr>
      <th scope="row"></th>
      <td>Exact problem</td>
      <td>My tv turned itself off, and it wont turn on</td>
      
    </tr>

    <br></br>

    <tr>
      <th scope="row"></th>
      <td>Date</td>
      <td>11/01/2020</td>
      
    </tr>

    <tr>
      <th scope="row"></th>
      <td>Time</td>
      <td>10 am</td>
      
    </tr>

    <br></br>


    <tr>
      <th scope="row"></th>
      <td>Location</td>
      <td>Nairobi</td>
      
    </tr>

    <tr>
      <th scope="row"></th>
      <td>Area</td>
      <td>Kileleshwa</td>
      
    </tr>

    <tr>
      <th scope="row"></th>
      <td>Stree/Building</td>
      <td>kyle Building</td>
      
    </tr>

    <tr>
      <th scope="row"></th>
      <td>Other location details</td>
      <td>The apartment are next to the police station</td>
      
    </tr>







  
  </tbody>
</table>

  {/* end table */}
     
     
     
     
     
     
     
     
      </div> 
      <div class="footz  mb-2 ms-5">
        
      <a href='/SchedOrder' className='btn btn-outline-warning rounded-pill text-black text-center  ms-5'>Approve job</a>
      <button type="button" className="btn btn-outline-warning rounded-pill ms-5"data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Decline job</button>
      </div>
    </div>
    </div>
    </div>

{/* second modal */}
    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content border border-warning "style={{borderRadius:"12%"}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Declined Job</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
           {/* <div className='headin'>
            <p style={{MarginLeft:"10%"}}>State below why you have declined the job request</p>
           </div> */}
{/* Text area */}
      <div class="modal-body">
      <div class="mb-3">
     <label for="exampleFormControlTextarea1" class="form-label">State below why you have declined the job request</label>
     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
     </div>
        
      </div>
{/* text area */}



      <div class="footz  mb-2 ms-5">
      <button type="button" className="btn btn-outline-warning rounded-pill ms-5">inform technician</button>
      </div>
    
    </div>
  </div>
</div>

{/* end second modal */}



















          <Table borderless hover variant="outline-light">
               <thead>
               <tr>
                         
                         <th>Order Id</th>
                         <th>Service</th>
                         <th>Customer</th>
                         <th>Location </th>
                         <th>Technician</th>
                         <th>Status</th>
                         
                    </tr>
                    </thead>
                    <tbody className='border shadow p-3 mb-5 bg-body rounded'>
              
               {details.map((item,index)=>(
                    <tr key={index}>
                    <td>{item.order_id}</td>
                    <td>{item.service_id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.model_number}</td>
                    <td> </td>
                    <td></td>
                    {/* <td class = "text-danger">Not Assigned</td> */}
                    <button  style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"white"}} data-bs-toggle="modal" data-bs-target="#exampleModal" >More Details...</button>
                    {/* <td><button type="button" class="btn btn-danger me-2 "onClick={()=>{deleteDetail(item.id)}}>Delete</button></td>
                    */}
                    </tr>
                ) )}
                  
               </tbody>
               </Table>
          </Container> 
               </div>
               
          
        );
    }

export default NewOrderr;