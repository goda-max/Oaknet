import React, { useEffect, useState } from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import axios from 'axios';
import custom from "./useCustom";

function AllTechs() {


const [details, getDetails] = useState([]);
const getData = async () => {
    try {
        const data = await axios.get("http://fixapi.chengegikonyo.com/api/admin/Super-Admin/new_technicians");
        console.log(data.data.data);
        getDetails(data.data.data);

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
               <SidebarAdmin/>
             <ProfileNavAdmin/>
             <div className='tabs' style={{marginTop:"2%", marginLeft:"20%",display:"flex", gap:"5%"}}> 

                    <div><h3>Technicians</h3></div>

                    </div>
                    <div className='d-flex flex-row ' style={{marginLeft:"20%"}}>Dashboard / Technician Managment/<h5 style={{color:"#fca311"}}>Technicians</h5></div>

                    <hr style={{width:"60%",marginLeft:"20%",border:"1px solid black"}} />
                    <div className='tables' style={{marginTop:"2%", marginLeft:"20%",width:"60%"}}>

                    <table className="table table-borderless">
                    <thead>
                    <tr style={{color:"gray"}}>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Surname</th>
                    <th>Phone number</th>
                    <th>Id number</th>
                    <th>Location Id </th>
                    <th>Area</th>
                    <th>Passport</th>
                    <th>Resume</th>


                    </tr>
                    </thead>
                    <tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
                  
                    {details.map((item,index)=>(
                    
   console.log('i',item),

                <tr key={index} >  
                <td> {item.id} </td>                     
                    <td> {item.first_name} </td>
                    <td>{item.surname}</td>
                    <td>{item.phone}</td>
                    <td>{item.ID_Number}</td>
                    <td>{item.location_id}</td>
                    <td>{item.area}</td>
                    <td>{item.passport}</td>
                    <td>{item.resume}</td> 

                </tr>
                                       ) )}

         
                    </tbody>
                    </table>

                    </div>

       </div>
        );
}

export default AllTechs;