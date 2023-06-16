import Grid from "@mui/material/Grid";
import { ReactComponent as Twitter } from '../../icons/twitter.svg'
import { ReactComponent as Instagram } from '../../icons/instagram.svg'

export default function HomePageFooter() {
    const footerElements = [
        {
            header: "Services",
            items: ["Air", "Sea", "Insurance"]
        },
        {
            header: "Tools",
            items: ["Calculator", "Tracking", "FAQs"]
        }, {
            header: "Contact",
            items: ["Email", "Phone", "Messenger"]
        }
    ];

    return (
        <footer className="homepage-footer">
            <Grid container display={"flex"} maxHeight={"250px"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} >
                {footerElements.map((footerElement, index) => {
                    return (
                        <>
                            <Grid width="inherit" key={index + footerElement.header} item xs={4} md={4}>
                                <p className="homepage-footer-items"> {footerElement.header}</p>
                            </Grid>
                            {footerElement.items.map((item, subIndex) => {
                                return <Grid width="inherit" key={item + subIndex} item xs={4} md={4}>
                                    <p className="homepage-footer-items">{item}</p>
                                </Grid>
                            })}
                        </>
                    )
                })}
            </Grid>
            <div className="copyright">
                <p className="copyright-text">Maha Shipping Logistics © 2023. Conquering the globe.</p>
                <div className="copyright-icons">
                    <Instagram />
                    <Twitter />
                </div>
            </div>
        </footer>
    )
}