import { QuestionData } from "../../utils/data.types";

export type Props = {
  question: QuestionData;
};

export type UserAnswer = {
  answer_value: number;
  answer_title: string;
};
