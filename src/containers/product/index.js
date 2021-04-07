import React,{useEffect} from 'react';
import {Container,Grid,CircularProgress,Card,CardActionArea,CardMedia,CardContent,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch} from 'react-redux'
import {storeAllProduct} from '../../store/action/productAction'

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
  const {productList}=useSelector((state)=>state.productStore)
  const {loading}=useSelector((state)=>state.loaderStore)

  const classes = useStyles();
  const history = useHistory()

   useEffect(()=>{
    dispatch(storeAllProduct())
   },[])

   const handleClick = (id) => {
      history.push(`/product_detail/${id}`);
  };

    return (    
        <Container>
        {loading && <CircularProgress  style={{marginLeft: '50%',marginTop:'30%'}} />}
        <Grid container spacing={2} style={{marginTop:'10px'}}>
            {productList && productList.map((product, index) => {
                   return <Grid item md={4} sm={6} key={index} >
                    <Card className={classes.root}>
                      <CardActionArea onClick={()=>handleClick(product.id)}>
                        <CardMedia
                          className={classes.media}
                          image={product.image}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" style={{fontSize:'16px'}} >
                            {product.title}
                          </Typography>
                          <br />
                          <Typography variant="subtitle1" color="primary">
                             Price: ${product.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                 </Grid>
                          
            })}
        </Grid>
         
    
        </Container>
    )
}


export default Product;