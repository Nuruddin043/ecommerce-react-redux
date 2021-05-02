import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import CartReducer from './reducer/cartReducer';
import productReducer from './reducer/productReducer';
import loaderReducer from './reducer/loaderReducer'
import sessionReducer from './reducer/sessionReducer';
import categoryReducer from './reducer/categoryReducer';
import notificationReducer from './reducer/notificationReducer';
import orderReducer from './reducer/orderReducer';
import userReducer from './reducer/userReducer';

import thunk from 'redux-thunk'
const mainReducer=combineReducers({
    cartStore:CartReducer,
    productStore:productReducer,
    loaderStore:loaderReducer,
    sessionStore:sessionReducer,
    categoryStore:categoryReducer,
    notificationStore:notificationReducer,
    orderStore:orderReducer,
    userStore:userReducer
})

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(mainReducer,composeEnhancers(applyMiddleware(thunk)));
export default store;