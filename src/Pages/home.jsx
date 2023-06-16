import './home.css'
import Globe from './Common Components/Globe'
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import circular from '../icons/circular.png'

export default function Home() {
    const shipScrollRef = useRef(null)
    const imgEl = useRef(null);
    const [imgElLoaded, setImgElLoaded] = useState(false);
    const onImageLoad = () => setImgElLoaded(true);

    useEffect(() => {
        const imgElCurrent = imgEl.current;
        if (imgElCurrent) {
            imgElCurrent.addEventListener('load', onImageLoad);
            return () => imgElCurrent.removeEventListener('load', onImageLoad);
        }
    }, [imgEl]);

    return (
        <div className="ms-home-container">
            <div className='ms-introduction-container'>
                <div ref={shipScrollRef} className='ms-introduction-contents'>
                    <div className='ms-introduction-header-items'>
                        <p className='ms-introduction-header-items-left'>Sky High Logistics.</p>
                        <p className='ms-introduction-header-items-right'>Get Started</p>
                    </div>
                    <img ref={imgEl} className='ms-introduction-contents-circle-image' src={circular} alt='circular' />
                    {imgElLoaded && <motion.h1
                        initial={{ y: -10, scale: 0, opacity: 0 }}
                        whileInView={{ y: -290, scale: 1, opacity: 1, transition: { duration: 1, type: "spring" } }}
                        className='ms-introduction-item-text-content'
                    >
                        SHIP
                    </motion.h1>
                    }
                </div>
                {imgElLoaded && <Globe />}
            </div>
        </div>
    )
}