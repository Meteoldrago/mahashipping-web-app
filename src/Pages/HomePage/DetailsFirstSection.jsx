import { Grid, useMediaQuery } from "@mui/material"

export default function DetailsFirstSection() {
    const isMobileView = useMediaQuery('(max-width:650px)');

    function DetailsGridRenderer({ header, content }) {

        return (
            <Grid minWidth={'200px'} maxWidth={'400px'} item xs={isMobileView ? 12 : 5.5} md={isMobileView ? 12 : 5.5} >
                <h3 className='ms-home-details-secition-1-content-first-half-left-header'>
                    {header}
                </h3>
                <h3 className='ms-home-details-secition-1-content-first-half-left-content'>
                    {content}
                </h3>
            </Grid>
        )
    }

    function ImageGridRendere({ imgCss }) {
        return (
            <Grid className={imgCss} minWidth={'200px'} item xs={isMobileView ? 12 : 5.5} md={isMobileView ? 12 : 5.5}>
            </Grid>
        )
    }

    return (
        <div className='section'>
            <Grid container maxWidth={'1440px'} gap={"20px"}>
                <DetailsGridRenderer
                    header={'Handling Your Freight with Expertise in Air and Sea'}
                    content={'Let our experienced team seamlessly manage your imports and exports via air or sea, while you focus on growing your business. There’s nothing holding you back from conquering the world.'}
                />
                <ImageGridRendere imgCss={'ms-home-details-secition-1-content-first-half-flight-view-image'} />
                <ImageGridRendere imgCss={'ms-home-details-secition-1-content-second-half-container-image'} />
                <DetailsGridRenderer
                    header={'Effortless Freight Calculations With a Click'}
                    content={'Say goodbye to tedious calculations and hello to our user-friendly freight calculator. Instantly get accurate costs for your air and sea shipments without breaking a sweat.'}
                />
            </Grid>
        </div>
    )
}
