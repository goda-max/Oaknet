import React from 'react';
import Sidebar from '../../components/Sidebar'
import IfOrdered from './ifOrdered';
import ProfileNav from '../../components/profileNav';

function ScheduledOrder() {               
   return (
    <div>
        <Sidebar/>
        <div className='container'>
        <ProfileNav profile="Nicole"/>
            <IfOrdered schedule={true}/>
        </div>
    </div>
   )
    
}
export default ScheduledOrder;