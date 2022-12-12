import React, { useEffect, useState } from 'react';
import { BiMessageRounded } from "react-icons/bi";
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';



function TechRegistrations() {

  const navigate = useNavigate();

  const [serverError, setServerError] = useState("")
  const [loading, setLoading] = useState(false);
  const [successResponse,setSuccessResponse]=useState("");
  const [ details, setDetails] = useState ('');


const approve = (e) => {
  e.preventDefault();

  setLoading(true);  
axios.post(`api/admin/Super-Admin/technician/${details}/approve`) .then(res =>{
  setLoading(false);

  if(res.status === 200)
  {
    setSuccessResponse("you have been registered successfully.");
    setTimeout(() => {
      setSuccessResponse("")
    }, 2000);

      navigate('/techregistrations');

  }else{
      alert("Not approved");

      navigate('/techregistrations');
  }

}).catch(res =>{

                
  setLoading(false);
  setServerError("Failed to approve technician")
  setTimeout(()=>{
      setServerError("")
  },2000)

      
      });

  }

  
const reject = (d) => {
  d.preventDefault();

  setLoading(true);   
axios.post(`api/admin/Super-Admin/technician/${details}/reject`) .then(res =>{
  setLoading(false);  
  if(res.status === 200)
  {
  
    setSuccessResponse("Technician  rejected");
    setTimeout(() => {
      setSuccessResponse("")
    }, 2000);

      navigate('/techregistrations');

  }else{
      alert(" Rejection not approved");
      navigate('/techregistrations');
      
  }

}).catch(res =>{

                
  setLoading(false);
  setServerError("Failed to reject technician")
  setTimeout(()=>{
      setServerError("")
  },2000)

      
      });


}
  

  
const recomend = (d) => {
  d.preventDefault();

  setLoading(true); 
axios.post(`api/admin/Super-Admin/technician/${details}/recommend`) .then(res =>{
  setLoading(false); 

  if(res.status === 200)
  {
  
   setSuccessResponse("Technician successfully recommended");
    setTimeout(() => {
      setSuccessResponse("")
    }, 2000);

      navigate('/techregistrations');

  }else{
      alert(" Recommendation not approved");
      navigate('/techregistrations');
      
  }

}).catch(res =>{

                
  setLoading(false);
  setServerError("Failed to Recommend technician")
  setTimeout(()=>{
      setServerError("")
  },2000)

      
      });

}
  

  
    return ( 
        <div>
        <SidebarAdmin/>
             <ProfileNavAdmin/> 




             <div style={{marginLeft:"40%",marginTop:"0%",position:"fixed", zIndex:"2"}}>
                                {successResponse && (
                                     <div 
                                     style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#28a745",
                                     borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                     {successResponse}
                                    </div>
                                      
                                 )}
                                   {serverError && (
                                     <div 
                                    style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#ED4337",
                                    borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                    {serverError}
                                    </div>
                                      
                                 )}
             </div>

            <div className='tabs' style={{marginTop:"2%", marginLeft:"20%",display:"flex", gap:"5%"}}> 

            <div><h3>List of Registration Forms</h3></div>
            
            </div>
            <div className='d-flex flex-row ' style={{marginLeft:"20%"}}>Dashboard / Technician Managment/<h5 style={{color:"#fca311"}}>Registration</h5></div>
            <hr style={{width:"60%",marginLeft:"20%",border:"1px solid black"}} />
            <div className='tables' style={{marginTop:"2%", marginLeft:"20%",width:"60%"}}>

<table className="table table-borderless">
  <thead>
    <tr style={{color:"gray"}}>
      <th>Date</th>
      <th>Registration ID</th>
      

    </tr>
  </thead>
  <tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
    <tr>
      <td><input name='date' type="date" /></td>
      <td>
        <input onChange={(handleInput)=>{
        const val = handleInput.target.value;
        setDetails(val);
         }} name='reg_Id' type="text" />
         
         </td>

      <td>
          <button style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"transparent"}}>More Details...</button>
      </td>
      <div >
{loading&&(

<td><button onClick={approve} style={{borderRadius:"15px",paddingLeft:"20px", paddingRight:"20px", border:"0px solid", background:"orange"}}>
  <div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                <div style={{display:"flex", flexDirection:"row"}}>
                <Oval  height="20"
                width="20"
                color='white'
                ariaLabel='loading'/>
            <span style={{fontSize:"20px"}}>Approving...</span>
        </div>
    </div>
</button></td>
)}
{!loading && (
    

    <td><button onClick={approve} style={{borderRadius:"15px",paddingLeft:"20px", paddingRight:"20px", border:"0px solid", background:"orange"}}>Add Technician</button></td>
)}
</div> 

<div >
{loading&&(

<td><button onClick={reject} style={{borderRadius:"15px",paddingLeft:"20px", paddingRight:"20px", border:"0px solid", background:"transparent",boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)"}}>
  <div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                <div style={{display:"flex", flexDirection:"row"}}>
                <Oval  height="20"
                width="20"
                color='white'
                ariaLabel='loading'/>
            <span style={{fontSize:"20px"}}>Rejecting...</span>
        </div>
    </div>
</button></td>
)}
{!loading && (
    

    <td><button onClick={reject} style={{borderRadius:"15px",paddingLeft:"20px", paddingRight:"20px", border:"0px solid", background:"transparent",boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)"}}>Reject Technician</button></td>
)}
</div> 

  </tr>

    <tr>
      <td></td>
      <td></td>

      <td></td>
    </tr>
  </tbody>

  <tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
    <tr>
      <td><input name='date' type="date" /></td>
      <td>
        <input onChange={(handleInput)=>{
        const val = handleInput.target.value;
        setDetails(val);
         }} name='reg_Id' type="text" />
         
         </td>

      <td>
          <button style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"transparent"}}>More Details...</button>
      </td>
      <div >

{loading&&(

<td><button onClick={recomend} style={{borderRadius:"15px",paddingLeft:"20px", paddingRight:"20px", border:"0px solid", background:"transparent",boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)"}}>
  <div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                <div style={{display:"flex", flexDirection:"row"}}>
                <Oval  height="20"
                width="20"
                color='white'
                ariaLabel='loading'/>
            <span style={{fontSize:"20px"}}>Recommending...</span>
        </div>
    </div>
</button></td>
)}
{!loading && (
    

    <td><button onClick={recomend} style={{borderRadius:"15px",paddingLeft:"20px", paddingRight:"20px", border:"0px solid", background:"transparent",boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)"}}>Recommend Technician</button></td>
)}
</div> 


    </tr>

    <tr>
      <td></td>
      <td></td>

      <td></td>
    </tr>
  </tbody>
</table>


          </div>



        </div>
     );
}

export default TechRegistrations;