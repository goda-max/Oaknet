import React, { useState } from "react";
import './sidebarAdmin.css'
import * as fa from "react-icons/fa";
import { NavDropdown} from 'react-bootstrap'; 
import {MdLogout} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

function SidebarAdmin(){




  
  const navigate = useNavigate();

  const [serverError, setServerError] = useState("")
  const [loading, setLoading] = useState(false);
  const [successResponse,setSuccessResponse]=useState("");
  const logoutSubmit = (e) => {
      e.preventDefault();


      setLoading(true);
      axios.post(`/api/logout`) .then(res =>{
        setLoading(false);  

          if (res.status === 200) {

              localStorage.removeItem("auth_token");
              localStorage.removeItem("auth_name", JSON.stringify(res.data.user));
      
              setSuccessResponse("you have been registered successfully.");
              setTimeout(() => {
                setSuccessResponse("")
              }, 2000);

              navigate('/admin');
  
  
          } else {
  
              alert("Log out Incomplete")
  
          }
      }).catch(res =>{

                
            setLoading(false);
            setServerError("Failed to log out")
            setTimeout(()=>{
                setServerError("")
            },2000)

                
                });
  }




    return (
        <div className="">

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

        <div className="sidenav ">
        <div className="py-4 ps-4 " >
        <img src="/Assets/images/Asset 2.svg" alt="fyx logo" className="img-fluid border-bottom border-dark mx-auto d-block" width="150"/>
         <a href="/admindashboard" className="pt-3"><fa.FaHome style={{ fontSize:"30px", color:"black"}}/> Dashboard</a>   
            </div>
           <hr/>
            <h4 className='py-3'>Modules</h4>
        <div className=''>
            <div className=''>
                
            <NavDropdown 
            id="nav-dropdown-dark-example"
            title="Order managment"
            menuVariant="dark"
            >
            <NavDropdown.Item href="/neworder">New</NavDropdown.Item>
            <NavDropdown.Item href="/schedorder">Scheduled</NavDropdown.Item>
            <NavDropdown.Item href="/orderhistory">History</NavDropdown.Item>
            <NavDropdown.Divider />
            
            </NavDropdown>
            </div>
        </div>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Technician managment"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/technicians">Technicians</NavDropdown.Item>
          <NavDropdown.Item href="/techregistrations">Registrations</NavDropdown.Item>
          <NavDropdown.Item href="/technotifications">Notification</NavDropdown.Item>
          <NavDropdown.Item href="/alltechs">New technicialns</NavDropdown.Item>
          <NavDropdown.Divider />
          
        </NavDropdown>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Client Managment"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/callrequests">Call Requests</NavDropdown.Item>
          <NavDropdown.Item href="/clients">Clients</NavDropdown.Item>
          
          <NavDropdown.Divider />
          
        </NavDropdown>
       
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Finance Module"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Payment</NavDropdown.Item>
          
        </NavDropdown>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Communication"
          menuVariant="dark"
        >
          
          <NavDropdown.Item href="/communication">Communications</NavDropdown.Item>
          <NavDropdown.Item href="/livechats">Live Chats</NavDropdown.Item>
          <NavDropdown.Item href="/newsletters">Newsletters</NavDropdown.Item>
          
          <NavDropdown.Divider />
        </NavDropdown>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="User Managment"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/usermanagement">User Management</NavDropdown.Item>
          
        </NavDropdown>
        
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Content Managment"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#/">Website</NavDropdown.Item>
          <NavDropdown.Item href="/carousel">Carousel</NavDropdown.Item>
          <NavDropdown.Item href="/miniForm">Mini form</NavDropdown.Item>
          <NavDropdown.Item href="/advertisements">Advertisements</NavDropdown.Item>
          <NavDropdown.Item href="/contenttechnians">Technician</NavDropdown.Item>
          <NavDropdown.Item href="/comments">Comments</NavDropdown.Item>
          <NavDropdown.Item href="contentPolicy">Fyx policy</NavDropdown.Item>
          <NavDropdown.Divider />
        
        </NavDropdown>
        <hr/>
       
        <div >
                {loading&&(

                <button onClick={logoutSubmit} style={{fontSize:"18px",background:"transparent",color:"black",border:"none",marginLeft:"28px"}}>
                    <div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                                <div style={{display:"flex", flexDirection:"row"}}>
                                <Oval  height="20"
                                width="20"
                                color='white'
                                ariaLabel='loading'/>
                            <span style={{fontSize:"20px"}}>Logging out</span>
                        </div>
                    </div>
                </button>
                )}
                {!loading && (
                    

                    <button onClick={logoutSubmit} style={{fontSize:"18px",background:"transparent",color:"black",border:"none",marginLeft:"28px"}}> <MdLogout style={{color:"black",fontSize:"35px"}}  className="ms-2" />Log Out</button>
                  )}
            </div> 
      </div>

        </div>
    )
}
export  default SidebarAdmin;   

