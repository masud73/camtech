export default function Events() {
    return (
        <section className="events-sec" style={{borderLeft: '9px solid #BBA365'}}>
            {/* <h3 style={{color: '#BBA365'}}>Events</h3> */}
            <h3>Events</h3>
            <div className="events-container d-flex-column">
                <div className="event-item mb-3 d-flex-column">
                    <img src="./assets/images/books.jpg" alt="" className="rounded mb-2" />
                    <div className="events-text-wrapper">
                        <h4 className="fs-6 mb-1">Heading</h4>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetor Lorem ipsum dolor sit amet consectetorLorem  ipsum dolor sit amet consectetor</p>
                        <div className="d-flex justify-content-between">
                            <a href="#news" className="text-decoration-none">Learn More</a>
                            <small className="text-secondary">Friday, January 1, 1970</small>
                        </div>
                    </div>
                </div>

                <div className="event-item mb-3 d-flex-column">
                    <img src="./assets/images/books.jpg" alt="" className="rounded mb-2" />
                    <div className="events-text-wrapper">
                        <h4 className="fs-6 mb-1">Heading</h4>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetor Lorem ipsum dolor sit amet consectetorLorem  ipsum dolor sit amet consectetor</p>
                        <div className="d-flex justify-content-between">
                            <a href="#news" className="text-decoration-none">Learn More</a>
                            <small className="text-secondary">Friday, January 1, 1970</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}