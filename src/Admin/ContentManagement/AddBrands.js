import React from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillPlusCircle } from 'react-icons/ai';
import {AiTwotoneDelete } from 'react-icons/ai';
function AddBrands() {
     return ( 
          <div>
               <SidebarAdmin/>
             <ProfileNavAdmin/>

             <div className="col-9 offset-3 main">
  <h2>Homepage Miniform</h2>
  <h6><strong>Dashboard/Content Management/</strong><strong className = "text-warning">AddBrands</strong></h6>
  <hr id = "contentdivider"></hr>
  <container>
  <div className = "row  " >
     <div className = "col "style={{marginLeft:"20%"}}>
        <p>Brands <AiFillPlusCircle style={{color:"green"}}/></p>

     </div>
     <div className = "col">
       <p>Services<AiFillPlusCircle style={{color:"green"}}/></p>
    </div>
    <div className = "col">
       <p>Description</p>
    </div>
   </div>
   <form id="addbrands" style={{marginLeft:"20%"}}>
       <div className="row mb-3">
           <div id="brands"class="col ">
               <input type = "text" name="brand" placeholder="Brand 1" />
               <AiTwotoneDelete style={{color:"red" ,width:"30px",Height:"30px"}}/><br/><br/>
           </div>
           <div  className="col">
               <select>
                   <option selected>Repair</option>
                   <option>Installation</option>
                   <option>Maintenance</option>
               </select>
               <br/>
               <select>
                <option selected>Repair</option>
                <option>Installation</option>
                <option>Maintenance</option>
            </select>
            <br/>
            <select>
             <option selected>Repair</option>
             <option>Installation</option>
             <option>Maintenance</option>
           </select>
         </div>
         
         <div class="branddescriptions" className="col" >
            <select>
                <option selected>Air Conditioner, Washing Machine, Cooler, ...</option>
                <option>Air Conditioner, Washing Machine, Cooler, ...</option>
                <option>Air Conditioner, Washing Machine, Cooler, ...</option>
            </select>
            <br/>
            <select>
             <option selected>Air Conditioner, Washing Machine, Cooler, ...</option>
             <option>Air Conditioner, Washing Machine, Cooler, ...</option>
             <option>Air Conditioner, Washing Machine, Cooler, ...</option>
         </select>
         <br/>
         <select>
          <option selected>Air Conditioner, Washing Machine, Cooler, ...</option>
          <option>Air Conditioner, Washing Machine, Cooler, ...</option>
          <option>Air Conditioner, Washing Machine, Cooler, ...</option>
        </select>
        </div>
       </div>
       <div className="row mb-2">
        <div id="brands"class="col">
            <input type = "text" name="brand" placeholder="Brand 2" />
            <AiTwotoneDelete style={{color:"red" ,width:"30px",Height:"30px"}}/><br/><br/>
        </div>
        <div id="brandservices" className="col">
            <select>
                <option selected>Repair</option>
                <option>Installation</option>
                <option>Maintenance</option>
            </select>
            <br/>
            <select>
             <option selected>Repair</option>
             <option>Installation</option>
             <option>Maintenance</option>
         </select>
         <br/>
         <select>
          <option selected>Repair</option>
          <option>Installation</option>
          <option>Maintenance</option>
        </select>
      </div>
      <div id="branddescriptions " className="col ">
         <select>
             <option selected>Air Conditioner, Washing Machine, Cooler, ...</option>
             <option>Air Conditioner, Washing Machine, Cooler, ...</option>
             <option>Air Conditioner, Washing Machine, Cooler, ...</option>
         </select>
         <br/>
         <select>
          <option selected>Air Conditioner, Washing Machine, Cooler, ...</option>
          <option>Air Conditioner, Washing Machine, Cooler, ...</option>
          <option>Air Conditioner, Washing Machine, Cooler, ...</option>
      </select>
      <br/>
      <select>
       <option selected>Air Conditioner, Washing Machine, Cooler, ...</option>
       <option>Air Conditioner, Washing Machine, Cooler, ...</option>
       <option>Air Conditioner, Washing Machine, Cooler, ...</option>
     </select>
     </div>
    </div>
    <div className='wapanz' style={{marginLeft:"35%",paddingTop:"10%"}}  >
  <a className="btn btn-outline-warning rounded-pill text-black text-center mb-5 mt-1 ">  Save Changes</a>
  </div>
   </form>
   </container>
   
</div>

</div>
  


 
  
    
                                


        
      );
}

export default AddBrands;