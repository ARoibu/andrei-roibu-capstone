
export default function DisplayLog({logs}) {
    return(
        <div>
            {logs
            .map((data) => {
                return(
                    <div>
                    <p>Date: {data.date}</p>
                    <p>Exercise: {data.exercise}</p>
                    <p>Weight: {data.weight}</p>
                    <p>Reps: {data.reps}</p>
                    </div>
                );
            })}
        </div>
    );
};