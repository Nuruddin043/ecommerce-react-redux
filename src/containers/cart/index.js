import React, { useEffect,useState } from 'react';
import {Container,Grid,Card,CardActionArea,Button,CardContent,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector,useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import {checkoutOrder} from '../../store/action/cartAction'


const useStyles = makeStyles({
  root: {
    height: "100%",
    width:"100%",
    margin:'auto'
  },
  media: {
    height: 300,
    width: '100%'
  }
});


const Product=()=>{

  const dispatch=useDispatch()
  const [total_price, setTotal_price] = useState(0)
  const {count,productList}=useSelector((state)=>state.cartStore)
  const classes = useStyles();
  const history = useHistory()

  const handleClick = (id) => {
    history.push(`/product_detail/${id}`);
  };
  useEffect(()=>{
    let total=0;
    if(count>0){
      productList.forEach(obj => {
        total+=obj.productId.price;
      });
      setTotal_price(total)
    }
  },[])
  const checkout=()=>{
    dispatch(checkoutOrder())
    history.push('/order')
  }

    return (    
        <Container>
            {productList && productList.map((product, index) => {
                   return <Grid item md={12} sm={12} spacing={2} container justify="center" alignItems="center" style={{marginTop:'10px'}}>
                            <Grid item md={8} sm={8} key={index} >
                                <Card className={classes.root}>
                                  <CardActionArea onClick={()=>handleClick(product.productId._id)}>
                                    <CardContent>
                                      <Typography gutterBottom variant="h6" style={{fontSize:'16px'}} >
                                        {product.productId.title} <br /> 
                                        Quantity: <b>{product.quantity}</b>  
                                      </Typography>
                                      <br />
                                      <Typography variant="subtitle1">
                                      Pirce: ${product.productId.price}
                                      </Typography>
                                    </CardContent>
                                  </CardActionArea>
                                </Card>
                            </Grid>
                     </Grid>          
            })}
            
                            
                           {count>0 &&
                           <Grid item md={12} sm={12} spacing={2} container justify="center" alignItems="center" style={{marginTop:'10px'}}>
                              <Grid item md={8} sm={8} >
                                  <Card className={classes.root}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" style={{fontSize:'16px'}} >
                                          Total Price: <b>${total_price}</b>  
                                        </Typography>
                                        
                                      </CardContent>
                                  </Card>
                              </Grid>
                              <Grid item md={8} sm={8} >
                                    <Button variant="contained" color="secondary" onClick={checkout}>Checkout<ShoppingCartIcon /></Button>
                                </Grid>
                            </Grid> 
                            } 
           
      
        </Container>
    )
}


export default Product;