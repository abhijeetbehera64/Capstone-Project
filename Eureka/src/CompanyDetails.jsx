import React from 'react';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
 
const App1=() =>{
  const {email} = useParams();
 return (
   
  <div className = "a">
     <Link to={`/getcompanydetails/${email}`}>
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: 'blueviolet',
          borderRadius: '12px',
          padding: '9px 10px',
          '&:hover': {
            backgroundColor: 'purple',
          },
        }}
      >
        View Profile 
      </Button>
      </Link>
      <br/>
      <br/>
      <br/>


      <Link to={`/updateprofile_company/${email}`}> 
      <Button
        variant="contained"
        color="secondary"
        sx={{
          backgroundColor: 'blueviolet',
          borderRadius: '12px',
          padding: '9px 12px',
          '&:hover': {
            backgroundColor: 'purple',
          },
        }}
      >
       Update Profile
      </Button>
      </Link>

      <br/>
      <br/>
      <br/>
      <Link to={`/getapplicationdetails/${email}`}>
      <Button
        variant="contained"
        color="success"
        sx={{
          backgroundColor: 'blueviolet',
          borderRadius: '12px',
          padding: '9px 12px',
          '&:hover': {
            backgroundColor: 'purple',
          },
        }}
      >
      View Applications
      </Button>
      </Link>

      <br/>
      <br/>
      <br/>
      <Link to={"/"}>
      <Button
        variant="contained"
        color="success"
        sx={{
          backgroundColor: 'blueviolet',
          borderRadius: '9px',
          padding: '15px 20px',
          '&:hover': {
            backgroundColor: 'purple',
          },
        }}
      >
      Logout
      </Button>
      </Link>
      


    </div>
 );
}
 
export default App1;