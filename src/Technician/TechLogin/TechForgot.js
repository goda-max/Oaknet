import React from 'react';
import { Formik, Form } from 'formik';
import {Formi} from './Formi';
import * as Yup from 'yup';
import {Link} from "react-router-dom";
import back from "../../Assets/images/bgimage.jpeg";
import { FaArrowLeft } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";

function TechForgot() {


const validate = Yup.object({
 
    email: Yup.string()
    .email("Email is invalid")
    .required('Email field is required'),
})

    return ( 
        <Formik
        
        initialValues={{
           
            email:"",
        }}
        validationSchema={validate}
        >
         {formik => (
                    <div className='whole' style={{marginLeft:"15%", marginTop:"10%"}}>
                         <div className='pic' style={{}}>
                            <img src={back} alt="" style={{width:"600px", float:"left",  marginTop:"40px", borderRadius:"15px"}} />
                         </div>
         
                         <div className='content' style={{}}>
                             <FaArrowLeft style={{fontSize:"20px", marginLeft:"50px", marginTop:"5%"}}/>
                             <h2 style={{marginLeft:"50%"}}>Forgot Password?</h2>
                             <FaUserLock style={{fontSize:"100px", marginLeft:"18%", marginTop:"20px",marginBottom:"20px"}} />
                            <div className='social'>
                                   
                                    <Form style={{float:"left", marginLeft:"8%"}}>
                                        < Formi style={{ width:"400px", marginTop:"20px",borderRadius:"15px"}} label="name" name="email" type="email"  placeholder="Enter the recovery email" />
                                   
                                        <button text="submit" style={{width:"400px",borderRadius:"15px", marginTop:"20px", paddingtop:"5px",paddingBottom:"5px"
                                        ,border:"1px solid white",background:"#f8b609", color:"white",marginBottom:"10px"}}>SUbmit</button>

                                    </Form>
                             </div>
                         </div>
                     </div>
         )}

        </Formik>
     );
}

export default TechForgot;