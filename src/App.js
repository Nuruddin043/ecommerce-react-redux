import React from 'react';
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

function App() {
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
            <Route exact path={'/cart'}>
              <Cart /> 
            </Route>
            <Route exact path={'/login'}>
              <LogIn /> 
            </Route>
            <Route exact path={'/signup'}>
              <SignUp /> 
            </Route>
            <Route exact path={'/order'}>
              <Order /> 
            </Route>
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
