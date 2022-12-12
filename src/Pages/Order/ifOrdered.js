 import React from "react";
import * as fa from "react-icons/fa";
import Table from 'react-bootstrap/Table'
import { IsScheduled,NotScheduled } from "./orderedOrNot";

function IfOrdered({schedule}){
      
    if (!schedule){
        return <NotScheduled/>
    }
    return <IsScheduled/>
    
    
}


export default IfOrdered; 