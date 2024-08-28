import React from 'react'
import '../src/index.css'
import {Routes, Route, useNavigate} from 'react-router-dom';
import RegistrationForm from '../src/cregistrationform';
import Signup from '../src/jregistrationform';
import JLoginForm from '../src/jloginform'; 
import CLoginForm from '../src/cloginform';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import LaunchIcon from '@mui/icons-material/Launch';

const Home=() =>{
  const navigate = useNavigate();

  const navigateToRegistrationForm = () => 
  {
    navigate('/cregistrationform');
  };

    const navigateToSignup = () => {
        navigate('/jregistrationform');
  };
  const navigateToJlogin = () => {
    navigate('/jloginform');
};
const navigateToClogin = () => {
    navigate('/cloginform');
};




  return (
    <div>

      <div className='register'>
        <Button onClick={navigateToRegistrationForm} variant="outlined" color='primary' startIcon={<BusinessIcon />}
        sx={{'&:hover': {backgroundColor: 'blue',},}} >Company Registration</Button>

        <Button onClick={navigateToClogin} variant="outlined" color='primary' startIcon={<BusinessIcon />}  sx={{'&:hover': {backgroundColor: 'blue',},}} >Company Login</Button>
        <Button onClick={navigateToSignup} variant="outlined" color='primary' startIcon={<LaunchIcon />}  sx={{'&:hover': {backgroundColor: 'blue',},}} >Candidate Registration</Button>
        <Button onClick={navigateToJlogin} variant="outlined" color='primary' startIcon={<PersonIcon />}  sx={{'&:hover': {backgroundColor: 'blue',},}} >Candidate Login</Button>
        <Routes>
          <Route path="/cregistrationform" element={<RegistrationForm/>} />
          <Route path="/jregistrationform" element={<Signup/>} />
          <Route path="/cloginform" element={<JLoginForm/>} />
          <Route path="/jloginform" element={<CLoginForm/>} />
        </Routes>
      </div>

          <div className='qoutes'>
            <h1>Welcome to EUREKA</h1>
              <h2>Its time to do the best work of your life</h2>
              <h3>There is a way to do it better...find it</h3>
         </div>
    </div>

    
   
  );
}

export default Home;  
