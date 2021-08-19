import axios from "axios";
import React from "react";
import { API_URL } from "../../util";

export default function CreateLog() {
    
    function submit(event) {
        event.preventDefault();
        const newLog = {
            date: event.target.date.value,
            exercise: event.target.exercise.value,
            weight: event.target.weight.value,
            reps: event.target.reps.value,
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
        <form onSubmit={submit}>
            <input type='date' id='date' name='date'/>
            <label for='date'>Date</label>
                       

            <div>
            <input type='text' id='exercise' name='exercise'/>
            <label for='exercise'>Exercise Name</label>
            <input type='number' id='weight' name='weight'/>
            <label for='weight'>Weight Used (lbs)</label>
            <input type='number' id='reps' name='number of reps'/>
            <label for='reps'>Number Of Reps</label>
            </div>

            <input type='submit' value='SUBMIT'/>

        </form>
    )
}