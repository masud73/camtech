import Carousel from 'react-bootstrap/Carousel';


export default function ImageCarousel(){
  return (
    <Carousel fade interval={4000}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="./assets/images/student-carrying-books.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="./assets/images/books-shelve.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="./assets/images/hackerthon-table.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="./assets/images/students-in-class.jpg"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}