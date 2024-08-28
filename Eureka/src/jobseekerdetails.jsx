import React from 'react';
import {  Button } from '@mui/material';

import { Link,useParams} from 'react-router-dom';
import './search.css'


const App=() =>{
  const {Name} = useParams();
 
 return (
   
        <div className = "center">
        <br/>
      <br/>
      <br/>
      <Link to={`/getseekerdetails/${Name}`}>
       <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: 'serenity',
          borderRadius: '12px',
          padding: '9px 15px',
          '&:hover': {
            backgroundColor: 'Blue',
            
          },
        }}
      >
        View Profile
      </Button>
      </Link>
      <br/>
      <br/>
      <br/>
 
       <Link to={`/updateprofile_jobseeker/${Name}`}> 
      < Button
    
        variant="contained"
        color="secondary"
        sx={{
          backgroundColor: 'blueviolet',
          borderRadius: '12px',
          padding: '5px 10px',
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

      <Link to={`/JobseekerDisplayDetails/${Name} `}>
 <Button variant="contained" color="primary"
    sx={{
      backgroundColor: 'serenity',
      borderRadius: '12px',
      padding: '7px 12px',
      '&:hover': {
        backgroundColor: 'purple',
        
      },
    }}
 >
    Search Jobs
 </Button>
</Link>
      <br/>
      <br/>
      <br/>

      <Link to={"/"}>
 <Button variant="contained" color="primary"
    sx={{
      backgroundColor: 'serenity',
      borderRadius: '12px',
      padding: '7px 12px',
      '&:hover': {
        backgroundColor: 'purple',
        
      },
    }}
 >
  Logout
 </Button>
</Link>
      <br/>
      <br/>
      <br/>
    </div>
    
 );
}
 
 
export default App;