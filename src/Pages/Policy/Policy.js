import React from 'react';
// import {Button,Row,container-fluid} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Policy.css';
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
function Policy() {
    return ( 
        <section>
        <Sidebar/>
        <ProfileNav  />
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

export default Policy;