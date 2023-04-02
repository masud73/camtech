import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function StudyWithUs() {
    const navigate = useNavigate();

    return (
        <section className="study-with-us-container">
            <div className="p-3 content-wrapper d-flex justify-content-between align-items-start">
                <div className="left-content">
                    <h2 className='fs-2 fw-bold lh-base my-3 text-light'>WANT TO STUDY WITH US ?</h2>
                    <p className='lh-lg fs-6 text-wrap text-light' style={{textAlign: 'justify'}}>We provide relevant and higher-quality education, leadership, and a meaningful life in order to advance understanding and quality of life.<br /> <br /> Prospective students are expected to meet the minimum requirements to be eligible for admission into <b className="text-light">College of Administration Management and Technology (CAMTECH) Potiskum</b>.</p>
                    <Button onClick={() => navigate('/admissions')} id="apply-btn-left" variant="contained" size="large" className='px-5 mt-3 mb-4'>APPLY NOW</Button>
                </div>
                <div className="right-content">
                    <img src="./assets/images/stack-img.png" alt="" width={400} className='rounded'/>
                    <Button onClick={() => navigate('/admissions')} id="apply-btn-right" variant="contained" size="large" className='d-none mt-3 mb-2'>APPLY NOW</Button>
                </div>
            </div>
        </section>
    );
}