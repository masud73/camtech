export default function WelcomeAddress(props) {
    return (
        <div id='welcome-msg-outer-container' className="p-5 pb-4 mb-4 d-flex justify-content-center align-items-center">
            <div id='welcome-msg-container' className="p-2 px-5 d-flex justify-content-center align-items-start">
                <div id='welcome-img-container' className="d-flex-column justify-content-center align-items-center">
                    {
                        props.rector?
                        <img
                        alt=""
                        src={props.imgSrc}
                        height={500}
                        width={400}
                        className="d-block"
                        style={{borderRadius: '20px', border: '5px solid black'}}
                    />
                    :
                    <img
                        alt=""
                        src={props.imgSrc}
                        height={400}
                        width={350}
                        className="d-block"
                        style={{borderRadius: '20px', border: '2px dashed green'}}
                    />
                    }
                    {!props.rector && <div>
                        <span className='fs-5 mt-2 d-block text-secondary text-center'>{props.author}</span>
                        <h6 className='fs-5 text-center'>{props.pos}</h6>
                    </div>}
                </div>
                <div className='ps-4' id='welcome-txt'>
                    <h1 className='fs-2 lh-base px-3'>Welcome Message</h1>
                    <p className='lh-lg fs-5 text-wrap px-3' style={{textAlign: 'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia aliquid officiis porro consequatur sapiente quos ea aperiam aspernatur, obcaecati mollitia saepe ratione vitae laudantium culpa perspiciatis quidem suscipit nobis omnis? <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi qui voluptate obcaecati. Rerum saepe provident explicabo beatae reprehenderit, iure id corrupti illo esse ab, veritatis nisi obcaecati nobis sunt natus!</p>
                </div>
            </div>
        </div>
    );
}