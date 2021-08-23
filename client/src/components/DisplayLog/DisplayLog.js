import axios from 'axios';
import { API_URL } from '../../util';
import './DisplayLog.scss'
export default function DisplayLog({logs, onDelete}) {
  
    return(
        <div className='log'>
            {logs
            .map((data) => {
                return(
                    <div className='log__container'>
                    <h2 className='log__date'>{data.date}</h2>
                    <h3 className='log__exercise'>{data.exercise}</h3>
                    <table className='log__table'>
                        <tr>
                            <td></td>
                            <th>Weight (lbs)</th>
                            <th>Reps</th>
                        </tr>
                        <tr>
                            <th>Set 1</th>
                            <td>{data.weight}</td>
                            <td>{data.reps}</td>
                        </tr>
                        <tr>
                            <th>Set 2</th>
                            <td>{data.weight2}</td>
                            <td>{data.reps2}</td>
                        </tr>
                        <tr>
                            <th>Set 3</th>
                            <td>{data.weight3}</td>
                            <td>{data.reps3}</td>
                        </tr>
                        <tr>
                            <th>Set 4</th>
                            <td>{data.weight4}</td>
                            <td>{data.reps4}</td>
                        </tr>
                    </table>
                    <button className='log__button' onClick={() => onDelete(data.id)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
};