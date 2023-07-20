import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import Notify from "../Common Components/Notifiy";
import emailjs from '@emailjs/browser';


export default function GetInTouch() {
    const isMobileView = useMediaQuery('(max-width:650px)');
    const [showAlert, setShowAlert] = useState({ show: false, variant: "success", message: '' })
    const [email, setEmail] = useState(null)
    const form = useRef();

    const isEmailValid = useMemo(() => {
        if (email)
            return email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        else
            return true
    }, [email]);

    const transitions = useMemo(() => {
        return {
            initial: { scale: 1, opacity: 1, },
            whileInView: { scale: 1, opacity: 1, transition: { duration: 1.5, type: "spring" } }
        }
    }, []);

    function handleClickSubscribe(e) {
        e.preventDefault();
        if (email.length > 0) {
            if (isEmailValid) {
                emailjs.sendForm('GmailPV', 'Welcome', form.current, 'fWbl6GA8dSGy36gBf')
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });
                setShowAlert((prev) => ({ ...prev, show: true, message: "Successfully Subscribed", variant: 'success' }))
                setEmail("")
            } else {
                setShowAlert((prev) => ({ ...prev, show: true, message: 'Please enter a valid email address', variant: "error" }))
            }
        } else {
            setShowAlert((prev) => ({ ...prev, show: true, message: 'Email address is empty', variant: "error" }))
        }
    }

    return (
        <>
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
                    style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", }}
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
                    <form id="email-form" ref={form} onSubmit={handleClickSubscribe} className={isMobileView ? 'get-in-touch-container-footer-mobile' : "get-in-touch-container-footer"}>
                        <TextField
                            InputProps={{ sx: { "& input": { color: 'rgb(0, 43, 54)', height: "10px" } } }}
                            name="to_email"
                            sx={{ marginTop: "0px" }}
                            className='get-in-touch-container-footer-input-field'
                            placeholder='name@email.com'
                            type="email"
                            value={email || ""}
                            onChange={({ target: { value } }) => setEmail(value)}
                            error={isEmailValid === null}
                            helperText={isEmailValid ? "" : "Please enter a valid email address"}
                        />
                        <Button
                            component={motion.button}
                            whileHover={{
                                scale: 1.3,
                                marginLeft: "20px"
                            }}
                            whileTap={{ scale: 1.3 }}
                            type="submit"
                            form="email-form"
                            className='get-in-touch-container-footer-subscribe-button' variant='contained' >Subscribe</Button>
                    </form>
                </motion.div>
            </div >
            {showAlert.show && <Notify openNotify={showAlert.show} message={showAlert.message} variant={showAlert.variant} onClose={setShowAlert} />}
        </>
    )
}

