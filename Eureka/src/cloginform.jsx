import React from 'react';
import { useFormik } from 'formik';
import { Box,Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

const validate = (values)=>{
    const errors = {};
   
    if (!values.email) 
    {
    errors.email= "Email is a required field";
    }
   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) 
    errors.email = 'Invalid Email'
  if (!values.password) {
    errors.password = 'Password is a required field';
  }
  // } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/i.test(values.password)) {
  //   errors.password = 'Should include one uppercase,one lowercase,one numeric,one special symbol,minimum eight characters and maximum sixteen characters';
  // }
  
    return errors;
  };
   const LoginForm = () => {
    const navigate = useNavigate();
    const formik = useFormik({
       initialValues: {
         email: '',
         password: '',
       },
       validate,
       onSubmit: (values) => {
        //  alert(JSON.stringify(values, null, 2));
        alert('Contact Administrartor To Post Jobs and update Applications')
         console.log(values)
         navigate(`/CompanyValidate/${values.email}/${values.password}`)
       },
    });
   
    return (
        <div className='div0'> 
        <div className='centre'>
       <form onSubmit={formik.handleSubmit}>
         <div>
           <label htmlFor="email">Company Email:</label>&nbsp;&nbsp;&nbsp;
           <input
             id="email"
             name="email"
             type="email"
             onChange={formik.handleChange}
             value={formik.values.email}
           />
           {formik.errors.email ? <div>{formik.errors.email}</div> : null}
         </div>
         <div>
            <br />
           <label htmlFor="password">Password:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <input
             id="password"
             name="password"
             type="password"
             onChange={formik.handleChange}
             value={formik.values.password}
           />
           {formik.errors.password ? <div>{formik.errors.password}</div> : null}
         </div>
         <br/>
       
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
   export default LoginForm ;