import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Container,CircularProgress,Card,CardMedia,CardContent,Typography,CardActions,Button,Collapse,IconButton} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux'
import  {useHistory} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import {storeSingleProduct} from '../../store/action/productAction'
import {addToCart} from '../../store/action/cartAction'
import {setNotificationDisplay} from '../../store/action/notificationAction'
const useStyles = makeStyles({
    root: {
        marginTop:20
    },
});

const ProductDetail=()=>{
    
    const dispatch=useDispatch()
    const history=useHistory()
    const {selectedProduct}=useSelector((state)=>state.productStore)
    const {loading}=useSelector((state)=>state.loaderStore)
    const notification=useSelector((state)=>state.notificationStore)     
    const session=useSelector((state)=>state.sessionStore)

    const classes = useStyles();
    const params=useParams()

    let {id}=params
    useEffect(() => {
        dispatch(storeSingleProduct(id))
    }, [id])
    const add_product=()=>{

        if(session.token && session.expire_at>new Date().valueOf()){
            dispatch(addToCart(selectedProduct))
            
        }else{
            history.push('/login')
        }
        
    }
    const setDisplay=()=>{
        dispatch(setNotificationDisplay())
      }
      useEffect(()=>{
        return(()=>{
          dispatch(setNotificationDisplay())
        })
      },[])

    return (
        <Container>
                {loading && <CircularProgress  style={{marginLeft: '50%',marginTop:'30%'}} />}
                <Collapse in={notification.display}>
                    <Alert severity="error"
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setDisplay();
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    >
                    {notification.message}
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
                        <Button size="small" color="primary" variant="contained" onClick={add_product}>
                            Add To Cart
                        </Button>
                    </CardActions>
                </Card>
                }
        </Container>
    )
}


export default ProductDetail;