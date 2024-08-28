import React from 'react';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { Box,Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validate = (values)=>{
  const errors = {};


  if (!values.password) {
    errors.password = 'Password is a required field';
  } 

 
  if (!values.cgpa) 
  {
    errors.cgpa= "CGPA is a required field";
  }
  if(isNaN(values.cgpa))
  {
    errors.cgpa="Experience should be numeric"
  }
  if(values.cgpa <=0 || values.cgpa>10)
  {
    errors.cgpa="CGPA should be range between (0-10)."
  }
  
  
  if (!values.experience) {
    errors.experience= "Experience is a required field";
  }
  if(isNaN(values.experience))
  {
    errors.experience="Experience should be numeric"
  }
  if(values.experience<0)
  {
    errors.experience="Experience should not be negative value"
  }
   
  if (!values.skills) 
  {
    errors.skills= "Skills is required field";
  }
 
 
  return errors;
};
 
const Update1= () => {
    const { Name,password,skills,yearsOfExperience,cgpa } = useParams();
    const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      
      "password":"",
      "skills":"",
      "yearsOfExperience":"",
      "cgpa":""
       
    },
     validate,
    onSubmit: values => {
    
      console.log(values)
      axios.patch(`http://localhost:5180/api/Job/UPDATE JOBSEEKER?Name=${Name}&password=${values.password}&skills=${values.skills}&experience=${values.yearsOfExperience}&cgpa=${values.cgpa}`,values)
      alert("Profile Updated Successfully")
   
    }
  });
  return (
    <div className='div0'> 
      <Button variant="contained" color='success' onClick={()=>navigate(`/jobseekerdetails/${Name}`)} startIcon={<ArrowBackIcon />}>BACK</Button>
    <div className='centre'>
    <form onSubmit={formik.handleSubmit}>

     <label htmlFor="Name"> Name: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input id="Name" name="Name" type="text"  value={Name} disabled={true}></input>
      <br />
      <br /> 
      
      <label htmlFor="password">Password: </label>&nbsp;&nbsp;&nbsp;
      <input id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <br />
      <br />

      <label htmlFor="skills">Skills: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input id="skills" name="skills" type="text" onChange={formik.handleChange} value={formik.values.skills}/>
      {formik.errors.skills ? <div>{formik.errors.skills}</div> : null}
      <br />
      <br />

      <label htmlFor="yearsOfExperience"> Experience: </label>
      <input id="yearsOfExperience" name="yearsOfExperience" type="text" onChange={formik.handleChange} value={formik.values.yearsOfExperience}/>
      {formik.errors.yearsOfExperience ? <div>{formik.errors.yearsOfExperience}</div> : null}
      <br />
      <br />

      <label htmlFor="cgpa">CGPA: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input id="cgpa" name="cgpa" type="cgpa" onChange={formik.handleChange} value={formik.values.cgpa}/>
      {formik.errors.cgpa ? <div>{formik.errors.cgpa}</div> : null}
      <br />
      <br />
      
     
      <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center">
            <Button variant="contained" type="submit">UPDATE</Button>
        </Box>
    </form>
    </div>
    </div>
  );
};
 
export default Update1
