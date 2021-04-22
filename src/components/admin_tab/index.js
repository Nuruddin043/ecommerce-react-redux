import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProductDashboard from '../../components/product_dashboard'
import CategoryDashboard from '../../components/category_dashboard'
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AdminTab() {
  const classes = useStyles();

  const allTabs = ['/admin/category', '/admin/product', '/admin/order','/admin/user'];
  return (
    <div className={classes.root}>


      <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <>
              <Tabs value={location.pathname}>
                <Tab label="Category" value="/admin/category" component={Link} to={allTabs[0]} />
                <Tab label="Product" value="/admin/product" component={Link} to={allTabs[1]} />
                <Tab label="Order" value="/admin/order" component={Link} to={allTabs[2]} />
                <Tab label="User" value="/admin/user" component={Link} to={allTabs[2]} />
              
              </Tabs>
              <Switch>
                <Route path={allTabs[0]} render={() => <ProductDashboard />} />
                <Route path={allTabs[1]} render={() => <CategoryDashboard />} />
                <Route path={allTabs[2]} render={() => <div>Order</div>} />
                <Route path={allTabs[3]} render={() => <div>User</div>} />
              </Switch>
            </>
          )}
        />
      </div>
    </BrowserRouter>
    </div>
  );
}
