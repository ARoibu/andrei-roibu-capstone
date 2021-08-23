import axios from "axios";
import React from "react";
import { API_URL } from "../../util";
import './CreateLog.scss'

export default function CreateLog() {
    
    function submit(event) {
        event.preventDefault();
        const newLog = {
            date: event.target.date.value,
            exercise: event.target.exercise.value,
            weight: event.target.weight.value,
            reps: event.target.reps.value,
            weight2: event.target.weight2.value,
            reps2: event.target.reps2.value,
            weight3: event.target.weight3.value,
            reps3: event.target.reps3.value,
            weight4: event.target.weight4.value,
            reps4: event.target.reps4.value,
        };
        submitLog(newLog);
        event.target.reset()
    };

    const submitLog = (obj) => {
        axios.post(`${API_URL}/logs`, obj)
            .then((response) => {
                this.setState({logs: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return(
        <form className='form' onSubmit={submit}>
            {/* <label for='date'>Date</label><br/> */}
            <input className='form__field form__field--date' type='date' id='date' required name='date'/><br/>
            {/* <label for='exercise'>Exercise Name</label><br/> */}
            <input className='form__field form__field--name' type='text' id='exercise' required placeholder='Exercise Name' name='exercise'/><br/>
                       

            <div className='form__container'>
                <div>
                    {/* <label for='weight'>Set 1 Weight Used (lbs)</label><br/> */} 
                    <input className='form__field' type='number' required  placeholder='Set 1 lbs' id='weight' name='weight'/><br/>
                    {/* <label for='weight2'>Set 2 Weight Used (lbs)</label><br/> */}
                    <input className='form__field' type='number' placeholder='Set 2 lbs' id='weight2' name='weight2'/><br/>
                    {/* <label for='weight3'>Set 3 Weight Used (lbs)</label><br/> */}
                    <input className='form__field' type='number' placeholder='Set 3 lbs' id='weight3' name='weight3'/><br/>
                    {/* <label for='weight4'>Set 4 Weight Used (lbs)</label><br/> */}
                    <input className='form__field' type='number' placeholder='Set 4 lbs' id='weight4' name='weight4'/><br/>
                </div>
                <div>
                    {/* <label for='reps'>Set 1 Number Of Reps</label><br/> */}
                    <input className='form__field' type='number' required  placeholder='Set 1 reps' id='reps' name='reps'/><br/>          
                    {/* <label for='reps2'>Set 2 Number Of Reps</label><br/> */}
                    <input className='form__field' type='number' placeholder='Set 2 reps' id='reps2' name='reps2'/><br/>
                    {/* <label for='reps3'>Set 3 Number Of Reps</label><br/> */}
                    <input className='form__field' type='number' placeholder='Set 3 reps' id='reps3' name='reps3'/><br/>
                    {/* <label for='reps4'>Set 4 Number Of Reps</label><br/> */}
                    <input className='form__field' type='number' placeholder='Set 4 reps' id='reps4' name='reps4'/><br/>
                </div>
            </div>

            <input className='form__button' type='submit' value='SUBMIT'/>

        </form>
    )
}