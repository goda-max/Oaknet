    import React, { useEffect, useState } from 'react';
    import Sidebar from '../../components/Sidebar'
    import ProfileNav from '../../components/profileNav';
    import Table from 'react-bootstrap/Table'
    import * as fa from "react-icons/fa";
import axios from 'axios';

    function History() {
 
        const [details, getDetails] = useState([]);
        const getData = async () => {
            try {
                const data = await axios.get("http://fixapi.chengegikonyo.com/api/customer/history");
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
            <div className=''>        
                <Sidebar/> 
                <div className='container'>
                    <ProfileNav profile="Nicole"/>
                
                    <Table borderless hover variant="outline-light">
                    <thead>
                    <tr>
                            <th>Date</th>
                            <th>Order No</th>
                            <th>Service</th>
                            <th>Technician</th>
                            <th>Invoice</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody className='border shadow p-3 mb-5 bg-body rounded'>
                    {details.map((item,index)=>(
                        <tr key={index}>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td> <fa.FaFileAlt/></td>
                        <td> <fa.FaReceipt/></td>
                        </tr>
                     ) )}
                       
                    </tbody>
                    </Table>
                </div>
                
            </div>
        );
    }

export default History;