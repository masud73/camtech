// import Divider from '@mui/material/Divider';

export default function News() {
    return (
        <section className="news-sec" style={{borderLeft: '9px solid #0dcaf0'}}>
            {/* <Divider textAlign='center' className='mb-3 text-danger'><h3 className="text-info m-0 mx-2" id="news">News</h3></Divider> */}
            <h3 className="text-info" id="news">News</h3>
            <div className="news-container d-flex-column">
                <div className="news-item mb-3 d-flex">
                    <img src="./assets/images/books.jpg" alt="" className="rounded me-3" />
                    <div className="news-text-wrapper overflow-hidden">
                        <h4 className="fs-5 mb-1">Heading</h4>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetor Lorem ipsum dolor sit amet consectetorLorem  ipsum dolor sit amet consectetor</p>
                        <a href="#news" className="text-decoration-none">Read More</a>
                    </div>
                </div>

                <div className="news-item mb-3 d-flex">
                    <img src="./assets/images/books.jpg" alt="" className="rounded me-3" />
                    <div className="news-text-wrapper overflow-hidden">
                        <h4 className="fs-5 mb-1">Heading</h4>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetor Lorem ipsum dolor sit amet consectetorLorem  ipsum dolor sit amet consectetor</p>
                        <a href="#news" className="text-decoration-none">Read More</a>
                    </div>
                </div>

                <div className="news-item mb-3 d-flex">
                    <img src="./assets/images/books.jpg" alt="" className="rounded me-3" />
                    <div className="news-text-wrapper overflow-hidden">
                        <h4 className="fs-5 mb-1">Heading</h4>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetor Lorem ipsum dolor sit amet consectetorLorem  ipsum dolor sit amet consectetor</p>
                        <a href="#news" className="text-decoration-none">Read More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}