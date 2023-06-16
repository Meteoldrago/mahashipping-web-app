import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function GetInTouch() {
    const isMobileView = useMediaQuery('(max-width:650px)');

    return (
        <div className='get-in-touch-container'>
            <h2 className='get-in-touch-header'>
                Get in Touch
            </h2>
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
                <Button className='get-in-touch-container-footer-subscribe-button' variant='contained' >Subscribe</Button>
            </div>
        </div >
    )
}

