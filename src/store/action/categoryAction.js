import axios from 'axios';
import {ActionTypes} from '../types'
import {Config} from '../../config'
export const storeAllCategory=()=>async(dispatch,getStore)=>{
    let {data}=await axios.get(Config.BASE_URL+'/category')
    dispatch(storeCategory(data))
}

const storeCategory=(data)=>{
    return {
        type:ActionTypes.STORE_ALL_CATEGORY,
        payload:data
    }
}