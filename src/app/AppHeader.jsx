import { Alert } from 'react-bootstrap';
import { Envelope, Facebook, Instagram, Twitter } from 'react-bootstrap-icons';
import AppNavbar from './components/NavBar';

import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';


export default function AppHeader() {
    const [show, setShow] = useState(false);

    return (
        <header className="app-header">
            <TopBar queryRef="info@camtech.edu.ng" />
            <div className="banner-wrapper" role='banner'>
                <img src="./assets/images/banner.png" alt="" className='object-fit-cover' width='100%' height="100%" />
            </div>
            <Alert show={show} variant="info" className='w-75 m-auto mb-4' dismissible onClose={() => setShow(false)}>
                <div className="d-flex flex-wrap">
                    <Alert.Heading className='me-3'>Admission!</Alert.Heading>
                    <Alert.Heading className='me-3'>Admission!!</Alert.Heading>
                    <Alert.Heading>Admission!!!</Alert.Heading>
                </div>
                <p>
                    This is to inform the general public that online application portal for admission into College of Administration Management and Technology 2022/2023 session is now open! <br />
                    <br />
                    Interested applicants are to apply via this link <Alert.Link href='#'>www.camtech.edu.ng/admissions/</Alert.Link>
                </p>
                <hr />
                <Stack direction='row' spacing={2}>
                    <Button variant='outlined' size="medium" onClick={() => setShow(false)}>dismiss</Button>
                    <Button variant='contained' size="medium">Apply Now</Button>
                </Stack>
            </Alert>
            <AppNavbar />
        </header>
    );
}

export function TopBar(props) {
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
                <a href="https://twitter.com/" className='border p-1 rounded text-decoration-none me-3' target='_blank' rel='no-opener no-referer'><div className="wrapper d-flex align-items-center"><Twitter size={17} /></div></a>
                <a href="https://web.facebook.com/groups/417586871675318" className='border p-1 rounded text-decoration-none me-3' target='_blank' rel='no-opener no-referer'><div className="wrapper d-flex align-items-center"><Facebook size={17} /></div></a>
                <a href="https://instagram.com/" className='border p-1 rounded text-decoration-none' target='_blank' rel='no-opener no-referer'><div className="wrapper d-flex align-items-center"><Instagram size={17} /></div></a>
            </div>
        </div>
    );
}