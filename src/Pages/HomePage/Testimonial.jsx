import Grid from '@mui/material/Grid'
import { ReactComponent as Sun } from '../../icons/sun.svg'
import { ReactComponent as SunFilled } from '../../icons/sunfilled.svg'

export default function Testimonial() {
    const reviews = [
        {
            imgSrc: <Sun className='review-logo-sun' />,
            reviewContent: 'Maha Shipping Logistics has been a game-changer in our importing process. Their expertise and quick response times h',
            reviewver: 'TechLogix'
        },
        {
            imgSrc: <SunFilled className='review-logo-sun' />,
            reviewContent: 'We’ve been using Maha Shipping for years and can’t imagine our export business without their incredible service and support.',
            reviewver: 'OceanWave'
        }
    ]
    return (
        <div className='testimonials'>
            <Grid container gap={"20px"} columnSpacing={1} spacing={1} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                {reviews.map((review, index) => {
                    return (
                        <Grid item key={index} maxWidth={'400px'} xs={6} md={6} className='card'>
                            {review.imgSrc}
                            <p className='review-review-content'>{review.reviewContent}</p>
                            <p className='review-name'>{review.reviewver}</p>
                        </Grid>
                    )
                })}

            </Grid>
        </div>
    )
}

