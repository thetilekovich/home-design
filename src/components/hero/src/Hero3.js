import React from "react";
import hero1 from '../img/hero1.png'

export default function Hero3(){
    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '0 0 100px 0'}}>
                        <div>
                            <h1 style={{ fontWeight: '400', fontSize: '35px'}}>Why Choose Us :</h1>
                            <ul style={{fontWeight: '400', fontSize: '20px'}}>
                                <li>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit,</li> 
                                <li style={{margin: '20px 0 10px 0'}}>sed do eiusmod tempor incididunt ut <br/> labore et dolore </li>
                                <li style={{margin: '10px 0 20px 0'}}>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, </li>
                                <li>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, </li>
                            </ul>
                        </div>
                        <img style={{width: '50%'}} src={hero1} alt="" />
                    </div>
    )
}