import React from 'react';
import TechnicianSidebar from '../../components/technicianSidebar';
import ProfileTechNav from '../../components/profileTechNav';
import  mash from "../../Assets/images/walletbgimage.png";
import union from "../../Assets/icons/Icon awesome-calendar-week.png";
import raiz from "../../Assets/icons/Icon material-timelapse.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doughnut,Line } from 'react-chartjs-2';
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render } from 'react-dom';

import  { useState } from "react";


// arc and faker error solved
import faker from 'faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function Wallet() {
  // const [show, setShow] = useState(false);

  // const submitModalHandler = () => setShow(false);










  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' 
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [50,50,60,60,80,25,30],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(blue)',
      },
     
    ],
  };
    // linegraph function

// modal function


    return ( 
        <div>
           <TechnicianSidebar/>
            <ProfileTechNav profile="Fundi" />
   
 
<section  className='container'>
              <div className = "container ">
              <div className = "row ">
              <div className = "col mnz -md-6"  >
              <div className = "card p-3 totalCard"style={{borderRadius:"15px"}}>
                <h5 className = "ml-5 font-weight-bold">Available Cash</h5>
                <p className = "ml-5 mb-0 availableCash"style={{textDecoration:"underline"}}><span className="mr-2">Ksh.</span>5,000.00</p>
                <p className="text-right  mb-0"> </p>
                <div  className='tabs' style={{marginTop:"3%", marginLeft:"20%",display:"flex", gap:"5%"}}>             
  
  
  {/* modal start */}
  
  <div className="modal fade  " id="AlfaModalToggle" aria-hidden="true" aria-labelledby="AlfaModalToggleLabel" tabIndex="-1">
   <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content border border-warning">
      <div className="modal-header">
        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
                    
                                  <p style={{marginLeft:"10%"}}>Enter the amount of money you wish <br></br>you to withdraw</p>
                                 <div className="amount">
                                   Ksh.
                                   <div>
                                   <input className="boarderless" type="text" style={{ borderTopStyle:"hidden",borderRightStyle: "hidden", borderLeftStyle: "hidden", borderBottomStyle: "thin", backgroundColor: "white",outline:"none"}} />
    
   
   
                                   </div>

                                 </div>
                                    
    {/* end of first modal */}
    {/* second modal */}
      </div>
      <div className="modal-footer">
        <button className="btn btn-outline-warning rounded-pill ms-1" data-bs-target="#AlfaModalToggle2" data-bs-toggle="modal">submit</button>
      </div>
      </div>
      </div>
      </div>
                          <div className="modal fade" id="AlfaModalToggle2" aria-hidden="true" aria-labelledby="AlfaModalToggleLabel2" tabIndex="-1">
                           <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content border border-warning">
                            <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                               </div>
                             <div className="modal-body">
                               
                                    you will recieve your money in your M-pesa shortly
       
                                    </div>
           <div className="modal-footer">
          </div>
          </div>
          </div>
          </div>
          <a className="btn btn rounded-start btn btn-light " data-bs-toggle="modal" href="#AlfaModalToggle" role="button">Withdraw</a>
   
                </div>
               
        {/* modal event */}
                
   
            </div>
            </div>
            <div id = "walletimgcol" className = "col-md-6">
            <div className = "card p-2"style={{borderRadius:"20px",}}>
               <img  id = "walletimg" src = {mash} height="112px" width = "200px"/>
            </div>
            </div>
            </div>

                      


{/* modal */}
            {/* <Modal show={show} submit={submitModalHandler}
             />
             { show ? <div onClick={submitModalHandler} className="back-drop"></div> : null }
    */}
                 <div className="chart-holder">
                 <h3 className="secondary-heading mb-4">
                  Summary Earnings
                 </h3>
                 <section>
                 <div id="nav">
                 <nav className="navigation" style={{marginLeft:"-85%",}}>
                   
                  <ul>
                <li><a href="#lifetime"> lifetime <i className="fas fa-caret-right"></i></a></li>
                <li><a href="/weekly ">weekly <i className="fas fa-caret-right"></i></a></li>
                <li><a href="/Monthly">Monthly <i className="fas fa-caret-right"></i></a></li>
                </ul>
                </nav>
                </div>
                
                    
                  {/* graph content */}
                
                   
                   <div className="card new " style={{maxWidth:"80%"}} >
                           {/* linegraph */}
                           <div className="card graph" style={{maxWidth:"80%",maxHeight:"30%",marginLeft:"5%",borderColor:"black",marginTop:"2%",marginBottom:"2%"}}>
                       <Line options={options} data={data} style={{maxWidth:"100%"}} />
                   </div>
                   
                   </div>
          
                  </section>
                  </div>
                       {/* end of linegraph */}
          
                          
     
                        {/* <div id = "lowercards pt-4">
                        <div className = "row ">
                        <div className="col pt-3" >
                        <div className="card pt-3 ">
                        <div className = "row ">
                        
                        
                        <div className = "col-md-3 align-items-center" >
                           <img className = "cardimgs weekly pt-3" src = {union} width="40px"/>
                        </div>
                        <div className = "col-md-9 " >
                            <h6 className = "text-left ml-3">Weekly Earnings</h6>
                            <p className = "ml-3">Ksh 1,500.00</p>
                        </div>
                        </div> 
            </div>
            </div>
                         <div className="col ">
                         <div className="card ">
                         <div className = "row">
                         <div className = "col-md-3 ">
                            <img className = "cardimgs pending" src = {union}   width="45px" height="45px"/>
                        </div>
                        <div className = "col-md-9 ">
                            <h6 className = "text-left ml-3">Pending Payments</h6>
                            <p className = "ml-3">Ksh 3,000.00</p>
                        </div>
                        </div> 
            </div>
            </div>
                       <div className="col pt-3 ">
                       <div className="card ">
                       <div className = "row">
                        <div className = "col-md-3">
                           <img className = "cardimgs due" src ={raiz} width="45px" height="45px"/>
                      </div>
                     <div className = "col-md-9">
                            <h6 className = "text-left ml-3">Total Money Made</h6>
                            <p className = "ml-3">Ksh 3,000.00</p>
                     </div>
                     </div>  */}
    
      
        
    

      
</div>

 </section>
         
</div>
     );
}

export default Wallet;