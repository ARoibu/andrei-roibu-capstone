
export default function DisplayLog({logs}) {
    return(
        <div>
            {logs
            .map((data) => {
                return(
                    <div>
                    <p>{data.date}</p>
                    <p>{data.exercise}</p>
                    <p>Set 1 Weight: {data.weight}</p>
                    <p>Set 1 Reps: {data.reps}</p>
                    <p>Set 2 Weight: {data.weight2}</p>
                    <p>Set 2 Reps: {data.reps2}</p>
                    <p>Set 3 Weight: {data.weight3}</p>
                    <p>Set 3 Reps: {data.reps3}</p>
                    <p>Set 4 Weight: {data.weight4}</p>
                    <p>Set 4 Reps: {data.reps4}</p>
                    </div>
                );
            })}
        </div>
    );
};