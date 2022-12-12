import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import back from "../../Assets/images/bgimage.jpeg";
import { FaArrowLeft } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


function Login() {

const navigate = useNavigate();

const [serverError, setServerError] = useState("")
const [loading, setLoading] = useState(false);
const [successResponse,setSuccessResponse]=useState("");
const [errors, seterrors] = useState({});
const [isSub, setsub] = useState(false);
const [ loginInput, setLogin] = useState ({
    email: '',
    password: '',
   
});

const handleInput = (e) =>{
    e.persist();

    setLogin({...loginInput, [e.target.name]: e.target.value});
    console.log(loginInput);
};
    
const loginSubmit = async (e) => {
    e.preventDefault();


    seterrors(validate(loginInput));
    setsub(true);

    const data ={
        email: loginInput.email,
        password: loginInput.password,
    }

setLoading(true);

await axios.post(`api/login`, data) .then(res =>{
    setLoading(false); 
    if(res.status === 200)
    {
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("auth_name", JSON.stringify(res.data));

        setSuccessResponse("you have been registered successfully.");
        setTimeout(() => {
          setSuccessResponse("")
        }, 2000);


        // alert("logged in successfully");

        navigate('/home');

    }else{
        alert("Invalid credentials");

        navigate('/login');
    }

})
.catch(res =>{


  setLoading(false);
  setServerError("Invalid credentials")
  setTimeout(()=>{
    setServerError("")
  },2000)


  // alert("Invalid credentials");

  navigate('/login');
 

});

}

useEffect(()=>{
    // console.log(errors);
      if(Object.keys(errors).length === 0 && isSub){
        // console.log(loginInput);
      }
    },[errors])
    
    
    const validate = ( x  ) =>{ 
    
      const err = {};
      const regrex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;
    
      if(!x.email){
        err.email =" Email is required"
      }else if( !regrex.test(x.email) )
      {
        err.email =" Not a valid email" 
      }
      if(!x.password){
        err.password =" password is required";
      }else if(x.password.length < 3 )
      {
        err.password =" Must be more than 3 characters"
      }
    
      return err; 
    }


    
  return (

            <div>


                      <div style={{marginLeft:"30%",marginTop:"-5%",position:"fixed", zIndex:"2"}}>
                                {successResponse && (
                                     <div 
                                     style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#28a745",
                                     borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                     {successResponse}
                                    </div>
                                      
                                 )}
                                   {serverError && (
                                     <div 
                                    style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#ED4337",
                                    borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                    {serverError}
                                    </div>
                                      
                                 )}
                          </div>       


                <div className='whole' style={{ marginLeft: "15%", marginTop: "10%" }}>

                    <div className='content' style={{ float: "left", marginRight: "80px" }}>
                        <FaArrowLeft style={{ fontSize: "20px", marginLeft: "50px" }} />
                        <h3 style={{ marginLeft: "18%" }}>Login</h3>
                        <span style={{ marginLeft: "55%" }}>with</span>
                        <div className='social'>
                            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                                <FaGoogle style={{ marginLeft: "44%", color: "blue", width: "40px", height: "40px", fontSize: "12px", padding: "8px", borderRadius: "50%", border: "1px solid orange" }} />
                                <FaFacebookF style={{ marginLeft: "8%", color: "blue", width: "40px", height: "40px", fontSize: "12px", padding: "8px", borderRadius: "50%", border: "1px solid orange" }} />

                            </div>
                            <span style={{ marginLeft: "55%" }}>Or</span>

                            <p style={{ marginLeft: "11.1%", marginTop: "20px" }}>Please enter username and password to log in to your account.</p>


                        <form action="" onSubmit={loginSubmit}  style={{ float: "left", marginLeft: "8%" }}>
                           
                           
                            <div>
                            <input onChange={handleInput} value={loginInput.email} name='email' style={{ width: "100%", marginTop: "5px", borderRadius: "15px", paddingTop:"6px",paddingBottom:"6px",paddingLeft:"10px",border:"1px solid lightgray" }} placeholder="Email" type="email" />
                            </div>
                            <p style={{color:"red"}}>{errors.email}</p>
                            <div>
                            <input onChange={handleInput} value={loginInput.password} name='password' style={{ width: "100%",  borderRadius: "15px", paddingTop:"6px",paddingBottom:"6px",paddingLeft:"10px",border:"1px solid lightgray" }} placeholder="password" type="password" />
                            </div>
                            <p style={{color:"red"}}>{errors.password}</p>
                            <p style={{ marginLeft: "350px" }}>Forgot Password?</p>


                    <div >
                    {loading&&(
                        <button type="submit" style={{
                                  width: "500px", borderRadius: "15px", marginTop: "0px", paddingtop: "5px", paddingBottom: "5px"
                                  , border: "1px solid white", background: "#f8b609", color: "white", marginBottom: "10px"
                                }}>     

                                    <div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                                    <div style={{display:"flex", flexDirection:"row"}}>
                                    <Oval  height="20"
                                      width="20"
                                      color='white'
                                      ariaLabel='loading'/>
                                <span style={{fontSize:"20px"}}>Logging In...</span>
                            </div>
                        </div>
                    </button>
                    )}
                    {!loading && (
                        
                        <button type="submit" style={{
                          width: "500px", borderRadius: "15px", marginTop: "0px", paddingtop: "5px", paddingBottom: "5px"
                          , border: "1px solid white", background: "#f8b609", color: "white", marginBottom: "10px"
                      }}>Login</button>

                    )}
                    </div>
                        <p>Don't have an account?<Link style={{ textDecoration: 'none', color: "red", marginLeft: "10px" }} to={"/Register"}>Sign up </Link></p>

                        </form>

 
                        </div>

                    </div>
                    <div className='pic'>
                        <img src={back} alt="" style={{ width: "600px", marginTop: "40px", borderRadius: "15px" }} />
                    </div>

                </div>
        </div>
    );
}

export default Login;
   