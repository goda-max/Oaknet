import React from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiTwotoneDelete } from 'react-icons/ai';
import {AiFillPlusCircle } from 'react-icons/ai';
import { useState } from "react";
function EditDescriptionlist() {
const [serviceList, setServiceList] = useState([{ service: "" }]);
 
const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };


     return ( 
          <div>
               <SidebarAdmin/>
             <ProfileNavAdmin/>

             <div class="col-9 offset-3 main ">
             <div className='wazih'style={{marginLeft:"7.1%"}}>
  <h2>Homepage Miniform</h2>
  <h6><strong>Dashboard/Content Management/</strong><strong class = "text-warning">Miniform</strong></h6>
  <hr id = "contentdivider"></hr>
</div>
  <container>
  <div className='mahu'style={{marginLeft:"40%"}}>
  <form>
       
        <div>
          <label for = "servicename">Service</label><br/>
          <input type = "text" name = "servicename" placeholder = "Repair"/><br></br>
        </div>
       
       
        
 
         <div> 
           <label for = "servicedescription"style={{marginTop:"2%"}}>Description</label>
              
            {serviceList.map((singleService, index) => (
           <div key={index}  className='wali'>
              <input type = "text "style={{marginTop:"2%"}} name = "servicedescription[]" placeholder = "Tvs"/>
              
              
              
              {serviceList.length - 1 === index && serviceList.length < 4 && (
                  <button style={{border:"hidden",marginLeft:"10%"}}  onClick={handleServiceAdd} ><AiFillPlusCircle style={{color:"green",borderRadius:"hidden",width:"30px",height:"30px"}}/> </button>
                  )}  
           <div>
             
            <button style={{border:"hidden",marginLeft:"10%"}}  onClick={() => handleServiceRemove(index)} ><AiTwotoneDelete style={{color:"red",borderRadius:"hidden",width:"30px",height:"30px"}}/> </button>
          </div>
         
 
         
                  </div>  
                          
              
            
              
      
    
   
        
       
       
         ))}
       
       
      



       
        
      
        <div className='wapanhz' style={{marginLeft:"3%",paddingTop:"2%"}}  >
  <a className="btn btn-outline-warning rounded-pill text-black text-center mb-5 mt-1 "> Save Changes</a>
  </div>
</div>
        <br></br>

    </form>
    </div>
    </container>
    
    </div>
</div>

  );
}

export default EditDescriptionlist;