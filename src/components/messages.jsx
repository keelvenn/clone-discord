import React from 'react';
import './css/messages.css';


const messages = () => {
    return (
        <div className='messages'>
                <div className='line'></div>
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
                    
                </div>

                

            

        </div>
    )
}

export default messages
