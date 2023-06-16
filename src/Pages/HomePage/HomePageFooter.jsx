import Grid from "@mui/material/Grid";
import { ReactComponent as Twitter } from '../../icons/twitter.svg'
import { ReactComponent as Instagram } from '../../icons/instagram.svg'
import { useMediaQuery } from "@mui/material";

export default function HomePageFooter() {
    const isMobileView = useMediaQuery('(max-width:650px)');

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
        <footer className={isMobileView ? "homepage-footer-mobile homepage-footer" : "homepage-footer"}>
            <Grid container maxWidth={'1400px'} display={"flex"} maxHeight={isMobileView ? "none" : "250px"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} >
                {footerElements.map((footerElement, index) => {
                    return (
                        <Grid width={isMobileView ? "100%" : "inherit"} key={index + footerElement.header} item xs={isMobileView ? 12 : 4} md={isMobileView ? 12 : 4}>
                            <Grid width={isMobileView ? "100%" : "inherit"} item xs={isMobileView ? 12 : 4} md={isMobileView ? 12 : 4}>
                                <p className="homepage-footer-items"> {footerElement.header}</p>
                            </Grid>
                            {footerElement.items.map((item, subIndex) => {
                                return <Grid width={isMobileView ? "100%" : "inherit"} key={item + subIndex} item xs={isMobileView ? 12 : 4} md={isMobileView ? 12 : 4}>
                                    <p className="homepage-footer-items">{item}</p>
                                </Grid>
                            })}
                        </Grid>
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