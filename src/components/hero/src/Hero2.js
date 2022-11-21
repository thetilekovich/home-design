import React from "react";
import arrow from '../img/Vector.svg'
import sofa from '../img/sofa.png'
import kitchen from '../img/din.png'

export default function Hero2(){
    return(
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems:'center', margin: '0 0 100px 0'}}>
        <div>
        <h1>New in <br/> Store Now</h1>
        <a href="#">Check All <img style={{width: '20px'}} src={arrow} alt="" /></a>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img style={{width: '30%',height: '30%', margin: '0 50px 0 0'}} src={sofa} alt="" />
            <img style={{width: '30%',height: '30%', margin: '0 50px 0 0'}} src={kitchen} alt="" />
        </div>
    </div>
    )
}