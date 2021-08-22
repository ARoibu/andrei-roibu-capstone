import React from "react";
import './DisplayExercise.scss';
import { Link } from "react-router-dom";


const DisplayExercise = ({exercises}) => {
    console.log(exercises);
    return(
        <div className='display-exercise'>
                {exercises
                .map((data) => {
                    return(
                        <div className='display-exercise__container'>
                            <img className='display-exercise__image' src={data.image}/>
                            <img className='display-exercise__image' src={data.image2}/>
                            <h2 className='display-exercise__title'>{data.name}</h2>
                            <p className='display-exercise__description'>{data.description}</p>
                            <a className='display-exercise__link' href={data.videolink}>WATCH VIDEO</a>
                        </div>
                    );
                })}
        </div>
    );
};

export default DisplayExercise;