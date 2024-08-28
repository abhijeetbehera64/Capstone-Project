import React, { useEffect, useState } from 'react';
import './search.css'
import { useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Get2 = () => {

  const navigate=useNavigate();

  const [data, setData] = useState([])
  const { Name } = useParams();
  const getUserData = async () => {
    const res = await axios.get(`http://localhost:5180/api/Job/jobseeker_profile?name=${Name}`)
      .then(res => setData(res.data))
      .catch(error => console.error('Error:', error));


  }
  useEffect(() => {
    getUserData();
  }, [])

  return (
    <>
    <br/>
    <br/>

       
        <Button variant="contained" color='success' onClick={()=>navigate(`/jobseekerdetails/${Name}`)} startIcon={<ArrowBackIcon />}>BACK</Button>
      
        {data.map((data, index) => (

            <div key={index}>
              <br />
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>ID</th>
                    <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Name</th>
                    <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Password</th>
                    <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Gender</th>
                    <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Degree</th>
                    <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>CGPA</th>
                    <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Skills</th>
                    <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Years of Experience</th>

                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.id}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.name}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.password}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.gender}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.degree}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.cgpa}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.skills}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.yearsOfExperience}</td>

                  </tr>

                </tbody>
              </table>
            </div>


        ))}

    </>
  )
}
export default Get2;


