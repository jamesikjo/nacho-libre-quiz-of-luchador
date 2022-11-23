import { useEffect, useState } from "react";
import { AnswerData } from "../../types/data.types";
import { getData } from "../fetchData";

const useAnswers = (_id: string) => {
  const [answerData, setAnswerData] = useState<AnswerData>({} as AnswerData);

  useEffect(() => {
    async function fetchAnswer() {
      try {
        const { data } = await getData("answer/get", _id);
        setAnswerData(data[0]);
      } catch (err) {
        console.log(err);
      }
    }

    fetchAnswer();
  }, [_id]);

  return [answerData];
};

export default useAnswers;
