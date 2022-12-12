import React, { useEffect, useState } from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import Table from 'react-bootstrap/Table'
import axios from 'axios';


function Clients() {

  const [details, getDetails] = useState([]);
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
  
  console.log('data',details);



    return ( 
        <div className=''>        
            <SidebarAdmin/>
             <ProfileNavAdmin/>
            <div className='container'>
            <h1>Clients</h1>
          <div className='d-flex flex-row '>Dashboard / Client Managment/<h5 style={{color:"#fca311"}}>Clients</h5></div>
          <hr/>  
  

            
                <Table borderless hover variant="outline-light">
                <thead>
                <tr>
                         <th>Order No</th>
                        <th>Date</th>
                        <th>Service</th>
                        <th>Description</th>
                        <th>Technician</th>
                        <th>Claim</th>
                        <th>Rating & Comment</th>
                        
                        <th>Feedback</th>
                        
                        
                    </tr>
                </thead>
                <tbody className='border shadow p-3 mb-5 bg-body rounded'>
                {details.map((item,index)=>(
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.created_at}</td>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.provider}</td>
                    <td>{item.provider}</td>
                    <td>{item.provider}</td>
                    <td>{item.provider}</td>
                    
                    
                   
                    
                    </tr>
                ) )}

                </tbody>
                </Table>
            </div>
            
        </div>
    );
}



 
export default Clients;