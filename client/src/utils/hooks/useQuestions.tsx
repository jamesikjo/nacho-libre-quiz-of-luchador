import { useEffect, useState } from "react";
import { QuestionData } from "../../types/data.types";
import { getData } from "../fetchData";

const useQuestions = () => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const { data } = await getData("questions/get");
        setQuestions(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchQuestions();
  }, []);

  return [questions];
};

export default useQuestions;
