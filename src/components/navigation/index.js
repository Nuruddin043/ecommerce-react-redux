import React,{useEffect,useState} from "react";
import { Toolbar, Container,Grid,MenuItem ,Menu,Button} from "@material-ui/core";
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import {addSessionData} from '../../store/action/sessionAction'
import {storeAllCategory} from '../../store/action/categoryAction'
const Navigation = () => {
   const {count}=useSelector((state)=>state.cartStore)
   const session=useSelector((state)=>state.sessionStore)
   const categories=useSelector((state)=>state.categoryStore)

    const history=useHistory(false);
    const dispatch=useDispatch()
    const routePage=(url)=>{
        history.push(url)
    }
    useEffect(() => {
      dispatch(storeAllCategory())
    }, [])
    
    const logOut=()=>{
      sessionStorage.removeItem('jwtToken')
      dispatch(addSessionData({token:'',role:'',expire_at:''}))
    
    }
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState()

    const recordButtonPosition = (event) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    }

    let routePage2 = (url) => {
        history.push(url)
        setMenuOpen(false);
    }
    let closeMenu=()=>{
      setMenuOpen(false);
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
                <>
                  <MenuItem onClick={recordButtonPosition}>
                     Categories
                  </MenuItem>
                  <Menu
                      anchorEl={anchorEl}
                      open={menuOpen}
                      onClose={closeMenu} >
                      {categories.category_list.length>0 && categories.category_list.map((category,index)=>{
                        return <MenuItem onClick={()=>routePage2(`/products/category/${category._id}`)} key={index}> {category.name} </MenuItem>
                      })}

                  </Menu>
                  
              </>
            </Grid>
          </Grid>

          <Grid container justify="flex-end">
     
            <Grid item>
              <MenuItem onClick={() => routePage("/cart")}>Cart ({count})</MenuItem>
            </Grid>
            <Grid item>
             {session.role=="admin" && session.expire_at>new Date().valueOf() &&<MenuItem onClick={() => routePage("/dashboard")}> Dashboard</MenuItem>} 
            </Grid>
            <Grid item>
             {session.token && session.expire_at>new Date().valueOf()?<MenuItem onClick={logOut}> Logout</MenuItem>:<MenuItem onClick={() => routePage("/login")}> Log In</MenuItem>} 
            </Grid>
           
          </Grid>
        </Toolbar>
    </Container>
    </>
  );
};

export default Navigation;
