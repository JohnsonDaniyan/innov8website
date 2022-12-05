import { useRef ,React} from 'react'
import "./pv.css"
import ecube from "../../images/pv-ecube.png"
import innov8 from "../../images/pv-innov8.png"
import { useInView } from "framer-motion"
import { useParallax } from 'react-scroll-parallax'
import Button from '../button/Button'

function Pv() {
    const parallax = useParallax({
        speed: 5,
      });
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    return (
        <div ref={parallax.ref} className='pv'>
            <div  className="pv-wrapper pv-wrapper1"  ref={ref}>
                <div className="pv-ecube">
                    <div 
                    // style={{
                    //     transform: isInView ? "none" : "translateX(-320px)",
                    //     opacity: isInView ? 1 : 0,
                    //     transition: "all 0.9s cubic-bezier(0.88, 0.26, 0.97, 0.57)"
                    // }}
                    className="pv-ecube-card pv-card">
                        <div className="pv-reveal-1" style={{ transform: isInView ? "scale(0)" : "scale(1)"}}></div>
                        <img src={ecube} alt="" className="pv-img pv-img-ecube" />
                        <h1 className="pv-card-header">E CUBE Smart Village</h1>
                        <a href="https://innov8hub.ng/e-cube/"className="pv-ecube-cta pv-card-cta"><Button variant="swipeGrad pvblue">Read More</Button></a>
                    </div>
                </div>
            </div>
            <div className="pv-wrapper pv-wrapper2">
                <div className="pv-innov8">
                    <div 
                    // style={{
                    //     transform: isInView ? "none" : "translateX(320px)",
                    //     opacity: isInView ? 1 : 0,
                    //     transition: "all 0.9s cubic-bezier(0.88, 0.26, 0.97, 0.57)"
                    // }}
                    className="pv-innov8-card pv-card">
                        <div className="pv-reveal pv-reveal-2" style={{ transform: isInView ? "scale(0)" : "scale(1)" }}></div>
                        <img src={innov8} alt="" className="pv-img pv-img-innov8" />
                        <h1 className="pv-card-header">Prototypes Developed</h1>
                        <p className="pv-card-desc">Detailed information of all developed prototypes in the Hub</p>
                        <a href='https://innov8hub.ng/prototypes-developed/' className="pv-card-cta pv-innov8-cta"><Button variant="swipeGrad pvgreen">Read More</Button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pv
