import { Twitter, Facebook, Instagram } from 'react-bootstrap-icons';

export default function AppFooter() {
    return (
        <footer className="app-footer d-flex-column mt-5">
            <div className="location-wrapper">
                <img src="./assets/images/map.jpg" className='w-100' style={{height: 'inherit', objectFit: 'cover'}} alt="" />
            </div>
            <div id="app-footer-content-wrapper" className="d-flex justify-content-evenly">
                <div id='app-footer-brand' className="me-5 d-flex">
                    <img className="rounded border me-3" src="./assets/images/logo.jpeg" alt="camtech" height={80} width={80} />
                    <div>
                        <h3 className="text-white fs-4">CAMTECH, Potiskum</h3>
                        <p style={{color: '#f5f5f5'}} className="m-0">PMB 1046, Potiskum Yobe State</p>
                    </div>
                </div>
                <div id='footer-links-wrapper' className="me-5">
                    <h4 className="fs-5">Useful Links</h4>
                    <ul>
                        <li><a href="/admissions" className='lh-base'>Admissions</a></li>
                        <li><a href="#news" className='lh-base'>News</a></li>
                        <li><a href="/admissions" className='lh-base'>Portals</a></li>
                        <li><a href="/library" className='lh-base'>Library</a></li>
                        <li><a href="#news" className='lh-base'>Calanders</a></li>
                    </ul>
                </div>
                <div id='social-wrapper'>
                    <h4 className="fs-5">Social Media</h4>
                    <div className='d-flex align-items-center'>
                        <a href="https://twitter.com/" className="me-3 rounded border border-secondary border-opacity-25 p-1"><Twitter size={30} /></a>
                        <a href="https://web.facebook.com/groups/417586871675318" className="me-3 rounded border border-secondary border-opacity-25 p-1"><Facebook size={30} /></a>
                        <a href="https://instagram.com/" className="me-3 rounded border border-secondary border-opacity-25 p-1"><Instagram size={30} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}