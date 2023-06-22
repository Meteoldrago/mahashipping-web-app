import { IconButton, Typography, useMediaQuery } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';
import CountdownProvider from './Common Components/CountdownProvider';
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function GetStarted({ open, handleClose }) {
    const isMobileView = useMediaQuery('(max-width:650px)');

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            className='ms-get-started'
        >
            <div className='ms-get-started-container-scrollable'>
                <div className='ms-get-started-container'>
                    <div className='ms-get-started-content-header-container'>
                        <h2 className='ms-get-started-content-header'>
                            Your Trusted Logistics Partner
                        </h2>
                        <div className='ms-get-started-close-icon-container'>
                            <IconButton className='ms-get-started-close-icon' onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className='ms-get-started-paragraphs'>
                        <Typography className='ms-get-started-content-paragrap-middle'>
                            Welcome aboard Maha Shipping! India’s top-notch logistics company that specializes in both import and export services through air and sea. Fast, efficient, and reliable—we’ve got everything you need to ship your goods like a boss.
                        </Typography>
                        <div className={isMobileView ? 'ms-get-started-content-columns ms-get-started-content-rows' : 'ms-get-started-content-columns'} >
                            {[{ count: 500, value: "Successful Deliveries" }, { count: 120, value: "Global Destinations" }, { count: 24, value: "Hours Support" }].map((value, index) => {
                                return (
                                    <div key={index + value} className='ms-get-started-content-card'>
                                        <CountdownProvider className={'ms-get-started-content-card-numbers'} number={value.count} duration={2} />
                                        <Typography className='ms-get-started-content-card-numbers-paragraph'>{value.value}</Typography>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* <div style={{ background: "#000000",height:"100%" }}>
                    <h2 className='ms-get-started-content-header'>
                        Your Trusted Logistics Partner
                    </h2>
                </div> */}
            </div>
        </Dialog>
    )
}