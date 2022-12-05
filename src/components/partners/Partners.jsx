import React from 'react'
import "./partners.css"
import ptn1 from "../../images/partners/ptr-img1.png";
import ptn2 from "../../images/partners/ptr-img2.png";
import ptn3 from "../../images/partners/ptr-img3.png";
import ptn4 from "../../images/partners/ptr-img4.png";
import ptn5 from "../../images/partners/ptr-img5.png";
import ptn6 from "../../images/partners/ptr-img6.png";
import ptn7 from "../../images/partners/ptr-img7.png";
import ptn8 from "../../images/partners/ptr-img8.png";

import ptn2_1 from "../../images/partners/ptr-img2-1.png";
import ptn2_2 from "../../images/partners/ptr-img2-2.png";
import ptn2_3 from "../../images/partners/ptr-img2-3.png";
import ptn2_4 from "../../images/partners/ptr-img2-4.png";
import ptn2_5 from "../../images/partners/ptr-img2-5.png";
import ptn2_6 from "../../images/partners/ptr-img2-6.png";
import ptn2_7 from "../../images/partners/ptr-img2-7.png";
import ptn2_8 from "../../images/partners/ptr-img2-8.png";
import vectorBottomGreen from "../../images/vector-bottom-green.svg"
function partners() {
    // for(var i=1;i<=8;i++){
    //     console.log('import ptn2_'+i+' from "../../images/partners/ptr-img2-'+i+'.png";')
    // }
  return (
    <div className='pts'>
        <img src={vectorBottomGreen} alt="" className="vectorBottomGreen" />
        <div className="pts-wrapper w-full">
        <h1 className="pts-header">Partners</h1>
        <div className="pts-companies flex">
            <div className="pts-companies-row">
                <a href="" className="pts-comp-link-r1"><img src={ptn1} alt="" className="pts-comp-img ptn-r1 h-fill"  /></a>
                <a href="" className="pts-comp-link-r1"><img src={ptn2} alt="" className="pts-comp-img ptn-r1" /></a>
                <a href="" className="pts-comp-link-r1"><img src={ptn3} alt="" className="pts-comp-img ptn-r1" /></a>
                <a href="" className="pts-comp-link-r1"><img src={ptn4} alt="" className="pts-comp-img ptn-r1" /></a>
                <a href="" className="pts-comp-link-r1"><img src={ptn5} alt="" className="pts-comp-img ptn-r1" /></a>
                <a href="" className="pts-comp-link-r1"><img src={ptn6} alt="" className="pts-comp-img ptn-r1" /></a>
                <a href="" className="pts-comp-link-r1"><img src={ptn7} alt="" className="pts-comp-img ptn-r1" /></a>
                <a href="" className="pts-comp-link-r1"><img src={ptn8} alt="" className="pts-comp-img ptn-r1" /></a>
            </div>
            <div className="pts-companies-row row2">
                <a href="" className="pts-comp-link-r2"><img src={ptn2_1} alt="" className="pts-comp-img ptn-r2" /></a>
                <a href="" className="pts-comp-link-r2"><img src={ptn2_2} alt="" className="pts-comp-img ptn-r2" /></a>
                <a href="" className="pts-comp-link-r2"><img src={ptn2_3} alt="" className="pts-comp-img ptn-r2" /></a>
                <a href="" className="pts-comp-link-r2"><img src={ptn2_4} alt="" className="pts-comp-img ptn-r2" /></a>
                <a href="" className="pts-comp-link-r2"><img src={ptn2_5} alt="" className="pts-comp-img ptn-r2" /></a>
                <a href="" className="pts-comp-link-r2"><img src={ptn2_6} alt="" className="pts-comp-img ptn-r2" /></a>
                <a href="" className="pts-comp-link-r2"><img src={ptn2_7} alt="" className="pts-comp-img ptn-r2" /></a>
                <a href="" className="pts-comp-link-r2"><img src={ptn2_8} alt="" className="pts-comp-img ptn-r2" /></a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default partners