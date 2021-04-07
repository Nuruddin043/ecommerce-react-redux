import {ActionTypes} from '../types'
const initial={
    selectedProduct:{},
    productList:[]
}

const productReducer=(state=initial,action)=>{
    switch(action.type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,selectedProduct:action.payload}
        case ActionTypes.STORE_ALL_PRODUCT:
            return {...state,productList:action.payload}
        default:
            return state
    }

}

export default productReducer;