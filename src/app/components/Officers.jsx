export default function Officers() {
    return (
        <section className="mt-5 d-flex-column align-items-center">
            <h2 className="text-center text-secondary fs-2">PRINCIPAL OFFICERS</h2>
            <div className="officers-container mt-2 py-3 d-flex justify-content-center flex-wrap">
                <div className="officer m-3">
                    <img src="./assets/images/male-avatar.png" alt="" />
                    <div>
                        <div className="fw-semibold my-1 fs-5 text-center">John Doe</div>
                        <span className="fs-5 d-block text-secondary text-center">Registrar</span>
                    </div>
                </div>

                <div className="officer m-3">
                    <img src="./assets/images/male-avatar.png" alt="" />
                    <div>
                        <div className="fw-semibold my-1 fs-5 text-center">John Doe</div>
                        <span className="fs-5 d-block text-secondary text-center">Registrar</span>
                    </div>
                </div>

                <div className="officer m-3">
                    <img src="./assets/images/male-avatar.png" alt="" />
                    <div>
                        <div className="fw-semibold my-1 fs-5 text-center">John Doe</div>
                        <span className="fs-5 d-block text-secondary text-center">Registrar</span>
                    </div>
                </div>

                <div className="officer m-3">
                    <img src="./assets/images/male-avatar.png" alt="" />
                    <div>
                        <div className="fw-semibold my-1 fs-5 text-center">John Doe</div>
                        <span className="fs-5 d-block text-secondary text-center">Registrar</span>
                    </div>
                </div>

                {/* <div className="officer m-3">
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