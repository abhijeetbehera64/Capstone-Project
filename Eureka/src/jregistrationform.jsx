import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Box,Button } from '@mui/material';
import axios from 'axios';

const validate = (values)=>{
  const errors = {};

if (!values.name) {
  errors.name = 'Candidate Name is a required field';
}
if (!values.password) {
  errors.password = 'Password is a required field';
} else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/i.test(values.password)) {
  errors.password = 'Should include one uppercase,one lowercase,one numeric,one special symbol,minimum eight characters and maximum sixteen characters';
}
if (!values.degree) {
  errors.degree = "Degree is a required field";
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
 
const Signup= () => {
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      "name":"",
      "password":"",
      "degree":"",
      "skills":"",
      "experience":"",
      "cgpa":"",
       "gender":""
    },
     validate,
    onSubmit: values => {
    
     alert(JSON.stringify("Registration Sucessfull. Please Go Back To Login Page "));
      console.log(values)
      axios.post("http://localhost:5180/api/Job/Register as jobseeker",values)
      navigate("/jloginform");
    }
  });
  return (
    <div className='div0'> 
    <div className='centre'>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name"> Name: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br/>
      <br/>
       <label htmlFor="gender">Gender: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label htmlFor="male">Male</label>
      <input type="radio" name="gender" value="male" onChange={formik.handleChange}></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label htmlFor="Female">Female</label>
      <input type="radio" name="gender" value="female" onChange={formik.handleChange}></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label htmlFor="Others">Others</label>
      <input type="radio" name="gender" value="others" onChange={formik.handleChange}></input>
      <br />
      <br />
      <label htmlFor="password">Password: </label>&nbsp;&nbsp;&nbsp;
      <input id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <br />
      <br />
      <label htmlFor="degree">Degree: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label htmlFor="b.tech">B.TECH</label>
      <input type="radio" name="degree" value="btech" onChange={formik.handleChange} ></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label htmlFor="mba">MBA</label>
      <input type="radio" name="degree" value="mba" onChange={formik.handleChange} ></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label htmlFor="Others">Others</label>
      <input type="radio" name="degree" value="others" onChange={formik.handleChange} ></input>
      <br />
      <br />
      <label htmlFor="cgpa">CGPA: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input id="cgpa" name="cgpa" type="cgpa" onChange={formik.handleChange} value={formik.values.cgpa}/>
      {formik.errors.cgpa ? <div>{formik.errors.cgpa}</div> : null}
      <br />
      <br />
      <label htmlFor="skills">Skills: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input id="skills" name="skills" type="text" onChange={formik.handleChange} value={formik.values.skills}/>
      {formik.errors.skills ? <div>{formik.errors.skills}</div> : null}
      <br />
      <br />
      <label htmlFor="experience"> Experience: </label>
      <input id="experience" name="experience" type="text" onChange={formik.handleChange} value={formik.values.experience}/>
      {formik.errors.experience ? <div>{formik.errors.experience}</div> : null}
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
};
 
export default Signup
