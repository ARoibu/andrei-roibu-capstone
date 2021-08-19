import React from "react";
import './DisplayExercise.scss';
import { Link } from "react-router-dom";


const DisplayExercise = ({exercises}) => {
    console.log(exercises);
    return(
        <div>
            <h1>exercises</h1>
                {exercises
                .map((data) => {
                    return(
                        <div>
                            <img className='display-exercise__image' src={data.image}/>
                            <img className='display-exercise__image' src={data.image2}/>
                            <h2>{data.name}</h2>
                            <p>{data.description}</p>
                            <Link>{data.videolink}</Link>
                        </div>
                    );
                })}
        </div>
    );
};

export default DisplayExercise;