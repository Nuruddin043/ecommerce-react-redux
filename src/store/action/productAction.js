import {ActionTypes} from '../types';
import axios from 'axios';
import {setLoader} from './loaderAction'
import {Config} from '../../config'
export const storeAllProduct=()=>async(dispatch,getStore)=>{
    dispatch(setLoader(true));
    let {data}=await axios.get(Config.BASE_URL+'/products')
    dispatch(storeProductList(data));
    dispatch(setLoader(false));
}

export const storeSingleProduct=(id)=>async(dispatch,getStore)=>{
    dispatch(setLoader(true));
    let {data}=await axios.get(`${Config.BASE_URL}/products/${id}`)
    dispatch(storeProduct(data));
    dispatch(setLoader(false));
}

export const storeProductByCat=(cat_id)=>async(dispatch,getStore)=>{
    dispatch(setLoader(true));
    let {data}=await axios.get(Config.BASE_URL+`/products/category/${cat_id}`)
    dispatch(storeProductForcategory(data));
    dispatch(setLoader(false));
}
export const addNewProduct=(data)=>async(dispatch,getStore)=>{
    dispatch(setLoader(true));


    dispatch(setLoader(false));
}


const storeProductList=(data)=>{
    return {
        type:ActionTypes.STORE_ALL_PRODUCT,
        payload:data
    }
}
const storeProductForcategory=(data)=>{
    return {
        type:ActionTypes.STORE_PRODUCT_BY_CATEGORY,
        payload:data
    }
}

const storeProduct=(data)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:data
    }
}

const addProduct=(data)=>{
    return {
        type:ActionTypes.ADD_NEW_PRODUCT,
        payload:data
    }
}
