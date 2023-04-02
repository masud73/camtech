import { Divider } from '@mui/material';

export default function Officers() {
    return (
        <section className="mt-5 d-flex-column align-items-center">
            <Divider id='p-officers-divider-label' className='w-50 m-auto'><h2 className="text-center fs-2 m-0 mx-3">PRINCIPAL OFFICERS</h2></Divider>
            <div className="officers-container mt-2 py-3 d-flex justify-content-center flex-wrap">
                <div className="officer m-4">
                    <img src="./assets/images/male-avatar.png" alt="" />
                    <div>
                        <div className="fw-semibold my-1 fs-5 text-center">John Doe</div>
                        <span className="fs-5 d-block text-secondary text-center">Registrar</span>
                    </div>
                </div>

                <div className="officer m-4">
                    <img src="./assets/images/male-avatar.png" alt="" />
                    <div>
                        <div className="fw-semibold my-1 fs-5 text-center">John Doe</div>
                        <span className="fs-5 d-block text-secondary text-center">Registrar</span>
                    </div>
                </div>

                <div className="officer m-4">
                    <img src="./assets/images/male-avatar.png" alt="" />
                    <div>
                        <div className="fw-semibold my-1 fs-5 text-center">John Doe</div>
                        <span className="fs-5 d-block text-secondary text-center">Registrar</span>
                    </div>
                </div>

                <div className="officer m-4">
                    <img src="./assets/images/male-avatar.png" alt="" />
                    <div>
                        <div className="fw-semibold my-1 fs-5 text-center">John Doe</div>
                        <span className="fs-5 d-block text-secondary text-center">Registrar</span>
                    </div>
                </div>

                {/* <div className="officer m-4">
                    <img src="./assets/images/masud.jpg" alt="Masud Muhammad Shuaib" />
                    <div>
                        <div className="fw-semibold my-1 fs-5 text-center">Masud Muhammad Shuaib</div>
                        <span className="fs-5 d-block text-secondary text-center">Web Developer</span>
                    </div>
                </div> */}
            </div>

        </section>
    );
}