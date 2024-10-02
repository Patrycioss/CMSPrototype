import Challenge from "./Challenge";
import { ChallengeData } from "../ChallengeData"

function Challenges() {
  
  let fileText : string = "How are you doing?Fine,Alright,Good,Bad,Decent,Meh,Amazing,Awful,Fantastic,Great\n" +
      "What is your favourite colour?Red,Green,Blue,Yellow,Purple,Orange,Lightblue,Pink,Magenta,Cyan\n" +
      "What is your favourite animal?Dog,Cat,Lion,Wolf,Tiger,Snake,Monkey,Shark,Elephant,Tucan\n" +
      "What is your favourite kitchen (food origin)?Italian,Chinese,Japanese,French,Spanish,Indian,Greek,Thai,Mexican,American\n"
  
  // fetch("https://github.com/Patrycioss/CMSPrototype/blob/030ec03680d3f146037f192c81429d0a573c8a0e/public/question.txt")
  //     .then(function (response){
  //       response.text().then(function (text){
  //         fileText = text;
  //       })
  //     })
  
  // const file : string = fs.readFileSync('public/question.txt', 'utf-8')
  const lines : string[] = fileText.split('\n')
  const challengeMap: ChallengeData[] = [];
  
  for (let i = 0; i < lines.length; i++){
    console.log(lines[i])
  }
  
  for (let i = 0; i < lines.length; i++) {
    
    if (!lines[i].trim()){
      continue;
    }

    const parts : string[] = lines[i].split('?');
    const question : string = parts[0] + "?";
    console.log(question + parts.length)
    const answers : string[] = parts[1].split(',');
    challengeMap.push(new ChallengeData(question, answers));
  }

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
