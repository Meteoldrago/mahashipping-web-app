
import DetailsFirstSection from './DetailsFirstSection'
import Faq from './Faq'
import GetInTouch from './GetInTouch'
import HomePageFooter from './HomePageFooter'
import Introduction from './Introduction'
import Testimonial from './Testimonial'
import './home.css'

export default function Home() {

    return (
        <div className="ms-home-container">
            <Introduction />
            <DetailsFirstSection />
            <GetInTouch />
            <Faq />
            <Testimonial />
            <HomePageFooter />
        </div >
    )
}