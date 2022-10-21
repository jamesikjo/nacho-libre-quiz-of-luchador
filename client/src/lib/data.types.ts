export type AnswerData = {
  _id: string;
  correct_answer: number;
  answer_title: string;
  answer_desc: string;
  answer_img: string;
};

export type QuestionData = {
  _id: string;
  question: string;
  options: {
    option_value: number;
    option_title: string;
  }[];
};
