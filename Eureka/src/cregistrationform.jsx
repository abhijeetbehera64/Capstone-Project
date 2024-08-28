import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import '../src/index.css'
import { Box,Button } from '@mui/material';
import axios from 'axios';


const validate = (values)=>{
    const errors = {};
  if (!values.name) {
    errors.name = 'Company Name is a required field';
  } 
  //  else if (!/^[A-Za-z]*$/.test(values.name))
  // { 
  //    errors.name = 'Username should start with a capital letter'; 
  // }
//   if(/^[0-9._%+-]*$/.test(values.name))
//  {
//      errors.name = 'Username should not have a special character'; 
//  }
  if (values.name.length > 20) {
    errors.name = 'Must be 20 characters or less';
  }


  if (!values.password) {
    errors.password = 'Password is a required field';
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/i.test(values.password)) {
    errors.password = 'Should include one uppercase,one lowercase,one numeric,one special symbol,minimum eight characters and maximum sixteen characters';
  }
  if (!values.address) {
    errors.address = "Address is a required field";
  }
  
   
  if (!values.phoneNumber) {
    errors.phoneNumber= "Phonenumber is a required field";
  }
  if (!values.email) {
    errors.email = 'Email is a required field';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
    return errors;
  };
 
// Create the RegistrationForm component
const RegistrationForm=()=> {
    const navigate=useNavigate();
   
    // Use the useFormik hook to manage form state and validation
    const formik = useFormik({
        initialValues: {
            // id: '',
            name: '',
            password: '',
            address: '',
            email: '',
            phoneNumber: '',
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify("Registration Sucessfull. Please Go Back To Login Page "));

            console.log(values);
            axios.post("http://localhost:5180/api/Job/Register Company",values)
            navigate("/cloginform");
        },
    });
 
    // Render the form with input fields and error messages
    return (
        <div className='div0'> 
        <div className='centre'> 
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Company Name:</label>&nbsp;&nbsp;&nbsp;
        <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
        />
        {formik.errors.name&&formik.touched.name? <div>{formik.errors.name}</div> : null}
        <br />
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
        <br />
        <br />
        <label htmlFor="address">Address:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
        />
        {formik.errors.address ? <div>{formik.errors.address}</div> : null}
        <br />
        <br />
        <label htmlFor="email">Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <br />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
        />
       
        {formik.errors.phoneNumber&&formik.touched.password ? <div>{formik.errors.phoneNumber}</div> : null}
        <br />
        <br />
        <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center">
            <Button variant="contained" type="submit">REGISTER</Button>
        </Box>
             
        
    </form>
</div>
</div>
);
       
}
export default RegistrationForm
 