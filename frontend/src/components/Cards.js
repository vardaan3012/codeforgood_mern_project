


  
  
import React from 'react';

function Card(props){
    return(
        <>
        <div className='cards'>
            <div className="card">
                <img src={props.imgsrc} 
                alt="achievement" 
                className='card__img'
                />
                <div className="card__info">
                    <span className="card__category">
                        {props.title}
                    </span>
                    <h3 className="card__title"> {props.sname} </h3>
                    {/* <a href={props.link} target="_blank">
                        <button className='click'> Watch Now </button>
                    </a> */}
                    <h4 classname="card__desctitle"> {props.hdesc} </h4>
                    <p classname ="card__desc">{props.desc}</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default Card;