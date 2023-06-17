import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import { useMemo } from "react";


export default function GetInTouch() {
    const isMobileView = useMediaQuery('(max-width:650px)');

    const transitions = useMemo(() => {
        return {
            initial: { scale: 1, opacity: 1, },
            whileInView: { scale: 1, opacity: 1, transition: { duration: 1.5, type: "spring" } }
        }
    }, []);

    return (
        <div className='get-in-touch-container'>
            <motion.h2
            
                initial={{
                    ...transitions.initial,
                    x: "-120%"
                }}
                whileInView={{
                    ...transitions.whileInView,
                    x: 0,
                }}
                className='get-in-touch-header'>
                Get in Touch
            </motion.h2>
            <motion.div
                style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",width: "100%",}}
                initial={{
                    ...transitions.initial,
                    x: "80%"
                }}
                whileInView={{
                    ...transitions.whileInView,
                    x: 0,
                }}
            >
                <div className='wrapper'>
                    <p className='get-in-touch-contntent-paragraph'>
                        Drop your details and we’ll swiftly reach out to discuss your logistics needs. Discover a world of possibilities with our world-class service.
                    </p>
                </div>
                <div className={isMobileView ? 'get-in-touch-container-footer-mobile' : "get-in-touch-container-footer"}>
                    <TextField
                        InputProps={{ sx: { "& input": { color: 'rgb(0, 43, 54)', height: "10px" } } }}
                        className='get-in-touch-container-footer-input-field'
                        placeholder='name@email.com'
                    />
                    <Button
                        component={motion.div}
                        whileHover={{
                            scale: 1.3,
                            marginLeft: "20px"
                        }}
                        whileTap={{ scale: 1.3 }}
                        className='get-in-touch-container-footer-subscribe-button' variant='contained' >Subscribe</Button>
                </div>
            </motion.div>
        </div >
    )
}

