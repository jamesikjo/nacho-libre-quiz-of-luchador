export type QuestionData = {
  _id: string;
  question: string;
  options: {
    option_value: number;
    option_title: string;
  }[];
};
