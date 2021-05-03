import React,{useEffect} from 'react';
import {Container,Grid,CircularProgress,Card,CardActionArea,CardMedia,CardContent,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory,useParams } from "react-router-dom";
import { useSelector,useDispatch} from 'react-redux'
import {storeProductByCat} from '../../store/action/productAction'


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

const ProductByCategory=()=>{
  const dispatch=useDispatch()
  const params=useParams()
  const {productBycat}=useSelector((state)=>state.productStore)
  const {loading}=useSelector((state)=>state.loaderStore)

  const classes = useStyles();
  const history = useHistory()

   useEffect(()=>{
     dispatch(storeProductByCat(params.category_id))
    
   },[params])

   const handleClick = (id) => {
      history.push(`/product_detail/${id}`);
  };

    return (    
        <Container>
        {loading && <CircularProgress  style={{marginLeft: '50%',marginTop:'30%'}} />}
        <Grid container spacing={2} style={{marginTop:'10px'}}>
            {productBycat && productBycat.map((product, index) => {
                   return <Grid item md={4} sm={6} key={index} >
                    <Card className={classes.root}>
                      <CardActionArea onClick={()=>handleClick(product._id)}>
                        <CardMedia
                          className={classes.media}
                          image={'http://127.0.0.1:8080'+product.image}
                    
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


export default ProductByCategory;