const initial={
    selectedProduct:{},
    productList:[]
}

const productReducer=(state=initial,action)=>{
    switch(action.type){
        case 'SELECTED_PRODUCT':
            return {...state,selectedProduct:action.payload}
        case 'STORE_ALL_PRODUCT':
            return {...state,productList:action.payload}
        default:
            return state
    }

}

export default productReducer;