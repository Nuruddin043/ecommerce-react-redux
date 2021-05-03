import React,{useReducer,useState,useEffect} from "react";
import {
  Avatar,
  CssBaseline,
  Typography,
  Container,
  Box,
  Grid,
  makeStyles,
  Button,Collapse,IconButton
} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import {Link as RouteLink} from 'react-router-dom'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {userLogin} from '../../store/action/userAction'
import {useSelector} from 'react-redux'
import {setNotificationDisplay} from '../../store/action/notificationAction'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const LogIn = () => {
  
  const dispatch=useDispatch()
  const classes = useStyles();
  const session=useSelector((state)=>state.sessionStore)
  const history=useHistory();
  const notification=useSelector((state)=>state.notificationStore)   

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email:"",password:""
    }
  );
  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const submitForm=(evt)=>{
    evt.preventDefault();

    dispatch(userLogin(formInput))
    if(session.token){
      history.push('/');
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
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
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <ValidatorForm  onSubmit={submitForm}>
          <Grid container spacing={2}>
              
            <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  value={formInput.email}
                  fullWidth
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleInput}
                  validators={['required', 'isEmail']}
                  errorMessages={['this field is required', 'email is not valid']}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleInput}
                />
              </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <RouteLink to="/signup" style={{color:"white"}}>
                Don't have an account? Sign up
              </RouteLink>
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
      <Box mt={5}>

      </Box>
    </Container>
  );
};

export default LogIn;
