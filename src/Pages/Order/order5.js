import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
import { Link,} from "react-router-dom";
function ActiveOrder() {
    return ( 
       
        <section>
            <Sidebar/>
        <ProfileNav profile="Nicole" />
       <div>
       <div className = "container">
    
    <div className="nav orderz" style={{marginLeft:"2%",marginBottom:"5%"}}>
    <Link to="/ActiveOrders"> <button style={{borderRadius:"15px"}}>Active Orders</button>
       </Link>
      <button style={{marginLeft:"4%",borderRadius:"15px",backgroundColor:"white"}}>Sheduled orders</button>

      </div>
        
        <div className = "card w-50 rounded ms-5 rounded ">
        <div className="invoice" style={{marginLeft:"20%",maxWidth:"80%"}}>
          <div className="headz">
            <h2 style={{textDecoration:"underline"}}>Summary for Order No 01113</h2>
          </div>
          <h6>Service charge</h6>
          <div className="row row-cols-2">
    <div className="col">
   <p1>Assesment fee</p1><br></br> 
   <p2>Labour fee</p2> 
    </div>
    <div className="col ">ksh 500.00
    <br></br>ksh 3000.00
    </div>

    <h6>Service charge</h6>
    <div className="col"></div>
    <div className="col">E.g Tv screen e.t.c</div>
    <div className="col">ksh 20,000</div>
  </div>

  <div class="row g-2">
    <div class="col-6">
      <div class="p-3 ">Total Amount</div>
    </div>
    <div class="col-6">
      <div class="p-3">Ksh 23,500</div>
    </div>
    </div>
    </div>
  
   <div className="col wez" style={{marginLeft:"25%"}}>
     <h4>Mode of payment</h4>
   </div>
          <div className="lipah"style={{marginLeft:"28%"}}>
          <div className='btn btn-outline-warning rounded-pill ms-5 text-black'> M-pesa</div>
      
        <div className='btn btn-outline-warning rounded-pill ms-3 text-black' data-bs-toggle="modal" data-bs-target="#exampleModal">
  cash



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content border border-warning rounded-pill">
      <div class="modal-body">
      Kindly give the Technician the Total Amount of money for the service
      </div>
      
      
      </div>
    </div>
  </div>
</div>



          </div>


        
  
        
            
           </div>
           <div className="lipahz"style={{marginLeft:"22%",marginTop:"10%"}}>
           <a  href='/order6' className='btn btn-outline-warning rounded-pill ms-2 text-black'>Order complete</a>
          </div>
   
   
       
          
        
   
 
</div>



         


    
  
    

      
       </div>
        </section>
     );
}

export default ActiveOrder;