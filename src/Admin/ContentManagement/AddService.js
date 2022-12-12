import React from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillPlusCircle } from 'react-icons/ai';

function AddService() {
     return ( 
          <div>
               <SidebarAdmin/>
             <ProfileNavAdmin/>

             <div class="col-9 offset-3 main me-2">
             <div className='wazih'style={{marginLeft:"7.1%"}}>
  <h2>Homepage Miniform</h2>
  <h6><strong>Dashboard/Content Management/</strong><strong class = "text-warning">Miniform</strong></h6>
  <hr id = "contentdivider"></hr>
</div>
   <div className='loct' style={{marginLeft:"40%"}}>
  <div className='formaddservice'style={{marginLeft:"20%"}}>
    <form>
        <div >
          <label for = "servicename">Service</label><br></br>
          <input type = "text" name = "servicename"/><br/><br/>
        </div>
        <div className='btz'>
          <label for = "servicedescription">Description</label><button style={{border:"hidden",marginLeft:"25%",width:"px"}} ><AiFillPlusCircle style={{color:"green",borderRadius:"hidden",width:"30px",height:"30px"}}/> </button><br/>
          <input type = "text" name = "servicedescription[]"/><br></br>
          <p></p>
        </div>
        <br></br>
        
        <div className='wapangz' style={{marginLeft:"3%"}}  >
  <a className="btn btn-outline-warning rounded-pill text-black text-center mb-5 mt-1 ">  Save Changes</a>
  </div>
    </form>
 </div>   
</div>
</div>
</div>


 
  
    
                                


        
      );
}

export default AddService;