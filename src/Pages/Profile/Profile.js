import React, { useEffect } from 'react';
import { FaCamera } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { useState } from "react";
import "./Profile.css";
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Oval } from 'react-loader-spinner';


function Profile() {
  let user = JSON.parse (localStorage.getItem('auth_name'));
  const [first_name, setFirst_name] = useState("");
  const [email, setEmail] = useState("");

  








    const navigate = useNavigate();

    const [detail, getDetails] = useState([]);
    const [serverError, setServerError] = useState("")
    const [loading, setLoading] = useState(false);
    const [successResponse,setSuccessResponse]=useState("");
    const [errors, seterrors] = useState({});
    const [isSub, setsub] = useState(false);
    const [reg, setregInput] = useState({
        first_name:'',
        surname:'',
       
        phone:'',
        address:'',
        email:'',
       
        password:'',
        password_confirmation:'',
        
    }); 
    
    const handleIput = (e) => {
        e.persist();
        setregInput({...reg, [e.target.name]: e.target.value})
    }
    
    const pageSubmit = (e) => {
    e.preventDefault();
    seterrors(validate(reg));
    setsub(true);
    
    const details = {
        first_name: reg.first_name,
        surname: reg.surname,
        phone: reg.phone,
        email: reg.email,
        email: detail.email,
        address: reg.address,
        password: reg.password,
        password_confirmation: reg.password_confirmation,
    }
    //    console.log(errors); 
    
  

    
    setLoading(true);
    axios.put(`/api/customers/1`, details ).then(res =>{
    // prefilled form
   
    setEmail(res[0].reg.email) 
     
     
      setLoading(false);
        
        if(res.status === 200)
        {
    
    
          setSuccessResponse("you have been registered successfully.");
          setTimeout(() => {
            setSuccessResponse("")
          }, 2000);
            
              navigate('/home');
    
    
         }else
        {
    
            alert("Oops you have entered invalid credentials");
    
        }
    
    }).catch((res)=>{
      console.log("pro", res);
    })
  //   .catch(res =>{

     
  // setLoading(false);
  // setServerError("Invalid credentials.")
  // setTimeout(()=>{
  //   setServerError("")
  // },2000)

    
  //   });
    
    }
    const getData = async () => {
      try {
          const data = await axios.get("/api/admin/Super-Admin/customers");
         
          getDetails(data.data.data);
  
      } catch (e) {
          console.log("no execution");
         
      }
  };
  useEffect(()=>{
    getData();
}, []);
console.log('dt', detail);
        
    
        const validate = ( x  ) =>{ 
        
          const err = {};
          const regrex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;

          if(!x.first_name){
            err.first_name =" First name field is required"
          }
          if(!x.surname){
            err.surname =" surname field is required"
          }
          if(!x.phone){
            err.phone =" Phone field is required"
          }
          if(!x.address){
            err.address =" Address field is required"
          }
          if(!x.password_confirmation){
            err.password_confirmation =" Confirm password required"
          }
          if(!x.email){
            err.email =" Email is required"
          }else if( !regrex.test(x.email) )
          {
            err.email =" Not a valid email" 
          }
          if(!x.password){
            err.password =" password is required";
          }else if(x.password.length < 4 )
          {
            err.password =" Must be more than 4 characters"
          }
        
          return err; 
        }

  
        return ( 
            <div className=''>


            <Sidebar/>
           
            <ProfileNav profile="Nicole" />

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
                                    style={{color:"white",fontSize:"18px",width:"120%",right:"0", background:"#ED4337",
                                    borderRadius: "30px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"10%",paddingRight:"10%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                    {serverError}
                                    </div>
                                      
                                 )}
             </div>
                    <div className="page">
                        <div className="conte" style={{marginLeft:"20%",marginTop:"7%",background:"white", width:"1150px", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)" }}>
                           
                        <FaWindowClose style={{float:"right", fontSize:"25px",borderRadius:"50px",marginTop:"10px", marginRight:"5px"}}/>

                            <h3 style={{marginLeft:"20px", paddingTop:"10px", marginBottom:"4%"}}>Edit Profile</h3>
                            
                                         
                                         <div className="wrapper">

                                            <input type="file" className="input" accept='image/*'/>
                                            <FaCamera style={{fontSize:"20px",borderRadius:"5px", marginTop:"75px",marginLeft:"60px", background:"black",color:"white", zIndex:"2"}}/>
                                            </div>
                                     
                                        <form onSubmit={pageSubmit} style={{ marginLeft:"25%",marginTop:"15px"}} action="">

                                            <div style={{display:"flex", gap:"10%", marginBottom:"5px",overflow:"wrap" }}>
                                               
                                               
                                                <div>
                                                  First name <br />
                                                  
                                                    <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} name='first_name' value={reg.first_name} type="text" >
                                                    
                                                    </ input>
                                                  
                                                    
                                                <p style={{color:"red"}}>{errors.first_name}</p>    
                                                </div>
                                                
                                                <div>
                                                   Surname <br />
                                                    <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} name='surname' value={reg.surname} type="text" />
                                                     <p style={{color:"red"}}>{errors.surname}</p>
                                                </div>
                                                
                                              </div>

                                              <div style={{display:"flex", gap:"10%", marginBottom:"5px",overflow:"wrap" }}>
                                               
                                               
                                               <div>
                                                 Phone Number <br />
                                                   <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} name='phone' value={reg.phone} type="text" />
                                                   
                                               <p style={{color:"red"}}>{errors.phone}</p>    
                                               </div>
                                               
                                               <div>
                                                  Address <br />
                                                   <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} name='address' value={reg.address} type="text" />
                                                    <p style={{color:"red"}}>{errors.address}</p>
                                               </div>
                                               
                                             </div>
                                             <div style={{display:"flex", gap:"10%", marginBottom:"5px",overflow:"wrap" }}>
                                               
                                               
                                               <div>
                                                 Email Address <br />
                                                   <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px",width:"235%"}} onChange={handleIput} name='email' value={reg.email} type="text" >
                                                   
                                                     </ input  >
                                                   
                                               <p style={{color:"red"}}>{errors.email}</p>    
                                               </div>
                                               
                                            
                                               
                                             </div>
                                             <div style={{display:"flex", gap:"10%", marginBottom:"20px",overflow:"wrap" }}>
                                               
                                               
                                               <div>
                                                 Password <br />
                                                   <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={(e)=>{setEmail(e.target.value)}} name='password' value={reg.password} type="text" />
                                                   
                                               <p style={{color:"red"}}>{errors.password}</p>    
                                               </div>
                                               
                                               <div>
                                                  Confirm Password <br />
                                                   <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} name='password_confirmation' value={reg.password_confirmation} type="password" />
                                                    <p style={{color:"red"}}>{errors.password_confirmation}</p>
                                               </div>
                                               
                                             </div>


                                       
<div >
{loading&&(

<button type='submit' style={{background:"#f8b609", width:"200px", paddingTop:"3px", paddingBottom:"3px",borderRadius:"20px",
border:"1px solid white",marginLeft:"19%", color:"white",fontSize:"22px", marginBottom:"40px"}}>     
                <div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                <div style={{display:"flex", flexDirection:"row"}}>
                <Oval  height="20"
                  width="20"
                  color='white'
                  ariaLabel='loading'/>
            <span style={{fontSize:"20px"}}>Updating...</span>
        </div>
    </div>
</button>
)}
{!loading && (
    
   
    <button type='submit' style={{background:"#f8b609", width:"200px", paddingTop:"3px", paddingBottom:"3px",borderRadius:"20px",
    border:"1px solid white",marginLeft:"19%", color:"white",fontSize:"22px", marginBottom:"40px"}}>Update</button>

)}
</div>
                                        <BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                        padding:"5px", zIndex:"2",marginTop:"-15px",marginRight:"-1.5%"}}/>
                               
                                </form>          
                        </div>
                     </div>
            </div>
         );
}

export default Profile;
