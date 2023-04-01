import { Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { TopBar } from "../../AppHeader";
import Page from "../Page";
import WelcomeAddress from "../WelcomeAddress";

export default function Public(props) {
    return (
        <>
            <Helmet>
                <title>Department of Public Administration</title>
            </Helmet>
            <header>
                <TopBar queryRef='pa@camtech.edu.ng' />
            </header>
            <main>
                <div className="cxc">
                    <div className="cxcc">
                        <Page
                            deptPage
                            heading="Department of Public Administration"
                            subHeading='College of Administration Management and Technology (CAMTECH) Potiskum'
                        />
                    </div>
                </div>
                <WelcomeAddress
                    author='John Doe'
                    pos='H.O.D'
                    imgSrc='../../assets/images/male-avatar2.png'
                />

                <h2 className="text-center bg-success bg-opacity-75 py-2 fs-5 text-uppercase text-white">Courses Outline</h2>
                <section>
                    <h3 className="fs-4 mt-1 text-center text-secondary">National Diploma (Year I)</h3>
                    <Card className="mt-3">
                        <Card.Header><span className="text-center fw-bold d-block">First Semester</span></Card.Header>
                        <CourseTable />
                    </Card>
                    <Card className="mt-3">
                        <Card.Header><span className="text-center fw-bold d-block">Second Semester</span></Card.Header>
                        <CourseTable />
                    </Card>

                    <h3 className="fs-4 mt-3 text-center text-secondary">National Diploma (Year II)</h3>
                    <Card className="mt-3">
                        <Card.Header><span className="text-center fw-bold d-block">First Semester</span></Card.Header>
                        <CourseTable />
                    </Card>
                    <Card className="mt-3">
                        <Card.Header><span className="text-center fw-bold d-block">Second Semester</span></Card.Header>
                        <CourseTable />
                    </Card>
                </section>
            </main>
        </>
    );
}


function CourseTable() {
  const courses = [
    { id: 1, code: 'CSC101', title: 'Introduction to Computer Science', credit: 3 },
    { id: 2, code: 'PHY201', title: 'Introduction to Physics', credit: 2 },
    { id: 3, code: 'MAT301', title: 'Advanced Mathematics', credit: 4 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Course Code</th>
          <th>Course Title</th>
          <th>Credit Unit</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={course.id}>
            <td>{index + 1}</td>
            <td>{course.code}</td>
            <td>{course.title}</td>
            <td>{course.credit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}