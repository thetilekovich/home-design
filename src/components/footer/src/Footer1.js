import React from "react";
import ins from '../img/instagram.svg'
import fb from '../img/facebook.svg'
import twt from '../img/twitter.svg'
import lin from '../img/linkedin.svg'

export default function Footer1(){
    return(
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1 style={{ 
                fontWeight: '600',
                color: 'wheat',
                fontSize: '40px'
            }}>LOGO</h1>
            <nav>
                <img style={{width: '45px', cursor: 'pointer'}} src={ins} alt="" />
                <img style={{width: '45px', margin: '0 5px 0 10px', cursor: 'pointer'}} src={fb} alt="" />
                <img style={{width: '45px', margin: '0 10px 0 5px', cursor: 'pointer'}} src={twt} alt="" />
                <img style={{width: '45px', cursor: 'pointer'}} src={lin} alt="" />

            </nav>
        </div>
    )
}