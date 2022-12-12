import React from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
function Newsletters() {
    return ( 
        <div>
           <SidebarAdmin/>
             <ProfileNavAdmin/> 
             <div className='tabs' style={{marginTop:"5%", marginLeft:"20%",display:"flex", gap:"5%"}}> 

                  <div><h3><b>Newsletters</b></h3></div>

                  </div>
                  <hr style={{width:"60%",marginLeft:"20%",border:"1px solid black"}} />

                  <div style={{marginLeft:"25%",marginTop:"3%",display:"flex",gap:"45%"}}>
                    <div style={{}}>
                      <p>Email address</p>
                    </div>
                    <div style={{}}>
                    <button style={{background:"transparent",border:"1px solid orange", paddingRight:"20px",paddingLeft:"20px",borderRadius:"15px"}}>Send Newsletters</button>
                    </div>
            
                  </div>

               <div style={{width:"60%",height:"20%",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)",marginLeft:"20%",paddingLeft:"70px"}}>



               <table className="table table-borderless">
  <thead>
    <tr style={{color:"gray",}}>
      <th></th>

    </tr>
  </thead>
  <tbody style={{}}>
    <tr>
      <td>sdfghj</td>

    </tr>

  </tbody>
</table>

              </div>
        </div>
     );
}

export default Newsletters;