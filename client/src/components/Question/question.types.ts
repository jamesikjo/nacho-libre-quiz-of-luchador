import { QuestionData } from "../../utils/types/QuestionData";

export type Props = {
  question: QuestionData;
};

export type UserAnswer = {
  answer_value: number;
  answer_title: string;
};
