import { Envelope, Facebook, Instagram, Twitter } from 'react-bootstrap-icons';
import AppNavbar from './components/NavBar';

import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Alert } from 'react-bootstrap';


export default function AppHeader() {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);

    return (
        <header className="app-header">
            <TopBar homepage queryRef="info@camtech.edu.ng" />
            <div className="banner-wrapper" role='banner'>
                <img src="./assets/images/banner.png" alt="" className='object-fit-cover' width='100%' height="100%" />
            </div>
            {/* <Offcanvas className='h-50' placement='top' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>ADMISSION ANNOUNCEMENT!</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Alert variant='info'>
                    <p>This is to inform the general public that the online application portal for admission into the <b>College of Administration Management and Technology 2022-2023 session</b> is now open!</p>
                    <hr />
                    <Button variant='contained' size="medium" onClick={() => navigate('/admissions')}>Apply Now</Button>
                </Alert>
                </Offcanvas.Body>
            </Offcanvas> */}
            <AppNavbar />
        </header>
    );
}

export function TopBar(props) {
    const navigate = useNavigate();
    
    return (
        <div id='top-bar-container' className="d-flex justify-content-between align-items-center" role='toolbar'>
            <div className="left-content d-flex align-items-center">
                <a href={`mailto:${props.queryRef}`} className='text-decoration-none'>
                    <div className="wrapper d-flex align-items-center">
                        <Envelope size={18} />
                        <small className='ms-2'>{props.queryRef}</small>
                    </div>
                </a>
            </div>
            <div className="right-content d-flex align-items-center">
                {props.homepage && <Button size="small" variant='outlined' className='text-capitalize me-3 border border-white' onClick={() => navigate('/student/login')}>Student Login</Button>}
                <a href="https://twitter.com/" className='border p-1 rounded text-decoration-none me-3' target='_blank' rel='noopener noreferrer'><div className="wrapper d-flex align-items-center"><Twitter size={17} /></div></a>
                <a href="https://web.facebook.com/groups/417586871675318" className='border p-1 rounded text-decoration-none me-3' target='_blank' rel='noopener noreferrer'><div className="wrapper d-flex align-items-center"><Facebook size={17} /></div></a>
                <a href="https://instagram.com/" className='border p-1 rounded text-decoration-none' target='_blank' rel='noopener noreferrer'><div className="wrapper d-flex align-items-center"><Instagram size={17} /></div></a>
            </div>
        </div>
    );
}