import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import TechnicianSidebar from '../../components/technicianSidebar';
import ProfileTechNav from '../../components/profileTechNav';
import axios from 'axios';

function Notifications() {

    const [details, getDetails] = useState([]);
    const getData = async () => {
        try {
            const data = await axios.get("http://fixapi.chengegikonyo.com/api/notifications");
            console.log(data.data.data);
            getDetails(data);
    
        } catch (e) {
            console.log("no execution");
           
        }
    };
    
    useEffect(()=>{
        getData();
    }, []);
    
    console.log('deta',details);


    return ( 
        <div>
        <TechnicianSidebar/>
            <ProfileTechNav profile="Fundi" />

            <div className='tabs' style={{marginTop:"2%", marginLeft:"20%",display:"flex", gap:"5%"}}> 

<h5 style={{textDecoration:'none', border:"1px solid #e8e9ed", paddingTop:"10px", paddingBottom:"10px",
     paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"#e8e9ed"}}>Notifications from the admin</h5>
 
</div>

<div className='tables' style={{marginTop:"2%", marginLeft:"20%",width:"60%"}}>

<table className="table table-borderless">
<thead>
<tr style={{color:"gray"}}>
<th>Order No</th>
<th>Status</th>
<th>Reason</th>

</tr>
</thead>
<tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
{details.map((item,index)=>(
<tr >
<td>John</td>
<td style={{color:"lightgreen",fontWeight:"500"}}>Request Approved</td>
<td> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </td>
<td><button style={{color:"red",background:"white",border:"0px"}}> <MdDelete style={{fontSize:"18px",color:"red"}} />Delete</button></td>


</tr>
) )}

</tbody>
</table>
<BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                          padding:"5px", zIndex:"2",marginTop:"20%",marginRight:"-1.5%"}}/>
                                

</div>

        </div>
     );
}

export default Notifications;