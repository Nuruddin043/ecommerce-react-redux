import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import {Container,Grid,CircularProgress,Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginTop:20
    },
});

const ProductDetail=()=>{
    const classes = useStyles();
    const params=useParams()
    const [product, setProduct] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        async function getData(){
            try{
                let product_id=params.id
                const {data}=await axios.get(`http://54.162.199.74/products/${product_id}`)
              
                setProduct(data)
                setLoading(false)
                
            }catch(e){
                console.log(e)
            }
        }
        getData()
    }, [])
    console.log(params)
    return (
        <Container>
                {loading && <CircularProgress  style={{marginLeft: '50%',marginTop:'30%'}} />}
                {product.hasOwnProperty('title') &&

                <Card className={classes.root}>
                 
                        <CardMedia
                            component="img"
                            alt={product.title}
                            height="400"
                            image={product.image}
                            title={product.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {product.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                             {product.description}
                             {product.category}
                             <br />
                            </Typography>
                            <Typography variant="h6" color="primary" component="p">
                                price: ${product.price} 
                            </Typography>
                            
                            
                        </CardContent>
                        
                        <CardActions>
                        <Button size="small" color="primary" variant="contained">
                            Add To Cart
                        </Button>
                    </CardActions>
                </Card>
                }
        </Container>
    )
}


export default ProductDetail;