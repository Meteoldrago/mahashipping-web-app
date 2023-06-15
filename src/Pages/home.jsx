import './home.css'
import Globe from './Common Components/Globe'
import { motion } from "framer-motion";
import { useRef } from 'react';


export default function Home() {
    const shipScrollRef = useRef(null)

    return (
        <div className="desktop">
            <div className='hero'>
                <div ref={shipScrollRef} className='content'>
                    <div className='links'>
                        <p className='sky-high-logistics_'>Sky High Logistics.</p>
                        <p className='get-started'>Get Started</p>
                    </div>
                    <motion.h1
                        initial={{ y: -10, scale: 0, opacity: 0 }}
                        whileInView={{ y: -290, scale: 1, opacity: 1, transition: { duration: 1, type: "spring" } }}
                        className='s-h-i-p'
                    >
                        SHIP
                    </motion.h1>
                </div>
                <Globe />
            </div>
          
        </div>
    )
}