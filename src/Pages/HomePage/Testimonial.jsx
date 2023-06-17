import Grid from '@mui/material/Grid'
import { ReactComponent as Sun } from '../../icons/sun.svg'
import { ReactComponent as SunFilled } from '../../icons/sunfilled.svg'
import { motion } from "framer-motion";

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
    const container = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0, // this will set a delay before the children start animating
                staggerChildren: .4 // this will set the time inbetween children animation
            }
        }
    }

    const item = {
        hidden: {
            x: "100vw"
        },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                mass: 0.3
                // remove delay: 0.3,
            }
        }
    }

    return (
        <div className='testimonials'>
            <Grid container
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                variants={container} maxWidth={'1440px'} gap={"20px"} columnSpacing={1} spacing={1} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                {reviews.map((review, index) => {
                    return (
                        <Grid item key={index}
                            component={motion.div}
                            variants={item} minWidth={'320px'} maxWidth={'400px'} xs={6} md={6} className='card'>
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

