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
        <form onSubmit={submit}>
            <input type='date' id='date' name='date'/>
            <label for='date'>Date</label>
                       

            <div>
            <input type='text' id='exercise' name='exercise'/>
            <label for='exercise'>Exercise Name</label>
            <input type='number' id='weight' name='weight'/>
            <label for='weight'>Set 1 Weight Used (lbs)</label>
            <input type='number' id='reps' name='reps'/>
            <label for='reps'>Set 1 Number Of Reps</label>
            <input type='number' id='weight2' name='weight2'/>
            <label for='weight2'>Set 2 Weight Used (lbs)</label>
            <input type='number' id='reps2' name='reps'/>
            <label for='reps2'>Set 2 Number Of Reps</label>
            <input type='number' id='weight3' name='weight3'/>
            <label for='weight3'>Set 3 Weight Used (lbs)</label>
            <input type='number' id='reps3' name='reps3'/>
            <label for='reps3'>Set 3 Number Of Reps</label>
            <input type='number' id='weight4' name='weight4'/>
            <label for='weight4'>Set 4 Weight Used (lbs)</label>
            <input type='number' id='reps4' name='reps4'/>
            <label for='reps4'>Set 4 Number Of Reps</label>
            </div>

            <input type='submit' value='SUBMIT'/>

        </form>
    )
}