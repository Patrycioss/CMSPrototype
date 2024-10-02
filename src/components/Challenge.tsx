import {ChallengeData} from "../ChallengeData"
import Answer from "./Answer";

interface Props {
    data: ChallengeData;
}

function createAnswers(data: ChallengeData) {
    let i = 0;
    
    console.log("Question: " + data.question + " Group key: " + data.id + "list")

    return (
        <ul className="list-group" key={data.id + "list"}>
            {data.answers.map((text) => {
                i++;

                return <Answer id={data.id + "a" + i} text={text}></Answer>
            })}
        </ul>
    );
}

function Challenge({data}: Props) {
    return (
        <>
            <button
                key={data.id + "button"}
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#" + data.id}
                aria-expanded="true"
                aria-controls={data.id}
            >
                {data.question}
            </button>

            <div className="card collapse" id={data.id}>
                <div className="card">
                    {createAnswers(data)}
                </div>
            </div>
        </>
    );
}

export default Challenge;
