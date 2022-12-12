import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Order.css';
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
import mini from "../../Assets/images/balloons.png";
import { Card,Col,Row,Container } from "react-bootstrap";


function order6() {
    return ( 
       
        <section>
            <Sidebar/>
        <ProfileNav profile="Nicole" />
       {/* image ballon */}
      
            
         <div className="container">
          <div style={{display:"flex",gap:"40px"}}>

              <div className="minions"style={{marginLeft:"20%",maxWidth:"80%",marginTop:"10%"}}>
             <img   src={mini} height="450px" width="450px"/>
             

                  <div className="wazi" style={{marginLeft:"120%", width:"70%",marginBottom:"80%"}} >
               <h1>THANK YOU <br></br>FOR CHOOSING <br></br> US</h1>
                 </div>
                 </div>
             


 </div>  
 </div>          
            
      
            
            
            
              
     
     
                 
                
                 
               
           
          
    
        
        </section>
     );
}

export default order6;