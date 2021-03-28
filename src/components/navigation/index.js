import React from "react";
import { Toolbar, Typography, Button, Container,Grid,MenuItem } from "@material-ui/core";
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navigation = () => {
  const {count}=useSelector((state)=>state.cartStore)
    const history=useHistory()
    const routePage=(url)=>{
        history.push(url)
    }
  return (
    <>
    <Container>
      <Toolbar>
          <Grid container justify="flex-start">
         
            <Grid item>
              <MenuItem onClick={() => routePage("/")}> Home</MenuItem>
            </Grid>
       
            <Grid item>
              <MenuItem onClick={() => routePage("/cart")}>
                Cart
              </MenuItem>
            </Grid>
          </Grid>

          <Grid container justify="flex-end">
     
            <Grid item>
              <MenuItem onClick={() => routePage("/")}> Total Item:{count}</MenuItem>
            </Grid>
           
           
          </Grid>
        </Toolbar>
    </Container>
    </>
  );
};

export default Navigation;
