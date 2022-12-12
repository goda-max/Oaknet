import React, { useState } from "react";
import './sidebar.css';
import * as fa from "react-icons/fa";
import { IoPersonCircle} from "react-icons/io5"; 
// import * as mb from "react-icons/md";
import {MdLogout} from "react-icons/md";
import {RiLayout2Fill} from "react-icons/ri";
import { Oval } from 'react-loader-spinner';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const TechnicianSidebar=()=>{



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

                navigate('/');
    
    
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



    
    let li = document.querySelectorAll(".nav-link");
    
    li.forEach(link =>{
        link.addEventListener("click",()=>{
            // e.preventDefault()
        li.forEach(navLink => navLink.classList.remove('active'));
            
            link.classList.add("active")
        })
    })
    return (
        
        <div>


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
        {/* <!-- Sidebar  --> */}
         <header>
        <nav id="sidebar" className="">
        <div className="logo">
                <img src="/Assets/images/Asset 2.svg" alt="fyx logo" className="img-fluid"/>
            </div>
            <ul className="list-unstyled components">
            <li className="nav-link"><a href="/techprofile" className=" menu-item"> <IoPersonCircle  style={{ fontSize:"30px", color:"black"}}/> Profile</a></li>
                    <li className="nav-link"><a href="/jobdashboard" className=" menu-item"><RiLayout2Fill style={{color:"black",fontSize:"350x"}} className="ms-2"/> Job Dashboard</a></li>
                    <li className="nav-link">  <a href="/notifications" className=" menu-item"> <fa.FaBell style={{color:"black",fontSize:"20px"}} className="ms-2" />Notifications</a></li>               
                    <li className="nav-link ">  <a href="/wallet" className=" menu-item"><fa.FaWallet  style={{ fontSize:"20px", color:"black"}}  className="ms-2" />Wallet</a></li>
                    <li className="nav-link">  <a href="/techpolicy" className=" menu-item"><fa.FaFileContract style={{color:"black",fontSize:"20px"}} className="ms-2" />FYX policy</a></li>
                    <li className="nav-link">  <a href="/techhome" className=" menu-item"><fa.FaHome style={{color:"black",fontSize:"20px"}}  className="ms-2" />home</a></li>
            </ul>
            <div className="settings" >
                <ul>
                    <li>  <a href="/techabout" className="text-black"><fa.FaInfoCircle style={{color:"black",fontSize:"30px"}}  className="ms-2" />About us</a></li>
                    <div >
                {loading&&(

                <li><button onClick={logoutSubmit} style={{fontSize:"18px",background:"transparent",color:"black",border:"none",marginLeft:"28px"}}>
                    <div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                                <div style={{display:"flex", flexDirection:"row"}}>
                                <Oval  height="20"
                                width="20"
                                color='white'
                                ariaLabel='loading'/>
                            <span style={{fontSize:"20px"}}>Logging out</span>
                        </div>
                    </div>
                </button></li>
                )}
                {!loading && (
                    

                    <li><button onClick={logoutSubmit} style={{fontSize:"18px",background:"transparent",color:"black",border:"none",marginLeft:"28px"}}> <MdLogout style={{color:"black",fontSize:"35px"}}  className="ms-2" />Log Out</button></li>
                )}
                </div> 
 </ul>
            </div>
        </nav>
        </header>
        </div>
    
    )
    }   

export default TechnicianSidebar;

