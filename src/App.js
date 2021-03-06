import React ,{useEffect}from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Layout from '../src/components/layout'
import Product from '../src/containers/product'
import NotFound from '../src/containers/not_found'
import Cart from '../src/containers/cart'
import ProductDetail from '../src/containers/product_details';
import Order from '../src/containers/order';
import LogIn from '../src/containers/login';
import SignUp from '../src/containers/signup';
import PrivateRoute from './privateRoute'
import PublicRoute from './publicRoute'
import Dashboard from '../src/containers/dashboard'
import ProductByCategory from '../src/containers/product_by_category'
import {addSessionData2} from  '../src/store/action/sessionAction'
import {useDispatch} from 'react-redux'
function App() {
   const dispatch=useDispatch()
   useEffect(() => {
      dispatch(addSessionData2())
  }, [])
  return (
    <Router>
      <Layout>
        <Switch>
            <Route exact path={'/'}> 
                  <Product />
            </Route>
            <Route exact path={'/product_detail/:id'}>
                <ProductDetail />
            </Route>
            <PrivateRoute exact path={"/cart"} component={Cart} />
            <Route exact path={'/products/category/:category_id'}>
              <ProductByCategory />
            </Route>
            <PublicRoute restricted={true} component={LogIn} path="/login" exact />
            <PublicRoute restricted={true} component={SignUp} path="/signup" exact />
            <PrivateRoute exact path={"/dashboard"} component={Dashboard} />
            <PrivateRoute exact path={"/order"} component={Order} />
            <Route exact path={'/404'}>
              <NotFound />
            </Route>
            <Route  exact path={'*'}>
              <Redirect to={'/404'}></Redirect>
            </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
