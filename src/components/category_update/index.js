
// const CateogryUpdate = () => {
//     return ( <> category </> );
// }
 
// export default CateogryUpdate;

import React,{useReducer,useState} from "react";
import {

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

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios  from 'axios';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CategoryForm = () => {
  const classes = useStyles();
  const [open, setOpen] =useState(false);
  const [msg, setMsg] =useState('');
     
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name:"",description:"",image:""
    }
  );
  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const convertImage=e=>{
    const name = e.target.name;
    getBase64(e.target.files[0]).then(result => {
        setFormInput({ [name]: result });
    })
    
  }
  const getBase64 = file => {
    return new Promise(resolve => {
      let baseURL = "";
      let reader = new FileReader();

      reader.readAsDataURL(file);
       reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
    };

  const submitForm=(evt)=>{
    evt.preventDefault();
    let user=JSON.parse(sessionStorage.getItem('jwtToken'));
    let token=user.token
    let category_id=''
    axios.patch(`http://127.0.0.1:8080/category/${category_id}`,{
        name: formInput.name,
        description: formInput.description,
        image:formInput.image
    },{
        headers: {
          'authorization': `bearer ${token}` 
        }
      }).then((res)=>{
        setMsg('Added new category.');
        setOpen(true);
        
    }).catch((e)=>{
      setMsg(e.response.data.error);
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
   
        <Typography component="h1" variant="h5">
         Update Category
        </Typography>
        <ValidatorForm  onSubmit={submitForm}>
          <Grid container spacing={2}>
              
             <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  value={formInput.title}
                  fullWidth
                  required
                  label="Category title"
                  name="name"
                  onChange={handleInput}
                />
              </Grid>
       
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  value={formInput.description}
                  fullWidth
                  required
                  label="Category description"
                  name="description"
                  onChange={handleInput}
                />
              </Grid>  
  
              <Grid item xs={12}>
              <input type="file" name="image" required  onChange={convertImage}/>
                
              </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update Category
          </Button>
        
        </ValidatorForm>
      </div>
      <Box mt={5}>

      </Box>
    </Container>
  );
};

export default CategoryForm;
