import React from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiPencil } from 'react-icons/ti';
import {AiFillPlusCircle } from 'react-icons/ai';

function MiniForm() {
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
   <div className = "row">
     <div className = "col">
        <h6>Categories</h6>
     </div>
     <div className = "col">
       <h6></h6>
    </div>
    <div className = "col " style={{marginLeft:"35%"}}>
       <h6>Description</h6>
    </div>
    <div className = "col">
      <th></th>
    </div>
   </div>
   <div className = "row serviceslist ">
    <div className = "col  " >
       
       < p style={{marginLeft:"25%"}}>Services  <a href="AddService"> <AiFillPlusCircle style={{color:"green"}}/></a></p>
    </div>
    <div className = "col">
      <ul>
        <li>Repair</li>
      </ul>
   </div>
   <div className = "col">
    <ul>
      <li>Cookers</li>
        <li>Tvs</li>
        <li>Washing Machine</li>
        <li>Fridge</li>
        <li>Microwave</li>
        <li>Laptops</li>
        <li>Phones</li>
    </ul>
   </div>
  
  
  </div>
  
  <div className='wapange' style={{marginLeft:"80%"}}  >
  <a href = '/editdescriptionlist'className="btn btn-outline-warning rounded-pill text-black text-center mb-5 mt-1 ">   <TiPencil/> Edit</a>
  </div>
   <hr className = "service-divider"></hr>
  <div className = "row serviceslist">
    <div className = "col">
       <p></p>
    </div>
    <div className = "col">
      <ul>
        <li>Installation</li>
      </ul>
   </div>
   <div className = "col">
    <ul>
      <li>Cookers</li>
        <li>Tvs</li>
        <li>Washing Machine</li>
        <li>Fridge</li>
        <li>Microwave</li>
        <li>Laptops</li>
        <li>Phones</li>
    </ul>
   </div>
  
  </div>
  <div className='wazo' style={{marginLeft:"80%"}}  >
  <a href = '/editdescriptionlist'className="btn btn-outline-warning rounded-pill text-black text-center mb-5 mt-1 ">   <TiPencil/> Edit</a>
  </div>

  <hr className = "service-divider"></hr>
  <div className = "row serviceslist">
    <div className = "col">
       <p></p>
    </div>
    <div className = "col ml-0">
      <ul>
        <li>Maintainance</li>
      </ul>
   </div>
   <div className = "col">
    <ul>
      <li>Cookers</li>
        <li>Tvs</li>
        <li>Washing Machine</li>
        <li>Fridge</li>
        <li>Microwave</li>
        <li>Laptops</li>
        <li>Phones</li>
    </ul>
   </div>
   
  
  </div>
  <div className='walzh' style={{marginLeft:"80%"}}  >
  <a href = '/editdescriptionlist'className="btn btn-outline-warning rounded-pill text-black text-center mb-5 mt-1 ">   <TiPencil/> Edit</a>
  </div>
  <hr className = "service-divider"></hr>
  <div className = "row serviceslist">
     <div className="col"></div>
     <div className="col">Others...Specify</div>
     <div className="col"></div>
     <div className="col"></div>
  </div>
  <hr className = "service-divider"></hr>
  <div className = "row serviceslist">
    <div className = "col">
       <p  style={{marginLeft:"25%"}}>Brands <a href="AddBrands"><AiFillPlusCircle style={{color:"green"}}/></a></p>
    </div>
   <div className = "col">
    <ul>
      <li>Brand 1</li>
        <li>Brand 2</li>
        <li>Brand 3</li>
        <li>Brand 4</li>
        <li>Brand 5</li>
    </ul>
   </div>
  
  </div>
  <div className='walzi' style={{marginLeft:"80%"}}  >
  <a href = '/editdescriptionlist'className="btn btn-outline-warning rounded-pill text-black text-center mb-5 mt-1 ">   <TiPencil/> Edit</a>
  </div>
  <hr className = "service-divider"></hr>
  <div className = "row serviceslist">
    <div className = "col">
       <p style={{marginLeft:"25%"}}>Location<a href="AddLocation"><AiFillPlusCircle style={{color:"green"}}/></a></p>
    </div>
   <div className = "col">
    <ul>
      <li>Location 1</li>
        <li>Location 2</li>
        <li>Location 3</li>
        <li>Location 4</li>
        <li>Location 5</li>
    </ul>
   </div>
  
  </div>
  <div className='walzii' style={{marginLeft:"80%"}}  >
  <a href = '/editdescriptionlist'className="btn btn-outline-warning rounded-pill text-black text-center mb-5 mt-1 ">   <TiPencil/> Edit</a>
  </div>
</div>
   {/* <div className = "row">
     <div className = "col">
        <h6>Categories</h6>
     </div>
     <div className = "col">
       <h6></h6>
    </div>
    <div className = "col">
       <h6>Description</h6>
    </div>
    <div className = "col">
      <th></th>
    </div>
   </div>
  
   <div className = "row serviceslist">
    <div className = "col">
       <p>Services <a href="addservice.html"><img src="assets/icons/Icon ionic-md-add-circle.png"/></a></p>
    </div>
    <div className = "col">
      <ul>
        <li>Repair</li>
      </ul>
   </div>
   <div className = "col">
    <ul>
      <li>Cookers</li>
        <li>Tvs</li>
        <li>Washing Machine</li>
        <li>Fridge</li>
        <li>Microwave</li>
        <li>Laptops</li>
        <li>Phones</li>
    </ul>
   </div> */}
  

</div>
  
  
    
                                


        
      );
}

export default MiniForm;