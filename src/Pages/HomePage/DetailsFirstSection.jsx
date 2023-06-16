import { Grid, useMediaQuery } from "@mui/material"

export default function DetailsFirstSection() {
    const isMobileView = useMediaQuery('(max-width:650px)');

    function temp() {
        return (
            <>
                <div className={isMobileView ? "wrapper wrapper-mobile" : 'wrapper'}>
                    <div className='left'>
                        <h3 className='ms-home-details-secition-1-content-first-half-left-header'>
                            Handling Your Freight with Expertise in Air and Sea
                        </h3>
                        <h3 className='ms-home-details-secition-1-content-first-half-left-content'>
                            Let our experienced team seamlessly manage your imports and exports via air or sea, while you focus on growing your business. There’s nothing holding you back from conquering the world.
                        </h3>
                    </div>
                    <div className={isMobileView ? 'ms-home-details-secition-1-content-first-half-flight-view-image ms-home-details-secition-1-content-first-half-flight-view-image-mobile' : "ms-home-details-secition-1-content-first-half-flight-view-image"}>
                    </div>
                </div>
                <div className={isMobileView ? "wrapper wrapper-mobile" : 'wrapper'}>
                    <div className='ms-home-details-secition-1-content-second-half-container-image' />
                    <div className='left'>
                        <h3 className='ms-home-details-secition-1-content-second-half-left-header'>
                            Effortless Freight Calculations With a Click                        </h3>
                        <h3 className='ms-home-details-secition-1-content-second-half-left-content'>
                            Say goodbye to tedious calculations and hello to our user-friendly freight calculator. Instantly get accurate costs for your air and sea shipments without breaking a sweat.
                        </h3>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='section'>
            <Grid container>
                <Grid item xs={6} md={6}>
                    <h3 className='ms-home-details-secition-1-content-first-half-left-header'>
                        Handling Your Freight with Expertise in Air and Sea
                    </h3>
                    <h3 className='ms-home-details-secition-1-content-first-half-left-content'>
                        Let our experienced team seamlessly manage your imports and exports via air or sea, while you focus on growing your business. There’s nothing holding you back from conquering the world.
                    </h3>
                </Grid>
                <Grid item xs={6} md={6}>
                    <div className="ms-home-details-secition-1-content-first-half-flight-view-image" />
                </Grid>
                <Grid item xs={6} md={6}>
                    <div className='ms-home-details-secition-1-content-second-half-container-image' />
                </Grid>
                <Grid item xs={6} md={6}>
                    <h3 className='ms-home-details-secition-1-content-second-half-left-header'>
                        Effortless Freight Calculations With a Click                        </h3>
                    <h3 className='ms-home-details-secition-1-content-second-half-left-content'>
                        Say goodbye to tedious calculations and hello to our user-friendly freight calculator. Instantly get accurate costs for your air and sea shipments without breaking a sweat.
                    </h3>
                </Grid>
            </Grid>

        </div>
    )
}
