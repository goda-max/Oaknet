import React from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillPlusCircle } from 'react-icons/ai';
import {AiTwotoneDelete } from 'react-icons/ai';
function AddLocation() {
     return ( 
          <div>
               <SidebarAdmin/>
             <ProfileNavAdmin/>

             <div class="col-9 offset-3 main ">
  <h2>Homepage Miniform</h2>
  <h6><strong>Dashboard/Content Management/</strong><strong class = "text-warning">AddLocation</strong></h6>
  
  <div id = "formaddservice" style={{marginLeft:"20%"}}>
    <form>
        <div>
          <label for = "servicedescription">Location</label><button style={{border:"hidden",marginLeft:"25%",width:"px"}} ><AiFillPlusCircle style={{color:"green",borderRadius:"hidden",width:"30px",height:"30px"}}/> </button><br/>
          <input type = "text" name = "location[]"/>
          <AiTwotoneDelete style={{color:"red" ,width:"30px",Height:"30px"}}/>
          <br/><br/>
          <p></p>
        </div>
        <br></br>
       
        <div className='wapan' style={{marginLeft:"3%"}}  >
  <a className="btn btn-outline-warning rounded-pill text-black text-center mb-5 mt-1 ">  Save Changes</a>
  </div>
    </form>
</div>
</div>
  

</div>
 
  
    
                                


        
      );
}

export default AddLocation;