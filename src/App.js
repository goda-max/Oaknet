
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import About from './Pages/About/About';
import BookService from './Pages/BookService/BookService';
import Feedback from './Pages/Feedback/Feedback';
import Policy from './Pages/Policy/Policy';
import Ratings from './Pages/Feedback/Rates';
import History from './Pages/History/History';
import Order from './Pages/Order/Order';
import ScheduledOrder from './Pages/Order/scheduledOrder';
import HistoryError from './Pages/History/historyError';
import Homepage from './Pages/Homepage/Homepage';
import TechHome from './Technician/TechHome/TechHome';
import TechLogin from './Technician/TechLogin/TechLogin';
import TechRegister from './Technician/TechRegister/TechRegister';
import TechProfile from './Technician/TechProfile/TechProfile';
import TechAbout from './Technician/TechAbout/TechAbout';
import Jobdashboard from './Technician/Jobdashboard/Jobdashboard';
import Notifications from './Technician/Notifications/Notifications';
import TechPolicy from './Technician/TechPolicy/TechPolicy';
import Wallet from './Technician/Wallet/Wallet';
import TechForgot from './Technician/TechLogin/TechForgot';
import Newjobs from './Technician/Jobdashboard/Newjobs';
import Scheduled from './Technician/Jobdashboard/Scheduled';
import Jobhistory from './Technician/Jobdashboard/Jobhistory';
import ActiveOrders from './Pages/Order/ActiveOrders';
import Order3 from'./Pages/Order/order3';
import Order6 from'./Pages/Order/order6';
import Order5 from'./Pages/Order/order5';




import AdminDashboard from './Admin/AdminDashboard/AdminDashboard';
import AdminLogin from './Admin/AdminLogin/AdminLogin';
import AdminRegister from './Admin/AdminRegister/AdminRegister';
import ClientManagement from './Admin/ClientManagement/ClientManagement';
import Communication from './Admin/Communication/Communication';
import ContentManagement from './Admin/ContentManagement/ContentManagement';
import FinanceModule from './Admin/FinanceModule/Payments';
// import OrderManagement from './Admin/OrderManagement/OrderManagement';
import TechManagement from './Admin/TechManagement/TechManagement';
import UserManagement from './Admin/UserManagement/UserManagement';

import CallRequests from './Admin/ClientManagement/CallRequests';
import Clients from './Admin/ClientManagement/Clients';
import LiveChats from './Admin/Communication/LiveChats';
import Newsletters from './Admin/Communication/Newsletters';
import Advertisements from './Admin/ContentManagement/Advertisements';
import Carousel from './Admin/ContentManagement/Carousel';
import Comments from './Admin/ContentManagement/Comments';
import MiniForm from './Admin/ContentManagement/MiniForm';
import ContentPolicy from './Admin/ContentManagement/ContentPolicy';
import ContentTechnicians from './Admin/ContentManagement/ContentTechnicians';
import AddService from './Admin/ContentManagement/AddService';
import AddLocation from './Admin/ContentManagement/AddLocation';
import AddBrands from './Admin/ContentManagement/AddBrands';
import EditDescriptionlist from './Admin/ContentManagement/EditDescriptionlist';


// import NewOrderr from './Admin/OrderManagment/NewOrd';
import NewOrderr from "./Admin/OrderMangement/NewOrd";
import OrderHistory from './Admin/OrderMangement/OrderHistory'
import SchedOrder from './Admin/OrderMangement/SchedOrder'

import Technicians from './Admin/TechManagement/Technicians';
import AllTechs from './Admin/TechManagement/AllTechs';
import TechNotifications from './Admin/TechManagement/TechNotifications';
import TechRegistrations from './Admin/TechManagement/TechRegistrations';
import Admin from './Admin/Admin';




import axios from 'axios';
import './App.css';

axios.defaults.withCredentials = false;

axios.defaults.baseURL = "http://fixapi.chengegikonyo.com";
axios.defaults.headers.post["Content-Type"] = 'application/json';
axios.defaults.headers.post["Accept"] = 'application/json';

axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})

function App() {
  return (
      <Router>
         <Routes>
            <Route exact path="/" element={< Homepage />}></Route>



            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            {/* <Route exact path="/login">
              {localStorage.getItem( `auth_token`) ? <Navigate to='/' /> : <Login/>}

            </Route>
            <Route exact path="/register">
              {localStorage.getItem( `auth_token`) ? <Navigate to='/' /> : <Register/>}

            </Route> */}
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/rating" element={<Ratings />}></Route>
            <Route exact path="/bookservice" element={<BookService />}></Route>
            <Route exact path="/feedback" element={<Feedback />}></Route>
            <Route exact path="/history" element={<History />}></Route>
            <Route exact path="/order" element={<Order />}></Route>
            <Route exact path="/scheduledorder" element={<ScheduledOrder />}></Route>
            <Route exact path="/historyerror" element={<HistoryError />}></Route>
            <Route exact path="/policy" element={<Policy />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/techlogin" element={<TechLogin />}></Route>
            <Route exact path="/techregister" element={<TechRegister />}></Route>
            <Route exact path="/techprofile" element={<TechProfile />}></Route>
            <Route exact path="/techabout" element={<TechAbout />}></Route>
            <Route exact path="/jobdashboard" element={<Jobdashboard />}></Route>
            <Route exact path="/notifications" element={<Notifications />}></Route>
            <Route exact path="/techpolicy" element={<TechPolicy />}></Route>
            <Route exact path="/wallet" element={<Wallet />}></Route>
            <Route exact path="/techhome" element={<TechHome />}></Route>
            <Route exact path="/techforgot" element={<TechForgot />}></Route>
            <Route exact path="/newjobs" element={<Newjobs />}></Route>
            <Route exact path="/scheduled" element={<Scheduled />}></Route>
            <Route exact path="/jobhistory" element={<Jobhistory />}></Route>
          
            

            <Route exact path="/admindashboard" element={<AdminDashboard />}></Route>
            <Route exact path="/adminLogin" element={<AdminLogin />}></Route>
            <Route exact path="/adminregister" element={<AdminRegister />}></Route>
            <Route exact path="/clientmanagement" element={<ClientManagement />}></Route>
            <Route exact path="/communication" element={<Communication />}></Route>
            <Route exact path="/contentmanagement" element={<ContentManagement />}></Route>
            <Route exact path="/financemodule" element={<FinanceModule />}></Route>
            {/* <Route exact path="/ordermanagement" element={<OrderManagement />}></Route> */}
            <Route exact path="/techmanagement" element={<TechManagement />}></Route>
            <Route exact path="/usermanagement" element={<UserManagement />}></Route>
            <Route exact path="/callrequests" element={<CallRequests />}></Route>
            <Route exact path="/clients" element={<Clients />}></Route>
            <Route exact path="/livechats" element={<LiveChats />}></Route>
            <Route exact path="/newsletters" element={<Newsletters />}></Route>
            <Route exact path="/advertisements" element={<Advertisements />}></Route>
            <Route exact path="/carousel" element={<Carousel />}></Route>
            <Route exact path="/comments" element={<Comments />}></Route>
            <Route exact path="/miniForm" element={<MiniForm />}></Route>
            <Route exact path="/contentPolicy" element={<ContentPolicy />}></Route>
            <Route exact path="/contenttechnicians" element={<ContentTechnicians />}></Route>
            <Route exact path="/neworder" element={<NewOrderr />}></Route>
            <Route exact path="/orderhistory" element={<OrderHistory />}></Route>
            <Route exact path="/schedorder" element={<SchedOrder />}></Route>
            <Route exact path="/technicians" element={<Technicians />}></Route>
            <Route exact path="/alltechs" element={<AllTechs />}></Route>
            <Route exact path="/technotifications" element={<TechNotifications />}></Route>
            <Route exact path="/techregistrations" element={<TechRegistrations />}></Route>
            <Route exact path='/admin' element={<Admin />}></Route>
            <Route exact path='/addservice' element={<AddService />}></Route>
            <Route exact path='/addlocation' element={<AddLocation />}></Route>
            <Route exact path='/addbrands' element={<AddBrands />}></Route>
            <Route exact path='/editdescriptionlist' element={<EditDescriptionlist/>}></Route>





            <Route exact path='/activeorders' element={<ActiveOrders/>}></Route>
            <Route exact path='/order3' element={<Order3/>}></Route>
            <Route exact path='/order6' element={<Order6/>}></Route>
            <Route exact path='/order5' element={<Order5/>}></Route>
           
            
        </Routes>   
        </Router>
  );
}

export default App;
 