import React from "react";
import hero0 from '../img/hero0.png'



export default function Hero1(){
    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '0 0 100px 0'}}>
                        <img style={{width: '50%'}} src={hero0} alt="" />
                        <div>
                            <h1 style={{ fontWeight: '400', fontSize: '35px'}}>Create Your Home <br/> More Aestetic</h1>
                            <ul style={{fontWeight: '400', fontSize: '20px'}}>
                                <li>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit,</li> 
                                <li style={{margin: '20px 0 10px 0'}}>sed do eiusmod tempor incididunt ut <br/> labore et dolore </li>
                                <li style={{margin: '10px 0 20px 0'}}>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, </li>
                                <li>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, </li>
                            </ul>
                            
                        </div>
                    </div>
    )
}