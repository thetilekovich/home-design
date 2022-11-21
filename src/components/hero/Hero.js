import React from "react";
import Hero1 from "./src/Hero1";
import Hero2 from "./src/Hero2";
import Hero3 from "./src/Hero3";
import Hero4 from "./src/Hero4";
// import Back from "./src/Back";

export default function Hero(){
    return(
        <hero id="hero" style={{position: 'relative'}}>
            <div className="container">
                <div className="hero" style={{margin: '-250px 0 100px 0', color:'#525252',}}>
                    <Hero1/>
                    <Hero2/>
                    <Hero3/>
                    <Hero4/>
                </div>
            </div>
        </hero>
    )
}