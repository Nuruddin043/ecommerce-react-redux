import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import CartReducer from './reducer/cartReducer';
import productReducer from './reducer/productReducer';
import loaderReducer from './reducer/loaderReducer'
import thunk from 'redux-thunk'
const mainReducer=combineReducers({
    cartStore:CartReducer,
    productStore:productReducer,
    loaderStore:loaderReducer
})

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(mainReducer,composeEnhancers(applyMiddleware(thunk)));
export default store;