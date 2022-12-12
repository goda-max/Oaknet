import React from 'react';

 import 'bootstrap/dist/css/bootstrap.min.css';
 import ruki from "../../Assets/images/welcomeimg.png";
 import khabib from "../../Assets/images/human-sitting.png";
 import './Home.css';
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
import { Link} from "react-router-dom";


function Home() {

    let user = JSON.parse (localStorage.getItem('auth_name'));

    return ( 
        <div>
        <Sidebar/>
        <ProfileNav profile="Nicole" />
        <section >
        <div className = "container">
    <div className = "card mb-4 shadow-sm"style={{maxWidth:"80%",marginLeft:"10%",borderRadius:"15px"}}>
        <div className="card-body"style={{}}>
            <div className = "row">
                <div id = "welcomewords"style={{marginLeft:"20%"}} className = "col">
                    <h2 className = "text-center">Welcome {user.data.name}</h2>
                    <p className = "text-center">Book a Technician with us</p>
                   {/* book service link */}
                   <a href='/bookservice' className='btn btn-outline-warning rounded-pill text-black text-center mb-5 mt-1 ms-5'> Book Service</a>
                      
                
                    
                   
                 {/* end link */}
                  
            
                </div>
                 <div id = "welcomeimg" className = "col">
                    <img className = "ml-0"  src={ruki} height="200px" width="150px"/>
                 </div>  
            </div>    
             </div>
            </div>
             <div className = "card shadow-sm"style={{maxWidth:"80%",marginLeft:"10%",borderRadius:"15px"}}>
                <div className = "card-body">
                 <div className = "row">
                 <div id = "womanSitting"className = "col">
                 <img src = {khabib} height="200px" width="150px"/>
                 </div>
                 <div id = "requestfyx" style={{marginLeft:"-40%"}}className = "col mt-5">
                    <h5 className = "text-center">Request for a technician to come <strong className ="text-warning">fyx</strong> your item at the comfort of your home.</h5> 
                    <p className = "text-center"style={{marginLeft:"-40%"}}>We are reliable and your safety is our priority.</p>
                </div>
                
            </div>
             <div className = "row mt-3">
                <div className = "col-md-3">
                    <p className = "text-center text-danger"><strong>Note:</strong></p>
                </div>
                <div id = "note"className = "col-md-9">
                   <p className = "text-left small" style={{marginRight:"10%"}}>
                       Outsourcing of Fyx's Technicians is highly discouraged. In an instance where this happens, we will not be liable for<>
                       the damages that may be caused e.g theft, destruction of property etc. by the technician.<>
                       Outsourcing of a technician will cause him/her to be let go.</>
                   </>
                   </p>
             </div>
            </div>
        </div> 
        
  </div>
</div>
</section>
</div>
     );
}

export default Home;