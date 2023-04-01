import { Figure } from "react-bootstrap";

export default function Resources() {
    return (
        <section className="bg-secondary bg-opacity-10 mt-3">
            <h3 className="fs-3">Resources</h3>
            <div id="res-fig-wrapper" className="d-flex justify-content-start align-items-center">
                <Figure className="resources-img-figure">
                    <a href="#" className="d-block border rounded text-decoration-none">
                        <Figure.Image src="./assets/images/books-shelve.jpg" alt='' className="rounded-top" />
                        <Figure.Caption className='text-center fs-6 mb-2'>e-Library</Figure.Caption>
                    </a>
                </Figure>
                <Figure className="resources-img-figure">
                    <a href="#" className="d-block border rounded text-decoration-none">
                        <Figure.Image src="./assets/images/room.jpg" alt='' className="rounded-top" />
                        <Figure.Caption className='text-center fs-6 mb-2'>Learning Environment</Figure.Caption>
                    </a>
                </Figure>
                <Figure className="resources-img-figure">
                    <a href="#" className="d-block border rounded text-decoration-none">
                        <Figure.Image src="./assets/images/research-team.jpg" alt='' className="rounded-top" />
                        <Figure.Caption className='text-center fs-6 mb-2'>Research & Collaboration</Figure.Caption>
                    </a>
                </Figure>
            </div>
        </section>  
    );
}