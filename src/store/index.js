import {createStore,combineReducers,compose} from 'redux';
import CartReducer from './reducer/cartReducer';
import productReducer from './reducer/productReducer'
const mainReducer=combineReducers({
    cartStore:CartReducer,
    productStore:productReducer
})

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(mainReducer,composeEnhancers());
export default store;