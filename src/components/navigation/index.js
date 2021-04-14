import React,{useState,useEffect} from "react";
import { Toolbar, Container,Grid,MenuItem } from "@material-ui/core";
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navigation = () => {
  const {count}=useSelector((state)=>state.cartStore)
    const history=useHistory(false);
    const [isLogin,setLogin]=useState()
    const routePage=(url)=>{
        history.push(url)
  }
  useEffect(()=>{
    let isAuth;
    let userInfo=JSON.parse(sessionStorage.getItem('jwtToken'));
    if(userInfo){
      setLogin(true)
    }else{
      setLogin(false)
    }
   },[])
    
    const logOut=()=>{
      sessionStorage.removeItem('jwtToken')
      setLogin(false)
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
              <MenuItem onClick={() => routePage("/cart")}> Total Item:{count}</MenuItem>
            </Grid>
            <Grid item>
             {isLogin?<MenuItem onClick={logOut}> Logout</MenuItem>:<MenuItem onClick={() => routePage("/login")}> Log In</MenuItem>} 
            </Grid>
           
          </Grid>
        </Toolbar>
    </Container>
    </>
  );
};

export default Navigation;
