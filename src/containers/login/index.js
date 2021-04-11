import React,{useReducer,useEffect,useState} from "react";
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
import axios  from 'axios';
import {useHistory} from 'react-router-dom';

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
  const classes = useStyles();
  const [open, setOpen] =useState(false);
  const [msg, setMsg] =useState('');
  const history=useHistory();

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

    axios.post('http://127.0.0.1:8080/signin',{
      email: formInput.email,
      password: formInput.password,
      
    }).then((res)=>{
        if(res.data.message==="Wrong Password"){
          setMsg('Wrong Password');
          setOpen(true);
        }else if(res.data.userInfo){
          sessionStorage.setItem('jwtToken',JSON.stringify(res.data.userInfo));
          history.push('/');
        }else{
          setMsg('User not found');
          setOpen(true);
        }
        
    }).catch((e)=>{
      setMsg('Server error...');
      setOpen(true);
    })

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Collapse in={open}>
        <Alert severity="error"
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
              <RouteLink to="/signup" >
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
