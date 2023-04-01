import ReadMore from "../ReadMore";

export default function About() {
    return (
        <section className="d-flex flex-column align-items-center">
            <div id="about-content-wrapper" className="w-75">
                <div className="text-secondary text-center lh-base fs-5">
                    <h1 className="text-secondary text-center fs-2 mt-3 mb-4">Brief on the College</h1>
                    
                        <ReadMore maxLength={383}>
                            The College was established in 1956 as a Clerical Training School (CTS), one out of the four of its kind by the defunct Government of Northern Nigeria for the purpose of trainig Typists and junior Clerical workers for the civil service of Northern Nigeria. The products of the school subsquently went to the Institute of Administration, Ahmadu Bello University for further training.

                            In 1960 the name of the school changed to Clerical Training Centre (CTC) and then to Staff Training Centre (STC) in 1970 following the introduction of Secretarial, Local Government, Community Development and Social Welfare Certificate Courses. Three (3) Diploma Courses were introduced in 1980 and the Centre remained Institute of Management Studies (IMS) on 12th May 1983 by Alhaji Mohammed Goni, the first executive Governor of Borno State.

                            As a result of the introduction of Diploma courses in Local Government, Social Administration, Community Development and Mass Education (affiliated to Ramat Polytechnic) and in order to enhance the status of the institute, the name was changed to College of Administrative and Social Studies (CASS) at its convocation ceremony, by the first Civilian Governor of Yobe State, Alhaji Bukar Abba Ibrahim on 27th April, 1993 and an autonomous status granted. The granting of a new status on the College was further legitimized by Edict Number (2) of October, 1997 which renamed the College as Yobe State College of Administrative and Business Studies (CABS) and changed the designation of its Chief executive from Director to Rector.

                            The College which at its inception was charged with trainig typists and clerical assistants now runs number of courses ranging from Certificate to Diploma programmes. Remidial arts (for SSCE attempted candidates to remedy their deficiencies was introduced i 2008. Higer/Advanced Diploma programmes leading the award of the HND and other Certificates are also available.)

                            The College has a land area of over fourty (40) hectres fully fenced with assets which include buildings, furniture, equipment, motor vehicles, plant and machinery, library/books among others.
                        </ReadMore>
                    <br />
                </div>
                <div>
                    <h2 className="text-secondary text-center fs-3 mt-5">Our Vision</h2>
                    <p className="text-secondary text-center lh-base fs-5">
                        An Institution which is primus inter pares, the products of which are self-reliant and respectful of the traditions and cultures of the environment but who are not afraid to adapt these values to meet the challenges of an ever changing world.
                    </p>
                </div>
                <div>
                    <h2 className="text-secondary text-center fs-3 mt-5">Our Mission</h2>
                    <p className="text-secondary text-center lh-base fs-5">To impart knowledge that is requisite for harnessing, managing intellectual potential for the good of Yobe State in particular and Nigeria in general and inculate conduct which will serve as a melting for National integration...</p>
                </div>
            </div>
        </section>
    );
}