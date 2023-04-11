import Helmet from 'react-helmet';
import { TopBar } from '../../AppHeader';
import { Badge, Card, CardGroup } from 'react-bootstrap';

import Button from '@mui/material/Button';
import {
    CloudUpload,
    CreditCard,
    Download,
    Lock,
    PencilSquare,
    Person,
    ThreeDots
} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';


export default function AdmissionPortal() {
    const navigate = useNavigate();
    return (
        <>
            <Helmet>
                <title>Online Application Portal 2022/2023 Session</title>
            </Helmet>
            <header>
                <TopBar queryRef="support@camtech.edu.ng" />
            </header>
            <main>
                <PortalBanner />
                <section className="py-4 d-flex justify-content-around">
                    <CardGroup>
                        <Card className='text-center'>
                            <Card.Header as='h6'>Courses & Departments</Card.Header>
                            <Card.Body className='text-justify'>
                            Download a soft copy of the available courses and departments offered by the college. <br />
                                <Button className='mt-4 text-capitalize' variant="outlined" startIcon={<Download size={18} color='#1976d2' />}>
                                    Download
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card className='text-center'>
                            <Card.Header as='h6'>Start Application</Card.Header>
                            <Card.Body className='text-justify'>
                                Get started by creating an account or logging into an existing account to complete your application. <br />
                                <Button disabled onClick={() => navigate('/applicant/signup')} className='mt-4 me-3 text-capitalize' variant="outlined" startIcon={<PencilSquare style={{opacity: '.2'}} size={18} color='#1976d2' />}>
                                    Create account
                                </Button>
                                <Button onClick={() => navigate('/applicant/login')} className='mt-4 text-capitalize' variant="outlined" startIcon={<Lock size={18} color='#1976d2' />}>
                                    Login
                                </Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </section>
                <section>
                    <h2 className='fs-3'>How to Apply</h2>
                    <div id="how-to-apply-container" className='d-flex flex-wrap border-top'>
                        <div className='p-4 how-to-apply-item w-50 border-bottom border-start border-end'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='p-1 bg-info border rounded d-flex justify-content-center align-items-center'><Person color='#fff' size={25} /></div>
                                <div><Badge bg='danger'>STEP 1</Badge></div>
                            </div>
                            <div className='mt-3'>
                                <h3 className='fs-6 mb-2'>Create an account</h3>
                                <p className='fs-6 lh-base text-secondary mb-0'>For new applicants, create an account with your valid email address, then follow the instructions sent to your email to activate your account and finally login.</p>
                            </div>
                        </div>
                        <div className='p-4 how-to-apply-item w-50 border-bottom border-start border-end'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='p-1 bg-info border rounded d-flex justify-content-center align-items-center'><CreditCard color='#fff' size={25} /></div>
                                <div><Badge bg='danger'>STEP 2</Badge></div>
                            </div>
                            <div className='mt-3'>
                                <h3 className='fs-6 mb-2'>Payment</h3>
                                <p className='fs-6 lh-base text-secondary mb-0'>Read the instructions sent to your email carefully, and then proceed to generate your payment RRR code and make payment through this portal, or copy the RRR to pay through your bank branch.</p>
                            </div>
                        </div>
                        <div className='p-4 how-to-apply-item w-50 border-bottom border-start border-end'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='p-1 bg-info border rounded d-flex justify-content-center align-items-center'><PencilSquare color='#fff' size={25} /></div>
                                <div><Badge bg='danger'>STEP 3</Badge></div>
                            </div>
                            <div className='mt-3'>
                                <h3 className='fs-6 mb-2'>Fill Application</h3>
                                <p className='fs-6 lh-base text-secondary mb-0'>Enter your valid bio-data, upload your passport or photograph, select the program of your choice, and provide other required information.</p>
                            </div>
                        </div>
                        <div className='p-4 how-to-apply-item w-50 border-bottom border-start border-end'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='p-1 bg-info border rounded d-flex justify-content-center align-items-center'><CloudUpload color='#fff' size={25} /></div>
                                <div><Badge bg='danger'>STEP 4</Badge></div>
                            </div>
                            <div className='mt-3'>
                                <h3 className='fs-6 mb-2'>Review & Submit</h3>
                                <p className='fs-6 lh-base text-secondary mb-0'>Ensure you cross-check the information and it is correct before submission.</p>
                            </div>
                        </div>
                        <div className='p-4 how-to-apply-item w-50 border-bottom border-start border-end'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='p-1 bg-info border rounded d-flex justify-content-center align-items-center'><Download color='#fff' size={25} /></div>
                                <div><Badge bg='danger'>STEP 5</Badge></div>
                            </div>
                            <div className='mt-3'>
                                <h3 className='fs-6 mb-2'>Download Forms</h3>
                                <p className='fs-6 lh-base text-secondary mb-0'>After successfully submitting your application, you are to download your acknowledgement form.</p>
                            </div>
                        </div>
                        <div className='p-4 how-to-apply-item w-50 border-bottom border-start border-end'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='p-1 bg-info border rounded d-flex justify-content-center align-items-center'><ThreeDots color='#fff' size={25} /></div>
                                <div><Badge bg='danger'>STEP 6</Badge></div>
                            </div>
                            <div className='mt-3'>
                                <h3 className='fs-6 mb-2'>Application Status</h3>
                                <p className='fs-6 lh-base text-secondary mb-0'>Regularly log onto your account to check for application status. You will also be notified via email or phone regarding the application status.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

function PortalBanner() {
    return (
        <div className='p-3 d-flex flex-column align-items-center'>
            <img src="./assets/images/logo.jpeg" alt="camtech" className='m-3 rounded border' height={70} width={70} />
            <h1 className='fs-3 text-primary text-center'>Welcome to CAMTECH Online Application Portal <span className='text-danger'> - Closed</span></h1>
            <p className='text-danger text-center'>Online Application for Admission <b className='text-danger'>2022-2023 Session</b> is now <b className='text-danger'>CLOSED!</b></p>
        </div>
    );
}