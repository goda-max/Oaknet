import React from 'react';
import {Link} from "react-router-dom";
import { BiMessageRounded } from "react-icons/bi";
import TechnicianSidebar from '../../components/technicianSidebar';
import ProfileTechNav from '../../components/profileTechNav';


function Jobhistory() {
    return ( 
        <div>
            <TechnicianSidebar/>
            <ProfileTechNav profile="Fundi" />
            <div className='tabs' style={{marginTop:"2%", marginLeft:"20%",display:"flex", gap:"5%"}}> 


            <Link style={{textDecoration:'none', color:"black",border:"1px solid white ", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"white"}} to={"/Newjobs"}>New Jobs </Link>
            <Link style={{textDecoration:'none', color:"black",border:"1px solid white ", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"white"}} to={"/Scheduled"}>Scheduled Jobs </Link>
            <Link style={{textDecoration:'none', color:"black", border:"1px solid #f8b609 ", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"#f8b609"}} to={"/Jobhistory"}>Job History </Link>
             
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
     </div>
     </div>
     
     
     
     
      </div> 






            <div className='tables' style={{marginTop:"2%", marginLeft:"20%",width:"60%"}}>

<table class="table table-borderless">
  <thead>
    <tr style={{color:"gray"}}>
      <th>Order No</th>
      <th>Service</th>
      <th>Description</th>
      <th>Date</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
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
  </tbody>
</table>

<BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                          padding:"5px", zIndex:"2",marginTop:"20%",marginRight:"-1.5%"}}/>
          

          </div>

        </div>
     );
}

export default Jobhistory;