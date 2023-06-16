import './home.css'
import { Typography } from '@mui/material';
import CountdownProvider from './Common Components/CountdownProvider';
import AnimateOnScroll from './Common Components/AnimateOnScroll';


export default function Test() {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1]

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", justifyContent: "center" }}>
            {/* <Typography className="slide-content-from-left text-slide-center">SLIDE IN</Typography>
            <Typography className='slide-content-from-left text-slide-center'><CountdownProvider number='250' duration='1' /></Typography> */}
            {arr.map((v, i) => {
                return <AnimateOnScroll
                    key={i}
                    inView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 1,
                            type: "spring"
                        }
                    }}
                > <div

                    style={{ height: "100px", background: "aqua", borderRadius: "15px", width: "100px", display: "flex", flexDirection: "column", gap: '15px', justifyContent: "center", alignItems: "center " }}
                >
                        <Typography className="">SLIDE IN</Typography>
                        <CountdownProvider number={200} duration={1} />
                    </div>
                </AnimateOnScroll>

            })
            }

        </div>
    )
}

//Old method for number counrdown
// export default function CountdownProvider({ number, duration }) {
//     const [count, setCount] = useState("0")
//     useEffect(() => {
//         let start = 0;
//         const end = parseInt(number.substring(0, 3))
//         if (start === end) return;
//         let totalMilSecDur = parseInt(duration);
//         let incrementTime = (totalMilSecDur / end) * 1000;
//         let timer = setInterval(() => {
//             start += 1;
//             setCount(String(start) + number.substring(3))
//             if (start === end) clearInterval(timer)
//         }, incrementTime);
//         return () => clearInterval(timer);
//     }, [number, duration]);

//     return (
//         <>
//             {count}
//         </>
//     );
// }