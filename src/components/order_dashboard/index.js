import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getAllorderinfo} from ''
const OrderDashboard = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllorderinfo());
    },[])
    return ( <>
    
    </>
     );
}
 
export default OrderDashboard;