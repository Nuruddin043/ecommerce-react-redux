import {ActionTypes} from '../types'
export const storeAllProduct=(data)=>{
    return {
        type:ActionTypes.STORE_ALL_PRODUCT,
        payload:data
    }
}

export const storeSingleProduct=(data)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:data
    }
}