
import m1 from '../../img/prod1.png';
import React from 'react';


export function CataProd(props) {
    return (
        <>
            <div class="itemss ">
                <div className='names'>
                    <h3>{props.name}</h3>
                    <p>{props.des}</p>
                    <p className='mrcs'>{props.mark}</p>
                </div>
                <img className="d-block w-100" src={m1} />

                <div className='container-buton'>
                    <div className='button'>
                        <a href='https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche'  target="_blank" ><i class="fa fa-whatsapp" aria-hidden="true"></i> CONSULTAR</a>
                    </div>
                    <div className='button-trans'>
                        <a href='#'>VER PRODUCTO</a>
                    </div>

                </div>
            </div>
        </>
    )
};
