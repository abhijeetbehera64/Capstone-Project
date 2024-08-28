import axios from 'axios'
import { useState,useEffect } from 'react'
import React from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Button, ButtonGroup, Dialog } from '@mui/material'
const JValidateUsers = () => {
    const [data, setdata] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const {name,password} = useParams();
    const nav = useNavigate()
    const handleClick=()=>{
        nav('/jloginform');
    }
    const getUserDetails = async()=>{
        const res = await axios.get(`http://localhost:5180/api/Job/JValidateUsers?name=${name}&password=${password}`)
        .then(res =>{
            setdata(res.data)
            console.log('User Found:',res.data);
            if(res.data)
            {
                setIsAuthenticated(true);
                nav(`/jobseekerdetails/${name}`)
                 
            }
            else
            {
               setIsAuthenticated(false);
            }
    
   
        })
        .catch(error => console.error('Error:', error));
 
       
    }
    useEffect(()=>{
        getUserDetails();
    },[])
    if(!data)
    {
        return(
            <>
                <h1>LOading</h1>
                <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
             USER— <strong>DOES NOT EXISTS !!</strong>
        </Alert>
        <Button onClick={handleClick}>Go BACK</Button>

            </>
        )
    }
    console.log("Inside Validate User")


 return (
    <>
    
    {isAuthenticated?<></>:
    <div className='Error' >
       
    </div>}
    <Button onClick={handleClick}>Go BACK</Button>


    </>
 )
}
export default JValidateUsers;
