import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './app/components/Home';

import './index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-submenu/dist/index.css";
import AdmissionPortal from './app/components/user/AdmissionPortal';
import ApplicantLoginPage from './app/components/user/ApplicantLoginPage';
import ApplicantSignUpPage from './app/components/user/ApplicantSignUpPage';
import LoginPage from './app/components/student/LoginPage';
import {LoginPage as StaffLoginPage} from './app/components/staff/LoginPage';
import About from './app/components/pages/About';
import Contact from './app/components/pages/Contact';
import Library from './app/components/Library';
import Public from './app/components/departments/PublicAdmin';
import OTM from './app/components/departments/OTM';
import Accountancy from './app/components/departments/Accountancy';
import SocialDev from './app/components/departments/SocialDev';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='library' element={<Library /> } />
          <Route path='about' element={<About />} />
          <Route path='contact_us' element={<Contact />} />
        </Route>
        <Route path='/admissions' element={<AdmissionPortal />} />
        <Route path='/applicant/login' element={<ApplicantLoginPage />} />
        <Route path='/applicant/signup' element={<ApplicantSignUpPage />} />

        <Route path='/student/login' element={<LoginPage />} />
        <Route path='/staff/login' element={<StaffLoginPage />} />

        <Route path='/departments/public_admin' element={<Public /> } />
        <Route path='/departments/accountancy' element={<Accountancy /> } />
        <Route path='/departments/otm' element={<OTM /> } />
        <Route path='/departments/social_dev' element={<SocialDev /> } />
  
        <Route path='*' element={<h1>404 page not found</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);