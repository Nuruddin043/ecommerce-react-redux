import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Container,CircularProgress,Card,CardMedia,CardContent,Typography,CardActions,Button,Collapse,IconButton} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux'
import  {useHistory} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import axios  from 'axios';
import {storeSingleProduct} from '../../store/action/productAction'
const useStyles = makeStyles({
    root: {
        marginTop:20
    },
});

const ProductDetail=()=>{
    const {count,productList}=useSelector((state)=>state.cartStore)
    const [open, setOpen] =useState(false);
    const [msg, setMsg] =useState('');
    const dispatch=useDispatch()
    const history=useHistory()
    const {selectedProduct}=useSelector((state)=>state.productStore)
    const {loading}=useSelector((state)=>state.loaderStore)

    const classes = useStyles();
    const params=useParams()

    let {id}=params
    useEffect(() => {
        dispatch(storeSingleProduct(id))
    }, [id])
    const addToCart=()=>{
        let user=JSON.parse(sessionStorage.getItem('jwtToken'));
        if(!user){
            history.push('/login')
        }else{
            let token=user.token
            dispatch({
                type:'ADD_TO_CART',
                payload:{
                    count:count? count+1 :1,
                    productList:productList?productList.concat(selectedProduct) :[...selectedProduct]
                }
            })
            axios.post('http://127.0.0.1:8080/cart',{
                product:{
                    id: selectedProduct._id,
                    quantity : 1
                },
            },{
                headers: {
                'authorization': `bearer ${token}` 
                }
            }).then((res)=>{
                setMsg('Product added to cart.');
                setOpen(true);
                
            }).catch((e)=>{
               setMsg(e.response.data.error);
            setOpen(true);
            })
            
        }
        
    }
    return (
        <Container>
                {loading && <CircularProgress  style={{marginLeft: '50%',marginTop:'30%'}} />}
                <Collapse in={open}>
                    <Alert severity="success"
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    >
                    {msg}
                    </Alert>
                </Collapse>
                {selectedProduct.hasOwnProperty('title') &&

                <Card className={classes.root}>
                 
                        <CardMedia
                            component="img"
                            alt={selectedProduct.title}
                            height="400"
                            image={'http://127.0.0.1:8080'+selectedProduct.image}
                            title={selectedProduct.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {selectedProduct.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                             {selectedProduct.description}
                             {selectedProduct.category.name}
                             <br />
                            </Typography>
                            <Typography variant="h6" color="primary" component="p">
                                price: ${selectedProduct.price} 
                            </Typography>
                            
                            
                        </CardContent>
                        
                        <CardActions>
                        <Button size="small" color="primary" variant="contained" onClick={addToCart}>
                            Add To Cart
                        </Button>
                    </CardActions>
                </Card>
                }
        </Container>
    )
}


export default ProductDetail;