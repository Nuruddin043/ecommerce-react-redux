import {ActionTypes} from '../types';

export const addSessionData=(data)=>async(dispatch,getStore)=>{
    dispatch(storeSession(data)) 
}



export const addSessionData2=()=>async(dispatch,getStore)=>{
    const data=JSON.parse(sessionStorage.getItem('jwtToken'));
    if(data){
        dispatch(storeSession(data)) 
    }
    
}

const storeSession=(data)=>{
    return {
        type:ActionTypes.STORE_SESSION,
        payload:data
    }
}