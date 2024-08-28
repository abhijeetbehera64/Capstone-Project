import React from 'react';
import { useFormik } from 'formik';
import { Box,Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

const validate = (values)=>{
    const errors = {};
   
    if (!values.Name) {
    errors.Name= "Username is a required field";
  }
  if (!values.password) {
    errors.password = 'Password is a required field';
  } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/i.test(values.password)) {
    errors.password = 'Invalid password';
  }
  
    return errors;
  };
 
   const JLoginForm = () => {
    const navigate = useNavigate();
    const formik = useFormik({
       initialValues: {
         Name: '',
         password: '',
       },
       validate,
       onSubmit: (values) => {
         console.log(values.password)
         navigate(`/Jvalidate/${values.Name}/${values.password}`)
       },
    });
   
    return (
        <div className='div0'> 
        <div className='centre'>
       <form onSubmit={formik.handleSubmit}>
         <div>
           <label htmlFor="Name">User Name:</label>&nbsp;
           <input
             id="Name"
             name="Name"
             type="Name"
             onChange={formik.handleChange}
             value={formik.values.Name}
           />
           {formik.errors.Name ? <div>{formik.errors.Name}</div> : null}
         </div>
         <div>
            <br />
           <label htmlFor="password">Password:</label>&nbsp;&nbsp;&nbsp;
           <input
             id="password"
             name="password"
             type="password"
             onChange={formik.handleChange}
             value={formik.values.password}
           />
           {formik.errors.password ? <div>{formik.errors.password}</div> : null}
         </div><br />
         <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center">
            <Button variant="contained" startIcon={<LoginIcon />} type="submit">LOGIN</Button>
        </Box>
       </form>
       </div>
       </div>
    );
   };
   export default JLoginForm ;
