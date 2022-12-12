import React from 'react';
// import {Button,Row,container-fluid} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TechPolicy.css';
import TechnicianSidebar from '../../components/technicianSidebar';
import ProfileTechNav from '../../components/profileTechNav';

function TechPolicy() {
    let user = JSON.parse (localStorage.getItem('auth_name'));
    return ( 
        <section>
        
        <TechnicianSidebar/>
            <ProfileTechNav profile={user.data.name} />

            <div>

<div className = "container lg ">
<div className = "card mb-10 shadow-sm">
<div id = "fyxpolicy" >
<h1 className = "text-center" style={{paddingRight:"190px"}}>Fyx Policy to be Stated here</h1>
</div>
</div>
</div>

    
</div>
</section>
     );
}

export default TechPolicy;