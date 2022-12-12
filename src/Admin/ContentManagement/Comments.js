import React from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import { AiFillStar } from "react-icons/ai";




function Comments() {
     return (
          <div>
           <SidebarAdmin/>
             <ProfileNavAdmin/>   
  
             <div className='tabs' style={{marginTop:"3%", marginLeft:"20%",display:"flex", gap:"5%"}}> 

<div><h4>Comments</h4></div>

</div>
<hr style={{width:"60%",marginLeft:"20%",border:"1px solid black"}} />

<div style={{marginLeft:"20%",fon:"bold"}}><h5>Feedback from Clients</h5></div>
<div className='tables' style={{marginTop:"2%", marginLeft:"20%",width:"60%"}}>

<table className="table table-borderless">
<thead>
<tr style={{color:"gray", fontSize:"14px"}}>
<th >Date.</th>
<th>FYX website feedback</th>
<th></th>



</tr>
</thead>
<tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
<tr>
<td></td>
<td></td>
<td> <button style={{paddingRight:"20px",paddingLeft:"20px",borderRadius:"15px", background:"transparent",border:"1px solid orange"}}>Post comment</button></td>
</tr>

</tbody>
</table>


</div>



</div>
);
}

export default Comments;