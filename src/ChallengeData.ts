function genUniqueId(): string {
  const dateStr = Date.now().toString(36); // convert num to base 36 and stringify

  const randomStr = Math.random().toString(36).substring(2, 8); // start at index 2 to skip decimal point

  return `${dateStr}-${randomStr}-${Math.random()}`;
}

export class ChallengeData {
  question: string;
  answers: string[];
  id: string;

  constructor(question: string, answers: string[]) {
    this.question = question;
    this.answers = answers;
    this.id = genUniqueId();
  }
}
