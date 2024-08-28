import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from '../Pages/about.jsx'
import Contact from '../Pages/contact.jsx'
import Home from '../Pages/home.jsx'
import RegistrationForm from './cregistrationform.jsx'
import Signup from './jregistrationform.jsx'
import JLoginForm from '../src/jloginform'; 
import CLoginForm from '../src/cloginform';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import App from './jobseekerdetails.jsx'
import App1 from './CompanyDetails.jsx'
import { Jobsearch } from './JobseekerDisplayDetails.jsx'
import Get1 from './getseekerdetails.jsx'
import Get2 from './getcomapnydetails.jsx'
import Get3 from './getapplicationdetails.jsx'
import Update1 from './updateprofile_jobseeker.jsx'
import Update2 from './updateprofile_company.jsx'
import ValidateUsers from './CompanyValidate.jsx'
import JValidateUsers from './Jvalidate.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <div className='head'>
      <Link to="/"><Button variant="contained" startIcon={<HomeIcon />}>HOME</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/about"><Button variant="contained" startIcon={<InfoIcon />}>ABOUT</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/contact"><Button variant="contained" startIcon={<ContactPageIcon />}>CONTACT</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cregistrationform" element={<RegistrationForm/>} />
        <Route path="/jregistrationform" element={<Signup/>} />
        <Route path="/cloginform" element={<CLoginForm/>} />
        <Route path="/jloginform" element={<JLoginForm/>} />
        <Route path="/jobseekerdetails/:Name" element={<App/>} />
        <Route path="/CompanyDetails/:email" element={<App1/>} />
        <Route path="/JobseekerDisplayDetails/:Name" element={<Jobsearch/>} />
        <Route path="/getseekerdetails/:Name" element={<Get1/>} />
        <Route path="/getcompanydetails/:email" element={<Get2/>} />
        <Route path="/getapplicationdetails/:email" element={<Get3/>} />
        <Route path="/updateprofile_jobseeker/:Name" element={<Update1/>} />
        <Route path="/updateprofile_company/:email" element={<Update2/>} />
        <Route path="/CompanyValidate/:email/:password" element={<ValidateUsers/>} />
        <Route path="/Jvalidate/:name/:password" element={<JValidateUsers/>} />
      </Routes>
    </Router>
    <br />
    <br />
    <br />
   
  </React.StrictMode>,
)
