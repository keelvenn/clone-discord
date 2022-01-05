import React from 'react';
import './css/mainp.css';
import Navmain from './navmain';

const mainp = () => {
    return (
        <div>
            <section className='mainp'>
                <Navmain/>
                <div className='persons'>
                    <p style={{margin: '10px 15px'}}>Online - 8</p>

                    <div className='person'>
                        <div className='circ'></div>
                            <div className='names'>
                                <p className='text' style={{marginLeft: '0px', fontSize: '14px'}}>Nome e Sobrenome</p>
                                <p className='text' style={{marginLeft: '0px', fontSize: '12px'}}>Jogando Sexo2</p>
                            </div>
                    </div>

                    <div className='person'>
                        <div className='circ'></div>
                            <div className='names'>
                                <p className='text' style={{marginLeft: '0px', fontSize: '14px'}}>Nome e Sobrenome</p>
                                <p className='text' style={{marginLeft: '0px', fontSize: '12px'}}>Jogando Sexo2</p>
                            </div>
                    </div>

                    <div className='person'>
                        <div className='circ'></div>
                            <div className='names'>
                                <p className='text' style={{marginLeft: '0px', fontSize: '14px'}}>Nome e Sobrenome</p>
                                <p className='text' style={{marginLeft: '0px', fontSize: '12px'}}>Jogando Sexo2</p>
                            </div>
                    </div>

                    <div className='person'>
                        <div className='circ'></div>
                            <div className='names'>
                                <p className='text' style={{marginLeft: '0px', fontSize: '14px'}}>Nome e Sobrenome</p>
                                <p className='text' style={{marginLeft: '0px', fontSize: '12px'}}>Jogando Sexo2</p>
                            </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default mainp
