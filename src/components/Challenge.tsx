import { ChallengeData } from "../ChallengeData";
// import "../Challenge.css";

interface Props {
  data: ChallengeData;
}

function createAnswers(data: ChallengeData) {
  let i = 0;

  return (
    <ul className="list-group">
      {data.answers.map((text) => {
        i++;
        return (
          <li className="list-group-item" key={data.id + "a" + i}>
            <div className="card">
              <div className="card-body">{text}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function Challenge({ data }: Props) {
  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="collapse"
        data-bs-target={"#" + data.id}
      >
        {data.question}
      </button>

      <div className="card" id={data.id}>
        {createAnswers(data)}
      </div>
    </>
  );
}

export default Challenge;
