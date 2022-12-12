import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mpmba from "../../Assets/images/ordersbgimg.png";
// import './Order.css';
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
import { Link,} from "react-router-dom";
import axios from 'axios';



function ActiveOrder() {
 
const [details, getDetails] = useState([]);
const getData = async () => {
    try {
        const data = await axios.get("http://fixapi.chengegikonyo.com/api/customer/scheduled");
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
       
        <section>
            <Sidebar/>
        <ProfileNav profile="Nicole" />
       <div>
       <div className = "container">
       <div className="nav orderz" style={{marginLeft:"2%",marginBottom:"5%"}}>
       <a  href='/ActiveOrders' className='btn btn-outline-warning rounded-pill ms-1 text-black'> Active orders</a>
       <a  href='/scheduledorder' className='btn btn-outline-warning rounded-pill ms-2 text-black'>Sheduled orders</a>


      </div>
      <div className='tables' style={{marginTop:"2%", marginLeft:"2%",width:"100%"}}>

<table className="table table-borderless">
<thead>
<tr style={{color:"gray"}}>
<th>Order id</th>
<th> Service</th>
<th>Description</th>
<th> Date</th>
<th> Location</th>

</tr>
</thead>
<tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>

{details.map((item,index)=>(

console.log('i',item),

<tr key={index} >  
<td> {item.order_id} </td>                     
<td> {item.service} </td>
<td>{item.description}</td>
<td>{item.date}</td>
<td>{item.location}</td>
<td><button style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"white"}}>More Details...</button>
       </td>
<td><button style={{borderRadius:"15px",paddingLeft:"20px", paddingRight:"20px", border:"0px solid", background:"transparent",boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)"}}>Pay</button></td>
<td><button style={{borderRadius:"15px",paddingLeft:"20px", paddingRight:"20px", border:"0px solid", background:"transparent",boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)"}}>Track</button></td>


</tr>
                   ) )}


</tbody>
</table>

</div>
</div>



            
        </div>
        </section>
     );
}

export default ActiveOrder;