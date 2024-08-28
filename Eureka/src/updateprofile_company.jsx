import React from 'react';
import { useFormik } from 'formik';
import { useParams , useNavigate } from 'react-router-dom';
import { Box,Button } from '@mui/material';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const validate = (values)=>{
  const errors = {};

  if (!values.password) {
    errors.password = 'Password is a required field';
  }
  if (!values.adress) {
    errors.address = "Address is Required";
  }
  
   
  if (!values.phone_no) {
    errors.phoneNumber= "Phonenumber is Required";
  }

 
    return errors;
};
 
const Update2= () => {
    const { email } = useParams();
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      
      "password":"",
      "adress":"", 
      "phone_no":""
       
    },
     validate,
    onSubmit: values => {
    
      console.log(values)
      axios.patch(`http://localhost:5180/api/Job/${email}?password=${values.password}&adress=${values.adress}&phone_no=${values.phone_no}`,values)
      alert("Profile Updated Successfully")
      navigate(`/CompanyDetails/${email}`)
   
    }
  });
  return (
    
    <div className='div0'> 
     <Button variant="contained" color='success' onClick={()=>navigate(`/CompanyDetails/${email}`)} startIcon={<ArrowBackIcon />}>BACK</Button>
    <div className='centre'>
    <form onSubmit={formik.handleSubmit}>

    <label htmlFor="email" >Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <input
            id="email"
            name="email"
            type="email"
            value={email}
            disabled={true}
        />
        
   
        <br />
        <br />
   
      
      
      <label htmlFor="password">Password:</label>&nbsp;&nbsp;
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
        <label htmlFor="adress">Address:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
            id="adress"
            name="adress"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.adress}
        />
        {formik.errors.adress ? <div>{formik.errors.adress}</div> : null}
        <br />
        <br />
        
        <label htmlFor="phone_no">Contact:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
            id="phone_no"
            name="phone_no"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone_no}
        />
        {formik.errors.phone_no ? <div>{formik.errors.phone_no}</div> : null}
        <br />
        <br />
      
     
      <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center">
            <Button variant="contained" type="submit">SUBMIT</Button>
        </Box>
    </form>
    </div>
    </div>
  );
};
 
export default Update2
