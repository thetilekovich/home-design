import React from "react";


export default function Back(){
    return(
        <div style={{postion:'absoulte', top: '0px', left: '0px'}}>
            <div style={
                {
                    width: '95%',
                    height: '50vh',
                    background: 'rgb(4, 97, 17)',
                    position: 'relative',
                    top: '200px',
                    transform: 'rotate(-40deg)',
                    filter: 'blur(20px)',
                    opacity: '.6',
                    zIndex:'-1',
                    left: '0',
                }
            }></div>
            <div style={
                {
                    width: '95%',
                    height: '50vh',
                    background: 'aqua',
                    position: 'relative',
                    top: '200px',
                    transform: 'rotate(20deg)',
                    filter: 'blur(20px)',
                    opacity: '.8',
                    zIndex:'-1',
                    left: '0',
                }
            }></div>
        </div>
    )
}