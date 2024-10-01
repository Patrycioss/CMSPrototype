import Challenge from "./Challenge";
import { ChallengeData } from "../ChallengeData"

interface Props {
  amount: number;
}

function Challenges({ amount }: Props) {
  const challengeMap: ChallengeData[] = [];
  for (let i = 0; i < amount; i++) {
    challengeMap.push(
      new ChallengeData("How are you doing?", ["Good", "Bad", "Great"]),
    );
  }

  console.log(amount);
  return (
    <>
      <ul className="list-group">
        {challengeMap.map((data) => (
          <li className="list-group-item" key={data.id}>
            <Challenge data={data}></Challenge>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Challenges;
