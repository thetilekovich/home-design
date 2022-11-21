import React from "react";
import Footer1 from "./src/Footer1";
import Footer2 from "./src/Footer2";


export default function Footer(){
    return(
        <div id="footer" style={{background: '#03494E', padding: '30px'}}>
            <div className="container">
                <div className="footer">
                    <Footer1/>
                </div>
            </div>
            <hr style={{color: 'red'}}/>
            <div className="container">
                <div className="footer">                    
                    <Footer2/>
                </div>
            </div>
        </div>
    )
}