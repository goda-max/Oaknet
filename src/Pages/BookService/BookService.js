import React, { useEffect } from 'react';
import { BiMessageRounded } from "react-icons/bi";
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { AiFillStar } from "react-icons/ai";

function BookService() {


    const navigate = useNavigate();

    const [serverError, setServerError] = useState("")
    const [loading, setLoading] = useState(false);
    const [successResponse,setSuccessResponse]=useState("");
    const [errors, seterrors] = useState({});
    const [isSub, setsub] = useState(false);
    const [booking, setbooking] = useState({
        first_name:"",
        surname:"",
        phone:"",
        mpesa_number:"",

        location_id:"",
        area:"",
        street_building:"",
        location_extra_details:"",

        service_id:"",
        brand_id:"",
        model_number:"",
        service_extra_details:"",
        category_id:"",
       
       
        date_available:"",
        time_available:"",
        
    }); 
    
    const handleIput = (e) => {
        e.persist();
        setbooking({...booking, [e.target.name]: e.target.value})
    }
    
    const bookingSubmit = (e) => {
    e.preventDefault();
    seterrors(validate(booking));
    setsub(true);
    
    
    const details = {
        first_name: booking.first_name,
        surname: booking.surname,
        phone: booking.phone,
        mpesa_number: booking.mpesa_number,
      
        location_id: booking.location_id,
        area: booking.area,
        street_building: booking.street_building,
        location_extra_details: booking.location_extra_details,

        service_id: booking.service_id,
        brand_id: booking.brand_id,
        model_number: booking.model_number,
        service_extra_details: booking.service_extra_details,
        category_id: booking.category_id,

        date_available: booking.date_available,
        time_available: booking.time_available,
        request_callback: 0,

    }

    console.log('order-details', details);
    //    console.log(errors); 
    
    setLoading(true);
    axios.post(`/api/customer/orders`, details ).then(res =>{
        console.log('res', res)
        setLoading(false);
        
        if(res.status === 201)
        {
            setSuccessResponse("you have been booked successfully.");
            setTimeout(() => {
              setSuccessResponse("")
            }, 2000);
    
            // alert("created successfully");
            
                navigate('/order');
    
         }else
        {
    
            alert("Oops you have entered invalid credentials");
    
        }
    
    }).catch(res =>{

        setLoading(false);
        setServerError("Kindly fill the required dtails correctly")
        setTimeout(()=>{
          setServerError("")
        },2000)
      
      });
    
    }

        useEffect(()=>{
        // console.log(errors);
          if(Object.keys(errors).length === 0 && isSub){
            // console.log(reg);
          }
        },[errors])
        
        const validate = ( x  ) =>{ 
        
          const err = {};
          const regrex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;

          if(!x.first_name){
            err.first_name =" First name required"
          }
          
          if(!x.first_name){
            err.first_name =" First name required"
          }
          if(!x.surname){
            err.surname =" surname required"
          }
          if(!x.phone){
            err.phone =" Phone number required"
          }
          if(!x.mpesa_number){
            err.mpesa_number =" Mpesa number required"
          }
          
          if(!x.location_id){
            err.location_id =" Location ID required"
          }
          if(!x.area){
            err.area =" Area field is required"
          }
          if(!x.street_building){
            err.street_building =" Street building required"
          }
          if(!x.location_extra_details){
            err.location_extra_details =" Location extra details required"
          }
          if(!x.service_id){
            err.service_id =" Service ID required"
          }
          if(!x.brand_id){
            err.brand_id =" Brand ID required"
          }
          if(!x.model_number){
            err.model_number =" Model number required"
          }
          if(!x.service_extra_details){
            err.service_extra_details =" Service extra details required"
          }
          if(!x.category_id){
            err.category_id =" Category ID required"
          }
          if(!x.date_available){
            err.date_available =" Date available required"
          }
          if(!x.time_available){
            err.time_available =" Time available required";
          }
        
          return err; 
        }
        
    
        return ( 


            <div>
                            <div style={{marginLeft:"40%",marginTop:"6%",position:"fixed", zIndex:"2"}}>
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
            <div>

             <Sidebar/>
            <ProfileNav profile="Nicole" />
        
                        
                    <div className="page">
                        <div className="conte" style={{marginLeft:"20%",marginTop:"5%",background:"white", width:"60%", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)" }}>
                  
                            <h4 style={{marginLeft:"20px", paddingTop:"10px", marginBottom:"0%"}}>Service Booking Details</h4><hr style={{border:"2px solid black", marginBottom:"20px"}} />
                            
                                         
   
                                   
                            <form  style={{ marginLeft:"2%",marginTop:"15px"}} action="">
                            <span style={{float:"left",paddingRight:"90px"}}><b>Personal details</b></span>
                                        <div style={{display:"flex", gap:"12%", marginBottom:"5px",overflow:"wrap" }}>
                                               
                                        
                                               <div>
                                               
                                                < AiFillStar style={{color:"orangered",fontSize:"10px"}}/> <input style={{background:"#e8e9ed",border:"0px solid gray",paddingLeft:"5px",paddingLeft:"5px",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px",boxShadow:"none"}} onChange={handleIput} value={booking.first_name}  name="first_name" type="text" placeholder="First name" />
                                                   
                                               <p style={{color:"red"}}>{errors.first_name}</p>    
                                               </div>
                                               
                                               <div>
                                                  
                                               < AiFillStar style={{color:"orangered",fontSize:"10px"}}/> <input style={{background:"#e8e9ed",border:"0px solid gray",paddingLeft:"5px",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} value={booking.surname}   name="surname" type="text" placeholder="Surname" />
                                                    <p style={{color:"red"}}>{errors.surname}</p>
                                               </div>
                                               <div>
                                                  
                                               < AiFillStar style={{color:"orangered",fontSize:"10px"}}/> <input style={{background:"#e8e9ed",border:"0px solid gray",paddingLeft:"5px",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} value={booking.phone}  name="phone" type="text" placeholder="Phone Number" />
                                                   <p style={{color:"red"}}>{errors.phone}</p>
                                              </div>
                                               
                                    </div>

                                    <div style={{display:"flex", marginBottom:"5px",overflow:"wrap",marginLeft:"16.5%" }}>
                                            
                                            <div style={{marginLeft:"40px"}}>
                                            
                                                <input style={{background:"#e8e9ed",border:"0px solid gray",paddingLeft:"5px",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px",width:"265%"}} onChange={handleIput} value={booking.mpesa_number}  label="Phone number" name="mpesa_number" type="text" placeholder="Enter your M-pesa number." />
                                                
                                            <p style={{color:"red"}}>{errors.mpesa_number}</p>    
                                            </div> 
                                                                        
                                     </div>

                                     <div style={{display:"flex", gap:"10%", marginBottom:"5px",overflow:"wrap" }}>
                                              
                                     <span style={{paddingRight:"20px"}}><b>Location</b></span> 
                                              <div>
                                              
                                              < AiFillStar style={{color:"orangered",fontSize:"10px"}}/> <select onChange={handleIput} value={booking.location_id}   name='location_id'  style={{background:"#e8e9ed",border:"0px solid white", fontSize:"16px",paddingLeft:"5px",paddingTop:"10px",paddingBottom:"5px",borderRadius:"5px", width:"200px" }} id=" " >
                                            <option value="selected">Location</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Tanzania">Tanzania</option>
                                            <option value="Uganda">Uganda</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Somalia">Somalia</option>
                                            <option value="Burundi">Burundi</option>
                                         </select> <br/>

                                         <p style={{color:"red"}}>{errors.location_id}</p>    
                                          </div>
                                              
                                              <div>
                                                 
                                              < AiFillStar style={{color:"orangered",fontSize:"10px"}}/> <input style={{background:"#e8e9ed",border:"0px solid gray",paddingLeft:"5px",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} value={booking.area}   name="area" type="text" placeholder="Area e.g Kileleshwa" />
                                                   <p style={{color:"red"}}>{errors.area}</p>
                                              </div>
                                              <div>
                                                 
                                              < AiFillStar style={{color:"orangered",fontSize:"10px"}}/> <input style={{background:"#e8e9ed",border:"0px solid gray",paddingLeft:"5px",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} value={booking.street_building}  name="street_building" type="text" placeholder="Street/building"/>
                                                  <p style={{color:"red"}}>{errors.street_building}</p>
                                             </div>
                                              
                                     </div>

                                     
                                     <div style={{display:"flex", marginBottom:"5px",overflow:"wrap",marginLeft:"19.5%" }}>
             
                                              <div>
                                             
                                                  <input style={{background:"#e8e9ed",border:"0px solid gray",paddingLeft:"5px",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px",width:"265%"}} onChange={handleIput} value={booking.location_extra_details}  name="location_extra_details" type="text" placeholder="Other location details" />
                                                  
                                              <p style={{color:"red"}}>{errors.location_extra_details}</p>    
                                              </div> 

                                     </div>
                                     <span style={{float:"left",paddingRight:"40px"}}><b>Problem  description</b></span>
                                     <div style={{display:"flex", gap:"11.2%", marginBottom:"20px",overflow:"wrap" }}>
                                    
                                              <div style={{}}>
                                              
                                              < AiFillStar style={{color:"orangered",fontSize:"10px"}}/> <select onChange={handleIput} value={booking.service_id}   name='service_id'  style={{background:"#e8e9ed",border:"0px solid white",fontSize:"16px",paddingLeft:"5px",paddingTop:"10px",paddingBottom:"5px",borderRadius:"5px", width:"200px" }} id=" " >
                                                    <option value="selected"> service</option>
                                                    <option value="Kenya">Repair</option>
                                                    <option value="Tanzania">Maintainance</option>
                                                    <option value="Uganda">Installation</option>
                                            
                                                    </select>
                                              <p style={{color:"red"}}>{errors.service_id}</p>    
                                              </div>
                                              
                                              <div>
                                                 
                                              < AiFillStar style={{color:"orangered",fontSize:"10px"}}/><select onChange={handleIput} value={booking.brand_id}  name='brand_id'  style={{background:"#e8e9ed",border:"0px solid white",fontSize:"16px",paddingLeft:"5px",paddingTop:"10px",paddingBottom:"5px",borderRadius:"5px", width:"200px" }} id=" " >
                                                    <option value="selected">Description</option>
                                                    <option value="Kenya">Tv</option>
                                                    <option value="Tanzania">Microwave</option>
                                                    <option value="Uganda">Fridge</option>
                                                    <option value="Rwanda">Washing Machine</option>
                                                
                                                    </select>
                                                    <p style={{color:"red"}}>{errors.brand_id}</p>
                                              </div>
                                              <div>
                                                 
                                              < AiFillStar style={{color:"orangered",fontSize:"10px"}}/><select onChange={handleIput} value={booking.model_number}   name='model_number'  style={{background:"#e8e9ed",border:"0px solid white",fontSize:"16px",paddingLeft:"5px",paddingTop:"10px",paddingBottom:"5px",borderRadius:"5px", width:"200px" }} id=" " >
                                                    <option value="selected">Model</option>
                                                    <option value="Kenya">Sumsung-45-G3</option>
                                                    <option value="Tanzania">LG-345</option>
                                                    <option value="Uganda">Sayona-23-gray</option>
                                                    <option value="Rwanda">Sony12-NXT</option>
                                                    <option value="Ethiopia">Peak-Tech3</option>
                                                
                                                    </select>
                                                    <p style={{color:"red"}}>{errors.model_number}</p>
                                             </div>
                                              
                                      </div>
                                     <div style={{display:"flex", marginBottom:"5px",overflow:"wrap",marginLeft:"19.5%" }}>
             
                                              <div>
                                             
                                                  <input style={{background:"#e8e9ed",border:"0px solid gray",paddingLeft:"5px",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px",width:"265%"}} onChange={handleIput} value={booking.category_id}  name="category_id" type="text" placeholder="Model decription" />
                                                  
                                                   <p style={{color:"red"}}>{errors.category_id}</p>    
                                              </div> 

                                     </div>
                                     <div style={{display:"flex", gap:"10%", marginBottom:"5px",overflow:"wrap" }}>
             
                                              <div style={{marginLeft:"19.5%"}}>
                                              < AiFillStar style={{color:"orangered",fontSize:"10px"}}/> <b>Exact problem</b>
                                                 <textarea style={{background:"#e8e9ed", width:"93%"}} onChange={handleIput} value={booking.service_extra_details} className="form-control"  cols="114" rows="2" name="service_extra_details"></textarea>
                                            <p style={{color:"red"}}>{errors.service_extra_details}</p>    
                                              </div> 

                                     </div>
                                     <span style={{paddingRight:"60px",float:"left"}}><b>Date and time to <br />Receive technician </b></span>
                                     <div style={{display:"flex", gap:"10%", marginBottom:"20px",overflow:"wrap" }}>
               
               <div>

               
               < AiFillStar style={{color:"orangered",fontSize:"10px"}}/> <input style={{background:"#e8e9ed",border:"0px solid gray",paddingLeft:"5px",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px",width:"200px"}} onChange={handleIput} value={booking.date_available}  name="date_available" type="date" placeholder="Select prefered date" />
                   
               <p style={{color:"red"}}>{errors.date_available}</p>    
               </div>
               
               <div>
                 
               < AiFillStar style={{color:"orangered",fontSize:"10px"}}/> <input style={{background:"#e8e9ed",border:"0px solid gray",paddingLeft:"5px",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px",width:"200px"}} onChange={handleIput} value={booking.time_available}  name="time_available" type="time" placeholder="Select prefered time" />
                    <p style={{color:"red"}}>{errors.time_available}</p>
               </div>

               
       </div>

                                           
                                           <BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                          padding:"5px", zIndex:"2",marginTop:"-45px",marginRight:"-1.5%"}}/>
                            </form>
                                        
                        </div>
                        <div >
{loading&&(

<button onClick={bookingSubmit} style={{background:"#f8b609", width:"200px", paddingTop:"3px", paddingBottom:"3px",borderRadius:"20px",
border:"1px solid white",marginLeft:"45%", color:"white",fontSize:"22px"}}>
    
               <div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                <div style={{display:"flex", flexDirection:"row"}}>
                <Oval  height="20"
                  width="20"
                  color='white'
                  ariaLabel='loading'/>
            <span style={{fontSize:"20px"}}>please wait</span>
        </div>
    </div>
</button>
)}
{!loading && (
    
    <button onClick={bookingSubmit} style={{background:"#f8b609", width:"200px", paddingTop:"3px", paddingBottom:"3px",borderRadius:"20px",
    border:"1px solid white",marginLeft:"45%", color:"white",fontSize:"22px"}}>Book technician</button>
)}
</div>               
</div>
            </div>
         </div>
         );
}

export default BookService;

