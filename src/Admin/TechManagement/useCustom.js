import axios from 'axios';
import { useEffect, useState } from 'react';


function useCustom(url) {
   

    const [error, seterror] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setdata] = useState([]);
 
  useEffect (() =>{
 
    setLoading(true);
     axios.get(url).then(res=>{
         
        setdata(res.data)
 
    })
 .catch((e) =>{
    seterror(e);
 }).finally(() =>{
    setLoading(false);
 });
    
 
  }, [url]);
 

   return {data, loading, error};
 
}

export default useCustom;