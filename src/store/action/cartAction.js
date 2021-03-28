import {ActionTypes} from '../types'

export const addToCart=(data)=>{
    return {
        type:ActionTypes.ADD_TO_CART,
        payload:data
    }
}