import React,{useEffect,useState} from 'react';
import {Container,Grid,CircularProgress,Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { useHistory } from "react-router-dom";

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
  const classes = useStyles();
  const history = useHistory()
  const [productList,setProductList]=useState([])
  const [loading,setLoading]=useState(true)


   useEffect(()=>{
    let url="http://54.162.199.74/products"
    axios.get(url).then((data)=>{
      setProductList(data.data)
      setLoading(false)
    }).catch((e)=>{
      console.log(e)
    })
   },[])

   const handleClick = (id) => {
      history.push(`/product_detail/${id}`);
  };

    return (    
        <Container>
        {loading && <CircularProgress  style={{marginLeft: '50%',marginTop:'30%'}} />}
        <Grid container spacing={2} style={{marginTop:'10px'}}>
            {productList.length>0 && productList.map((product, index) => {
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