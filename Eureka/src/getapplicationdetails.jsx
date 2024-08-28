import React, { useEffect, useState } from 'react';
import './search.css'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FolderOffRounded } from '@mui/icons-material';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Get3 = () => {
  const navigate= useNavigate();
  const [data, setData] = useState([])
  const { email } = useParams();
  const getUserData = async () => {
    const response= await fetch(`http://localhost:5180/api/Job/application_details?Email=${email}`)
    const data = await response.json();
      console.log(data);
      setData(data);

  }
  useEffect(() => {
    getUserData();
  }, [])

  return (
    
      
      <div>
        <br/>
        <br/>
         
         <Button variant="contained" color='success' onClick={()=>navigate(`/CompanyDetails/${email}`)} startIcon={<ArrowBackIcon />}>BACK</Button>

    {data.map((data, index) => (

      <div key={index}>
        <br />
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Application ID</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Gender</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Skills</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Year of experience</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Degree</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Cgpa</th>
              <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Title</th>

            </tr>
          </thead>
          <tbody>

            <tr>
            
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[0].iD}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[0].name}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[0].gender}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[0].skills}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[0].yearsOfExperience}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[0].degree}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[0].cgpa}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[0].title}</td>
            </tr>

          </tbody>
        </table>
      </div>
              ))}
             
            </div>


       

  )
}
export default Get3;


