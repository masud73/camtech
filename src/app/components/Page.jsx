export default function Page(props) {
    return (
        <>
            <div className='p-3 d-flex flex-column align-items-center'>
                <a href="/" title="Go Back Home">
                    <img src="../assets/images/logo.jpeg" alt="camtech" className='m-3 rounded border' height={60} width={60} />
                </a>
                {
                    props.deptPage?
                    <>
                        <h1 className='fs-1 fw-bold text-white text-center'>{props.heading}</h1>
                        <p className='text-white fs-5 text-center'>{props.subHeading}</p>
                    </>
                    :
                    <><h1 className='fs-3 text-primary text-center'>{props.heading}</h1>
                    <p className='text-success text-center'>{props.subHeading}</p></>
                }
            </div>
        </>
    );
}