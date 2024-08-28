import React, { useState } from 'react'
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import './search.css'
import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';


export const Jobsearch = () => {
  const navigate=useNavigate()
  const {Name} = useParams();
  const [searchSkill, setSearchSkill] = useState('');
  const [data, setData] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5180/api/Job/Search by skills?Skill=${searchSkill}`);


      const result = await response.json();

      setData(result);

      alert("Send your resume in Mail To Apply and also specify the job id for the job you want to apply")

    }

    catch (err) {
      console.log(err);

    }
  }

  const handleSearch1 = async () => {
    try {
      const response1 = await fetch(`http://localhost:5180/api/Job/${searchTitle}`);
      const result1 = await response1.json();
      setData(result1)
      alert("Send your resume in Mail To Apply and also specify the job id for the job you want to apply")

    }
    catch (err) {
      console.log(err);

    }
  }



  return (
    <>
    <Button variant="contained" color='success' onClick={()=>navigate(`/jobseekerdetails/${Name}`)} startIcon={<ArrowBackIcon />}>BACK</Button> 
    
      <input type="text" value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} placeholder="Search By Title.." className="topnav">
      </input>
      <input type="text" value={searchSkill} onChange={(e) => setSearchSkill(e.target.value)} placeholder="Search By Skills.." className="topnav1">
      </input>
      <br />
      <br />

      {/* skills */}
      <Button onClick={handleSearch} variant="contained" startIcon={<SearchIcon />} color="primary" sx={{
        backgroundColor: 'black',
        borderRadius: '12px',
        padding: '10px 20px',
        '&:hover': {
          backgroundColor: 'purple',
        },
        position: 'absolute',
        left: '350px',
        bottom: '430px'
      }}
      >
        Search
      </Button>


      {/* Title */}
      < Button onClick={handleSearch1}
        variant="contained"
        startIcon={<SearchIcon />} 
        color="secondary"
        sx={{
          color: 'white',
          backgroundColor: 'black',
          borderRadius: '12px',
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: 'purple',
          },
          position: 'absolute',
          right: '400px',
          bottom: '430px'
        }}

      >
        Search
      </Button>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {data.map((data, index) => (

        <div key={index}>
          <br />
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>ID</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Name</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Email</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Title</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Description</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Package</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Vaccancy</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Required Skills</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Year of experience</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[index].id}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[index].name}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[index].email}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[index].title}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[index].description}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[index].package}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[index].vaccancy}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[index].required_Skills}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data[index].years_of_Experience_Required}</td>
              </tr>


            </tbody>
          </table>
        </div>
      ))}

    </>

  )
}