import { Grid, useMediaQuery } from "@mui/material"
import { motion } from "framer-motion";
import { useMemo, } from "react";

export default function DetailsFirstSection() {
    const isMobileView = useMediaQuery('(max-width:800px)');

    const transitions = useMemo(() => {
        return {
            initial: { scale: 0, opacity: 0 },
            whileInView: { scale: 1, opacity: 1, transition: { duration: 1.3, type: "spring" } }
        }
    }, []);

    function DetailsGridRenderer({ header, content, direction }) {

        return (
            <Grid
                component={motion.div}
                initial={{
                    ...transitions.initial,
                    y: direction === 'up' ? -200 : 200,

                }}
                whileInView={{
                    ...transitions.whileInView,
                    y: direction === 'up' ? 0 : 0,
                }}
                minWidth={'200px'}
                maxWidth={'4000px'}
                item xs={isMobileView ? 12 : 5.5} md={isMobileView ? 12 : 5.5}
            >
                <motion.h3 className='ms-home-details-secition-1-content-first-half-left-header'>
                    {header}
                </motion.h3>
                <motion.h3 className='ms-home-details-secition-1-content-first-half-left-content'>
                    {content}
                </motion.h3>
            </Grid>
        )
    }

    function ImageGridRendere({ imgCss, direction = 'left' }) {
        return (
            <Grid
                component={motion.div}
                viewport={{ margin: "55px" }}
                initial={{
                    ...transitions.initial,
                    y: direction === 'left' ? -80200 : 200
                }}
                whileInView={{
                    ...transitions.whileInView,
                    y: direction === 'left' ? 0 : 0,
                }}
                className={imgCss} 
                minWidth={'200px'}
                item xs={isMobileView ? 12 : 5.5}
                md={isMobileView ? 12 : 5.5}>
            </Grid>
        )
    }

    return (
        <div className='section'>
            <Grid container maxWidth={'1440px'} gap={"50px"}>
                <DetailsGridRenderer
                    header={'Handling Your Freight with Expertise in Air and Sea'}
                    content={'Let our experienced team seamlessly manage your imports and exports via air or sea, while you focus on growing your business. There’s nothing holding you back from conquering the world.'}
                    direction="up"
                />
                <ImageGridRendere direction="down" imgCss={'ms-home-details-secition-1-content-first-half-flight-view-image'} />
                <ImageGridRendere direction="up" imgCss={'ms-home-details-secition-1-content-second-half-container-image'} />
                <DetailsGridRenderer
                    header={'Effortless Freight Calculations With a Click'}
                    content={'Say goodbye to tedious calculations and hello to our user-friendly freight calculator. Instantly get accurate costs for your air and sea shipments without breaking a sweat.'}
                    direction="down"
                />
            </Grid>
        </div>
    )
}
