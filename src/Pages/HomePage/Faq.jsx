import Grid from "@mui/material/Grid";
import { useMemo } from "react";

export default function Faq() {

    const faqs = useMemo(() => {
        return [
            { question: 'How long does shipping take?', answer: 'Our shipping times vary depending on the shipping method chosen. Air shipping takes between 1-2 weeks, while sea shipping takes 4-6 weeks.' },
            { question: 'What’s the cost of shipping?', answer: 'Shipping costs depend on the freight weight, volume, destination, and mode of transport.You can use our handy freight calculator to get a quote.' },
            { question: 'Do you offer insurance?', answer: 'Yes, we provide insurance options to cover your cargo while in transit, giving you peace of mind.' },
            { question: 'Can I track my shipment?', answer: 'Absolutely! We offer state-of-the-art tracking services so you can follow your freight every step of the way.' }
        ]
    }, []);

    return (
        <div className='f-a-q'>
            <h2 className='faq-header'>Logistics Wizardry - Answered!</h2>
            <Grid container columnSpacing={1} spacing={1}>
                {faqs.map((faq, index) => {
                    return <Grid key={index + faq.question} maxWidth={'400px'} xs={6} md={6} item className='q-a'>
                        <h2 className='faq-question'>{faq.question}</h2>
                        <h2 className='faq-answer'>{faq.answer}</h2>
                    </Grid>
                })}
            </Grid>
        </div>
    )
}
