import {ActionTypes} from '../types'

export const setLoader=(data)=>{
    return {
        type:ActionTypes.LOADER,
        payload:data
    }
}