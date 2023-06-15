import './home.css'
import Globe from './Common Components/Globe'

export default function Home() {
    return (
        <div className="desktop">
            <div className='hero'>
                <div className='content'>
                    <div className='links'>
                        <p className='sky-high-logistics_'>Sky High Logistics.</p>
                        <p className='get-started'>Get Started</p>
                    </div>
                    <h1 className='s-h-i-p'>SHIP</h1>
                </div>
                <Globe />
            </div>
        </div>
    )
}