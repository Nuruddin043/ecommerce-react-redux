import React from "react";
import { Toolbar, Typography, Button, Container,Grid,MenuItem } from "@material-ui/core";
import {useHistory} from 'react-router-dom'


const Navigation = () => {
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
              <MenuItem onClick={() => routePage("/")}> Product</MenuItem>
            </Grid>
            <Grid item>
              <MenuItem onClick={() => routePage("/cart")}>
                Cart
              </MenuItem>
            </Grid>
          </Grid>

          <Grid container justify="flex-end">
     
            <Grid item>
              <MenuItem onClick={() => routePage("/")}> Total Item:0</MenuItem>
            </Grid>
           
           
          </Grid>
        </Toolbar>
    </Container>
    </>
  );
};

export default Navigation;
