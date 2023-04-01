import ImageCarousel from './Carousel';
import Events from './Events';
import News from './News';
import Officers from './Officers';
import Resources from './Resources';
import StudyWithUs from './StudyWthUs';
import WelcomeAddress from './WelcomeAddress';


export default function Home()
{
    return (
        <div className="homepage-container">
            <ImageCarousel />
            <WelcomeAddress rector author='Ibrahim Bomai Zarma' pos='Rector' imgSrc='./assets/images/rector.jpg' />
            <StudyWithUs />
            <Resources />
            <div className='news-events-wrapper d-flex mt-3 d-flex bg-secondary bg-opacity-10'>
                <News />
                <Events />
            </div>
            <Officers />
        </div>
    );
}