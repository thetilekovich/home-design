import React from "react";
import bg from './img/home.png'
import Button from "../../btn/Button";
export const Home = () =>{
    return (
        <div id="home" style={{position: 'relative', zIndex: '1',}}>
            <div className="container">
                <div className="home" style={
                    {
                        margin: '0 0 100vh 0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        flexDirection: 'column'
                    }
                }>
                    
                    <img style={
                        {position: 'absolute', top: '0px', left: '0', width: '100%',filter: 'blur(4px)' }
                        }  src={bg} alt="" />
                        <div style={{ width: '80%', margin: '250px 0 0 0', position: 'relative', zIndex: '6'}}>
                            <h1 style={{color: 'aqua', fontSize: '46px'}}>
                            Simpify Your Home <br/> Furniture
                            </h1>
                            <p style={{
                                color: 'aqua',
                                fontSize: '25px',
                                fontWeight: '300',
                                margin: '70px 0 70px 0',
                                background: '#006970',
                                padding: '20px 10px',
                                borderRadius: '20px',
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore </p>
                                <Button/>
                        </div>
                        <div style={{
                            width: '70%',
                            height: '80px',
                            border: '1px solid black',
                            background: '#006970',
                            position:'absolute',
                            borderRadius: '15px',
                            border: 'none',
                            top: '120vh',
                            zIndex: '5',
                            padding: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            
                        }}>
                            <div  style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '25%',
                                height: '90%',
                                borderRight: '1px solid wheat'
                            }}>
                                <h2 style={{color: 'white', fontWeight: '400',}}>7 years <br/> experiences</h2>
                            </div>
                            <div  style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '25%',
                                height: '90%',
                                borderRight: '1px solid wheat'
                            }}>
                                <h2 style={{color: 'white', fontWeight: '400',}}>2 years <br/> opened in country</h2>
                            </div>
                            <div  style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '25%',
                                height: '90%',
                                borderRight: '1px solid wheat'
                            }}>
                                <h2 style={{color: 'white', fontWeight: '400',}}>12k+ <br/> furnitures <br/> sold</h2>
                            </div>
                            <div  style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '25%',
                                height: '90%',
                            }}>
                                <h2 style={{color: 'white', fontWeight: '400',}}>150 <br/> types of <br/> furniture</h2>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
