import React from "react";
import hero4 from '../img/hero4.png'
import herosvg from '../img/hero4Svg.svg'
import hero42 from '../img/hero42.png'
export default function Hero4(){
    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{display: 'flex', margin: '40px', justifyContent: 'space-around', alignItems: 'center'}}>
                <img style={{width: '50%'}} src={hero4} alt="" />
                    <div style={{textAlign: 'start', display: 'flex', flexDirection: 'column',alignItems: 'start'}}>
                        <h1>What People Say <br/> About Us </h1>
                        <div style={{display: 'flex', justifyContent: 'center', alighItems: 'center'}}>
                            <img style={{margin:'0 20px 0 0', width: '90px'}} src={herosvg} alt="" />
                            <div style={{display:'flex', flexDirection: 'column'}}>
                                <h3>Sam Josh</h3>
                                <p>Manager</p>
                            </div>
                        </div>
                        <p style={{fontSize: '20px'}}>“Lorem ipsum dolor sit amet,   consectetur <br/> adipiscing elit.”</p>
                        
                    </div> 
            </div> 
                <img style={{width: '45%'}} src={hero42} alt="" />
       </div>
    )
}