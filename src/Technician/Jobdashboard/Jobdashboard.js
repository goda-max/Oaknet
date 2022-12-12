import React from 'react';
import {Link} from "react-router-dom";
import { BiMessageRounded } from "react-icons/bi";
import TechnicianSidebar from '../../components/technicianSidebar';
import ProfileTechNav from '../../components/profileTechNav';


function Jobdashboard() {
    return ( 
        <div>
         <TechnicianSidebar/>
            <ProfileTechNav profile="Fundi" />
            <div className='tabs' style={{marginTop:"2%", marginLeft:"20%",display:"flex", gap:"5%"}}> 


            <Link style={{textDecoration:'none', color:"black",border:"1px solid white", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"white"}} to={"/Newjobs"}>New Jobs </Link>
            <Link style={{textDecoration:'none', color:"black",border:"1px solid white", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"white"}} to={"/Scheduled"}>Scheduled Jobs </Link>
            <Link style={{textDecoration:'none', color:"black", border:"1px solid white", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"white"}} to={"/Jobhistory"}>Job History </Link>
             
            </div>
                                

        </div>
     );
}

export default Jobdashboard;