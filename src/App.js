import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Layout from '../src/components/layout'
import Product from '../src/containers/product'
import NotFound from '../src/containers/not_found'
import Cart from '../src/containers/cart'
import ProductDetail from '../src/containers/product_details'

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
