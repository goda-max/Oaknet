import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import { BiMessageRounded } from "react-icons/bi";
import { useState } from "react";
import "./Jobdashboard.css";
import TechnicianSidebar from '../../components/technicianSidebar';
import ProfileTechNav from '../../components/profileTechNav';
import axios from 'axios';


function Newjobs() {

  
const [details, getDetails] = useState([]);
const getData = async () => {
    try {
        const data = await axios.get("http://fixapi.chengegikonyo.com/api/technician/active");
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
        <div>
           <TechnicianSidebar/>
            <ProfileTechNav profile="Fundi" /> 
            <div className='tabs' style={{marginTop:"2%", marginLeft:"20%",display:"flex", gap:"5%"}}> 


            <Link style={{textDecoration:'none', color:"black",border:"1px solid #f8b609", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"#f8b609"}} to={"/Newjobs"}>New Jobs </Link>
            <Link style={{textDecoration:'none', color:"black",border:"1px solid #white", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"white"}} to={"/Scheduled"}>Scheduled Jobs </Link>
            <Link style={{textDecoration:'none', color:"black", border:"1px solid #white", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"white"}} to={"/Jobhistory"}>Job History </Link>
             
            </div>

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
        
      <a href='/Scheduled' className='btn btn-outline-warning rounded-pill text-black text-center  ms-5'>Approve job</a>
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

 <div className='para ms-3 fw-bold fs-6 'style={{textColour:"black"}}>
  <p>Immedietly contact the FYX Admin.</p>
 </div>


      <div class="footz  mb-2 ms-5">
      <button type="button" className="btn btn-outline-warning rounded-pill ms-5">Submit</button>
      </div>
    
    </div>
  </div>
</div>

{/* end second modal */}

            <div className='tables' style={{marginTop:"2%", marginLeft:"20%",width:"60%"}}>

<table className="table table-borderless">
  <thead>
    <tr style={{color:"gray"}}>
      <th>Order id</th>
      <th>Service</th>
      <th>Description</th>
      <th>Date</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
  {/* {details.map((item,index)=>( */}
                    
   {/* console.log('i',item), */}
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
          <button  style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"white"}} data-bs-toggle="modal" data-bs-target="#exampleModal" >More Details...</button>

         

    </td>
    </tr>

    {/* ) )} */}
  
  </tbody>
</table>

<BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                          padding:"5px", zIndex:"2",marginTop:"20%",marginRight:"-1.5%"}}/>
                                


          </div>



        </div>
     );
}

export default Newjobs;