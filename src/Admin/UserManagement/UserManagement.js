import React from 'react';
import { BsDashCircle } from "react-icons/bs";
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';

function UserManagement() {
     return ( 
          <div>
          <SidebarAdmin/>
             <ProfileNavAdmin/>  
               <div className='tabs' style={{marginTop:"5%", marginLeft:"20%",display:"flex", gap:"5%"}}> 

               <div><h3><b>User Management</b></h3></div>

               </div>
               <hr style={{width:"60%",marginLeft:"20%",border:"1px solid black"}} />

               <div style={{marginLeft:"35%"}}>
                    <h3>New User</h3>
                    Email-address
                    
               </div>

               <input  style={{marginLeft:"35%",width:"300px", border:"0px solid",borderRadius:"10px", background:"#e8e9ed" }} type="text" placeholder='adminfunda@gmail.com'/>
               <div style={{marginLeft:"35%"}}> 
                         <p style={{marginTop:"30px"}} > <b>Roles</b> </p>
                    <div style={{display:"flex", gap:"15%", marginBottom:"40px"}}>   
                         <div>
                         <input type="checkbox" />
                          Admin 
                         </div>
                         <div>
                         <input type="checkbox" />
                         Finance
                         </div>
                         <div>
                         <input type="checkbox" />
                         Sales
                         </div>
                     </div>  
               </div>
               <div style={{marginLeft:"35%"}}>
                    User Rights <br />
                    Order Management <br />
                    Technician management <br />
                    Control Management
               </div>

               <div style={{marginTop:"5%",marginBottom:"3%"}}>
                    <button style={{marginLeft:"45%",marginRight:"7%",borderRadius:"14px",border:"1px solid orange",background:"white"}}>Disable User</button>
                    <button style={{borderRadius:"14px",border:"1px solid orange",background:"white"}}> <BsDashCircle style={{marginRight:"10px", color:"red"}}/>Delete</button>
               </div>
               <div>
               <button style={{marginLeft:"50%",borderRadius:"14px",border:"1px solid orange",background:"orange"}}>Save Changes</button>
               </div>
          </div>
      );
}

export default UserManagement;